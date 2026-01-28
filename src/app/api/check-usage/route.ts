import { NextRequest, NextResponse } from 'next/server'
import { getPhoneUsageToday, incrementPhoneUsage, DAILY_LIMIT } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { phone, action } = await request.json()

    if (!phone) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      )
    }

    const normalizedPhone = phone.replace(/\D/g, '')

    if (action === 'check') {
      const usageCount = await getPhoneUsageToday(normalizedPhone)
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
      const currentUsage = await getPhoneUsageToday(normalizedPhone)
      
      if (currentUsage >= DAILY_LIMIT) {
        return NextResponse.json({
          canUse: false,
          usageCount: currentUsage,
          remaining: 0,
          limit: DAILY_LIMIT,
          message: 'Daily limit reached. Please upgrade to continue.',
        })
      }

      const newCount = await incrementPhoneUsage(normalizedPhone)
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
