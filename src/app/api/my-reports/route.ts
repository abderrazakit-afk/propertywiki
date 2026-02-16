import { NextRequest, NextResponse } from 'next/server'
import { getReportsByEmail, verifyCode, createSessionToken, getEmailUsageToday, DAILY_LIMIT } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { email, code, sessionToken } = await request.json()

    if (sessionToken) {
      const { validateSessionToken } = await import('@/lib/mongodb')
      const validEmail = await validateSessionToken(sessionToken)
      if (!validEmail) {
        return NextResponse.json({ error: 'Session expired.' }, { status: 401 })
      }
      const reports = await getReportsByEmail(validEmail)
      return NextResponse.json({
        reports: reports.map(r => {
          const doc = r as unknown as Record<string, unknown>
          const rpt = r.report as Record<string, unknown>
          return {
            id: doc._id?.toString(),
            description: r.description,
            budget: r.budget,
            reportTitle: rpt?.reportTitle || 'Property Report',
            areas: (rpt?.recommendedAreas as Array<Record<string, unknown>>)?.map(a => a.areaName) || [],
            createdAt: r.createdAt,
          }
        }),
        email: validEmail,
      })
    }

    if (!email || !code) {
      return NextResponse.json({ error: 'Email and code are required.' }, { status: 400 })
    }

    const isValid = await verifyCode(email, code)
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid or expired verification code.' }, { status: 400 })
    }

    const token = await createSessionToken(email)
    const reports = await getReportsByEmail(email)
    const usageCount = await getEmailUsageToday(email)

    return NextResponse.json({
      reports: reports.map(r => {
        const doc = r as unknown as Record<string, unknown>
        const rpt = r.report as Record<string, unknown>
        return {
          id: doc._id?.toString(),
          description: r.description,
          budget: r.budget,
          reportTitle: rpt?.reportTitle || 'Property Report',
          areas: (rpt?.recommendedAreas as Array<Record<string, unknown>>)?.map(a => a.areaName) || [],
          createdAt: r.createdAt,
        }
      }),
      email: email.toLowerCase(),
      sessionToken: token,
      remaining: Math.max(0, DAILY_LIMIT - usageCount),
    })
  } catch (error) {
    console.error('My reports API error:', error)
    return NextResponse.json({ error: 'Failed to fetch reports.' }, { status: 500 })
  }
}
