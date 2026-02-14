import { NextRequest, NextResponse } from 'next/server'
import { verifyCode, getEmailUsageToday, DAILY_LIMIT } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json()

    if (!email || !code) {
      return NextResponse.json(
        { error: 'Email and code are required.' },
        { status: 400 }
      )
    }

    const isValid = await verifyCode(email, code)

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid or expired verification code.' },
        { status: 400 }
      )
    }

    const usageCount = await getEmailUsageToday(email)
    const remaining = Math.max(0, DAILY_LIMIT - usageCount)
    const canUse = usageCount < DAILY_LIMIT

    return NextResponse.json({
      verified: true,
      canUse,
      remaining,
      limit: DAILY_LIMIT,
    })
  } catch (error) {
    console.error('Verify email error:', error)
    return NextResponse.json(
      { error: 'Verification failed. Please try again.' },
      { status: 500 }
    )
  }
}
