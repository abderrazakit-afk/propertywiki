import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { storeVerificationCode } from '@/lib/mongodb'

const resend = new Resend(process.env.RESEND_API_KEY)

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const code = generateCode()
    await storeVerificationCode(email, code)

    await resend.emails.send({
      from: 'PropertyWiki <support@propertywiki.ai>',
      to: email,
      subject: 'Your PropertyWiki Verification Code',
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px; background: #faf8f6;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #9b7260; font-size: 24px; margin: 0;">PropertyWiki</h1>
            <p style="color: #6b6b6b; font-size: 14px; margin-top: 4px;">Your Real Estate Knowledge Hub</p>
          </div>
          <div style="background: white; border-radius: 16px; padding: 32px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <p style="color: #333; font-size: 16px; margin: 0 0 8px;">Your verification code is:</p>
            <div style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #9b7260; padding: 16px 0; font-family: monospace;">
              ${code}
            </div>
            <p style="color: #888; font-size: 13px; margin: 16px 0 0;">This code expires in 10 minutes.</p>
          </div>
          <p style="color: #aaa; font-size: 12px; text-align: center; margin-top: 24px;">
            If you didn't request this code, please ignore this email.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Send verification error:', error)
    return NextResponse.json(
      { error: 'Failed to send verification code. Please try again.' },
      { status: 500 }
    )
  }
}
