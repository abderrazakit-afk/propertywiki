import { MongoClient, Db } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_TRANSACTIONS_URI = process.env.MONGODB_TRANSACTIONS_URI

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null
let cachedTransactionsClient: MongoClient | null = null
let cachedTransactionsDb: Db | null = null

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable')
  }

  const client = new MongoClient(MONGODB_URI)
  await client.connect()
  const db = client.db('propertywiki')
  cachedClient = client
  cachedDb = db
  return { client, db }
}

export async function connectToTransactionsDb(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedTransactionsClient && cachedTransactionsDb) {
    return { client: cachedTransactionsClient, db: cachedTransactionsDb }
  }

  if (!MONGODB_TRANSACTIONS_URI) {
    throw new Error('Please define the MONGODB_TRANSACTIONS_URI environment variable')
  }

  const client = new MongoClient(MONGODB_TRANSACTIONS_URI)
  await client.connect()
  const db = client.db('transactions_db')
  cachedTransactionsClient = client
  cachedTransactionsDb = db
  return { client, db }
}

export interface EmailVerification {
  email: string
  code: string
  createdAt: Date
  expiresAt: Date
  verified: boolean
}

export interface EmailUsage {
  email: string
  date: string
  count: number
  createdAt: Date
  updatedAt: Date
}

export async function storeVerificationCode(email: string, code: string): Promise<void> {
  const { db } = await connectToDatabase()
  const now = new Date()
  const expiresAt = new Date(now.getTime() + 10 * 60 * 1000)

  await db.collection<EmailVerification>('email_verifications').updateOne(
    { email: email.toLowerCase() },
    {
      $set: {
        code,
        createdAt: now,
        expiresAt,
        verified: false,
      },
    },
    { upsert: true }
  )
}

export async function verifyCode(email: string, code: string): Promise<boolean> {
  const { db } = await connectToDatabase()
  const record = await db.collection<EmailVerification>('email_verifications').findOne({
    email: email.toLowerCase(),
    code,
    verified: false,
  })

  if (!record) return false
  if (new Date() > record.expiresAt) return false

  await db.collection<EmailVerification>('email_verifications').updateOne(
    { email: email.toLowerCase() },
    { $set: { verified: true } }
  )

  return true
}

export async function getEmailUsageToday(email: string): Promise<number> {
  const { db } = await connectToDatabase()
  const today = new Date().toISOString().split('T')[0]

  const usage = await db.collection<EmailUsage>('email_usage').findOne({
    email: email.toLowerCase(),
    date: today,
  })

  return usage?.count || 0
}

export async function incrementEmailUsage(email: string): Promise<number> {
  const { db } = await connectToDatabase()
  const today = new Date().toISOString().split('T')[0]
  const now = new Date()

  const result = await db.collection<EmailUsage>('email_usage').findOneAndUpdate(
    { email: email.toLowerCase(), date: today },
    {
      $inc: { count: 1 },
      $set: { updatedAt: now },
      $setOnInsert: { createdAt: now },
    },
    { upsert: true, returnDocument: 'after' }
  )

  return result?.count || 1
}

export const DAILY_LIMIT = 3
