import { NextRequest, NextResponse } from 'next/server'
import { getEmailUsageToday, incrementEmailUsage, DAILY_LIMIT } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { email, action } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()

    if (action === 'check') {
      const usageCount = await getEmailUsageToday(normalizedEmail)
      const remaining = Math.max(0, DAILY_LIMIT - usageCount)
      const canUse = usageCount < DAILY_LIMIT

      return NextResponse.json({
        canUse,
        usageCount,
        remaining,
        limit: DAILY_LIMIT,
      })
    }

    if (action === 'increment') {
      const currentUsage = await getEmailUsageToday(normalizedEmail)

      if (currentUsage >= DAILY_LIMIT) {
        return NextResponse.json({
          canUse: false,
          usageCount: currentUsage,
          remaining: 0,
          limit: DAILY_LIMIT,
          message: 'Daily limit reached. Please upgrade to continue.',
        })
      }

      const newCount = await incrementEmailUsage(normalizedEmail)
      const remaining = Math.max(0, DAILY_LIMIT - newCount)

      return NextResponse.json({
        canUse: true,
        usageCount: newCount,
        remaining,
        limit: DAILY_LIMIT,
      })
    }

    return NextResponse.json(
      { error: 'Invalid action. Use "check" or "increment".' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Usage check error:', error)
    return NextResponse.json(
      { error: 'Failed to check usage' },
      { status: 500 }
    )
  }
}
