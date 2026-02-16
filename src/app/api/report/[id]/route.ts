import { NextRequest, NextResponse } from 'next/server'
import { validateSessionToken, getReportById } from '@/lib/mongodb'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = request.headers.get('x-session-token')
    if (!token) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 })
    }

    const email = await validateSessionToken(token)
    if (!email) {
      return NextResponse.json({ error: 'Session expired. Please sign in again.' }, { status: 401 })
    }

    const { id } = params
    const report = await getReportById(id)
    if (!report) {
      return NextResponse.json({ error: 'Report not found.' }, { status: 404 })
    }

    if (report.email.toLowerCase() !== email.toLowerCase()) {
      return NextResponse.json({ error: 'Access denied.' }, { status: 403 })
    }

    return NextResponse.json({
      id,
      description: report.description,
      budget: report.budget,
      report: report.report,
      createdAt: report.createdAt,
    })
  } catch (error) {
    console.error('Report fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch report.' }, { status: 500 })
  }
}
