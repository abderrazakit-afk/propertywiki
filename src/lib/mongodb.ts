import { MongoClient, Db } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = new MongoClient(MONGODB_URI!)
  await client.connect()
  
  const db = client.db('propertywiki')
  
  cachedClient = client
  cachedDb = db
  
  return { client, db }
}

export interface PhoneUsage {
  phone: string
  date: string
  count: number
  createdAt: Date
  updatedAt: Date
}

export async function getPhoneUsageToday(phone: string): Promise<number> {
  const { db } = await connectToDatabase()
  const today = new Date().toISOString().split('T')[0]
  
  const usage = await db.collection<PhoneUsage>('phone_usage').findOne({
    phone,
    date: today,
  })
  
  return usage?.count || 0
}

export async function incrementPhoneUsage(phone: string): Promise<number> {
  const { db } = await connectToDatabase()
  const today = new Date().toISOString().split('T')[0]
  const now = new Date()
  
  const result = await db.collection<PhoneUsage>('phone_usage').findOneAndUpdate(
    { phone, date: today },
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
