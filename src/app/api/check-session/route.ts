import { NextRequest, NextResponse } from 'next/server'
import { validateSessionToken, getEmailUsageToday, DAILY_LIMIT } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { sessionToken } = await request.json()

    if (!sessionToken) {
      return NextResponse.json({ valid: false })
    }

    const email = await validateSessionToken(sessionToken)
    if (!email) {
      return NextResponse.json({ valid: false })
    }

    const usageCount = await getEmailUsageToday(email)
    const remaining = Math.max(0, DAILY_LIMIT - usageCount)
    const canUse = usageCount < DAILY_LIMIT

    return NextResponse.json({
      valid: true,
      email,
      canUse,
      remaining,
      limit: DAILY_LIMIT,
    })
  } catch (error) {
    console.error('Check session error:', error)
    return NextResponse.json({ valid: false })
  }
}
