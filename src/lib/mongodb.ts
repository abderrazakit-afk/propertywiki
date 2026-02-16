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
  name?: string
  phone?: string
}

export interface EmailUsage {
  email: string
  date: string
  count: number
  createdAt: Date
  updatedAt: Date
}

export async function storeVerificationCode(email: string, code: string, name?: string, phone?: string): Promise<void> {
  const { db } = await connectToDatabase()
  const now = new Date()
  const expiresAt = new Date(now.getTime() + 10 * 60 * 1000)

  const setFields: Record<string, unknown> = {
    code,
    createdAt: now,
    expiresAt,
    verified: false,
  }
  if (name) setFields.name = name
  if (phone) setFields.phone = phone

  await db.collection<EmailVerification>('email_verifications').updateOne(
    { email: email.toLowerCase() },
    { $set: setFields },
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

export interface SessionToken {
  token: string
  email: string
  createdAt: Date
  expiresAt: Date
}

export async function createSessionToken(email: string): Promise<string> {
  const { db } = await connectToDatabase()
  const crypto = await import('crypto')
  const token = crypto.randomBytes(32).toString('hex')
  const now = new Date()
  const expiresAt = new Date(now.getTime() + 30 * 60 * 1000)

  await db.collection<SessionToken>('session_tokens').updateOne(
    { email: email.toLowerCase() },
    {
      $set: {
        token,
        email: email.toLowerCase(),
        createdAt: now,
        expiresAt,
      },
    },
    { upsert: true }
  )

  return token
}

export async function validateSessionToken(token: string): Promise<string | null> {
  const { db } = await connectToDatabase()
  const session = await db.collection<SessionToken>('session_tokens').findOne({
    token,
    expiresAt: { $gt: new Date() },
  })

  return session?.email || null
}

export interface SavedReport {
  email: string
  name?: string
  phone?: string
  description: string
  budget: number
  report: Record<string, unknown>
  createdAt: Date
}

export async function saveReport(
  email: string,
  description: string,
  budget: number,
  report: Record<string, unknown>,
  name?: string,
  phone?: string
): Promise<string> {
  const { db } = await connectToDatabase()
  const result = await db.collection<SavedReport>('saved_reports').insertOne({
    email: email.toLowerCase(),
    name: name || undefined,
    phone: phone || undefined,
    description,
    budget,
    report,
    createdAt: new Date(),
  })
  return result.insertedId.toString()
}

export async function getReportsByEmail(email: string): Promise<SavedReport[]> {
  const { db } = await connectToDatabase()
  return db.collection<SavedReport>('saved_reports')
    .find({ email: email.toLowerCase() })
    .sort({ createdAt: -1 })
    .limit(20)
    .toArray()
}

export async function getReportById(reportId: string): Promise<SavedReport | null> {
  const { ObjectId } = await import('mongodb')
  const { db } = await connectToDatabase()
  try {
    return await db.collection<SavedReport>('saved_reports').findOne({ _id: new ObjectId(reportId) as any })
  } catch {
    return null
  }
}

export const CHAT_DAILY_LIMIT = 20

export async function getChatUsageToday(email: string): Promise<number> {
  const { db } = await connectToDatabase()
  const today = new Date().toISOString().split('T')[0]
  const usage = await db.collection('chat_usage').findOne({
    email: email.toLowerCase(),
    date: today,
  })
  return usage?.count || 0
}

export async function incrementChatUsage(email: string): Promise<number> {
  const { db } = await connectToDatabase()
  const today = new Date().toISOString().split('T')[0]
  const now = new Date()
  const result = await db.collection('chat_usage').findOneAndUpdate(
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
