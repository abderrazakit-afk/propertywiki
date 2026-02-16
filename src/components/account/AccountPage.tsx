'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface ReportSummary {
  id: string
  description: string
  budget: number
  reportTitle: string
  areas: string[]
  createdAt: string
}

export default function AccountPage() {
  const [step, setStep] = useState<'login' | 'verify' | 'profile'>('login')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [reports, setReports] = useState<ReportSummary[]>([])
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('pw_session_token')
    if (stored) {
      fetchReports(stored)
    }
  }, [])

  const fetchReports = async (token: string) => {
    try {
      const res = await fetch('/api/my-reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionToken: token }),
      })
      const data = await res.json()
      if (res.ok && data.reports) {
        setReports(data.reports)
        setEmail(data.email)
        if (data.remaining !== undefined) setRemaining(data.remaining)
        setStep('profile')
      } else {
        localStorage.removeItem('pw_session_token')
      }
    } catch {
      localStorage.removeItem('pw_session_token')
    }
  }

  const handleSendCode = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/send-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to send code.')
        return
      }
      setCodeSent(true)
      setStep('verify')
    } catch {
      setError('Failed to send verification code.')
    } finally {
      setLoading(false)
    }
  }

  const handleVerify = async () => {
    if (code.length !== 6) {
      setError('Please enter the 6-digit code.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/my-reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Verification failed.')
        return
      }
      if (data.sessionToken) {
        localStorage.setItem('pw_session_token', data.sessionToken)
      }
      setReports(data.reports || [])
      if (data.remaining !== undefined) setRemaining(data.remaining)
      setStep('profile')
    } catch {
      setError('Verification failed.')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatBudget = (budget: number) => {
    return `AED ${budget.toLocaleString()}`
  }

  if (step === 'profile') {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">My Account</h2>
              <p className="text-sm text-gray-500 mt-1">{email}</p>
            </div>
            <Link
              href="/find-home"
              className="bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              New Report
            </Link>
          </div>

          {remaining !== null && (
            <div className="bg-warm-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-primary-600">{remaining}</span> free {remaining === 1 ? 'report' : 'reports'} remaining today
              </p>
            </div>
          )}

          <h3 className="text-lg font-semibold text-gray-900 mb-4">My Reports ({reports.length})</h3>

          {reports.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-warm-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500 mb-2">No reports yet</p>
              <p className="text-sm text-gray-400 mb-4">Generate your first AI property report</p>
              <Link
                href="/find-home"
                className="inline-block bg-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Find Your Dream Home
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {reports.map((report) => (
                <Link key={report.id} href={`/report/${report.id}`} className="block border border-warm-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{report.reportTitle}</h4>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-2">{report.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {report.areas.slice(0, 4).map((area, i) => (
                          <span key={i} className="inline-block bg-primary-50 text-primary-700 text-xs px-2 py-0.5 rounded-full">
                            {area}
                          </span>
                        ))}
                        {report.areas.length > 4 && (
                          <span className="text-xs text-gray-400">+{report.areas.length - 4} more</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium text-primary-600">{formatBudget(report.budget)}</p>
                      <p className="text-xs text-gray-400 mt-1">{formatDate(report.createdAt)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
          {step === 'verify' ? 'Enter Code' : 'My Account'}
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          {step === 'verify'
            ? 'Enter the verification code sent to your email.'
            : 'Sign in with your email to view your property reports.'}
        </p>
      </div>

      <div className="space-y-4">
        {step === 'login' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                placeholder="your@email.com"
              />
            </div>
            <button
              onClick={handleSendCode}
              disabled={loading}
              className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-colors ${
                loading ? 'bg-gray-100 text-gray-400' : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              {loading ? 'Sending...' : 'Send Verification Code'}
            </button>
          </>
        )}

        {step === 'verify' && (
          <>
            <p className="text-sm text-gray-500 text-center">Code sent to <strong>{email}</strong></p>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-3xl tracking-[0.3em] font-mono"
                placeholder="000000"
                maxLength={6}
              />
            </div>
            <button
              onClick={handleVerify}
              disabled={code.length !== 6 || loading}
              className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-colors ${
                code.length !== 6 || loading ? 'bg-gray-100 text-gray-400' : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              {loading ? 'Verifying...' : 'View My Reports'}
            </button>
          </>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}
