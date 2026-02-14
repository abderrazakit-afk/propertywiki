'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

const ReportCharts = dynamic(() => import('@/components/charts/ReportCharts'), { ssr: false })

type Step = 'email' | 'verify' | 'preferences' | 'loading' | 'results' | 'limit-reached'

interface AreaRecommendation {
  rank: number
  areaName: string
  areaNameAr: string
  matchScore: string
  whyRecommended: string
  priceRange: {
    buyMin: string
    buyMax: string
    buyAvg: string
    rentAvgAnnual: string
  }
  propertyTypes: string[]
  bedroomOptions: string[]
  transactionVolume: number
  avgPricePerSqm: string
  serviceCharge: string
  rentalYield: string
  developers: string[]
  highlights: string[]
}

interface ChartData {
  priceTrends: Array<{ period: string; year: number; quarter: number; area: string; avgPrice: number; transactions: number; avgPricePerSqm: number }>
  rentalTrends: Array<{ period: string; year: number; quarter: number; area: string; avgRent: number; transactions: number }>
  areaComparison: Array<{ area: string; avgPrice: number; avgPricePerSqm: number; transactions: number; rentalYield: number; avgSize: number }>
  yieldComparison: Array<{ area: string; rentalYield: number; avgPrice: number; avgRent: number; annualRent: number }>
}

interface Report {
  reportTitle: string
  executiveSummary: string
  marketOverview: {
    totalTransactionsAnalyzed: number
    averagePriceInRange: string
    averageRentalYield: string
    marketInsight: string
  }
  recommendedAreas: AreaRecommendation[]
  costBreakdown: {
    purchasePrice: string
    dldFee: string
    agencyFee: string
    mortgageNote: string
    annualServiceCharge: string
    totalEstimatedCost: string
  }
  investmentInsights: {
    rentalYieldAnalysis: string
    capitalAppreciation: string
    recommendation: string
  }
  nextSteps: string[]
  disclaimer: string
  chartData?: ChartData
}

const BUDGET_PRESETS = [
  { label: 'Under 500K', value: 400000 },
  { label: '500K - 1M', value: 750000 },
  { label: '1M - 2M', value: 1500000 },
  { label: '2M - 3M', value: 2500000 },
  { label: '3M - 5M', value: 4000000 },
  { label: '5M - 10M', value: 7500000 },
  { label: '10M+', value: 12000000 },
]

export default function FindHomePage() {
  const [step, setStep] = useState<Step>('email')
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [budget, setBudget] = useState<number>(1500000)
  const [customBudget, setCustomBudget] = useState('')
  const [description, setDescription] = useState('')
  const [report, setReport] = useState<Report | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [codeSent, setCodeSent] = useState(false)
  const [remainingSearches, setRemainingSearches] = useState<number | null>(null)
  const [loadingMessage, setLoadingMessage] = useState('')
  const [selectedPreset, setSelectedPreset] = useState<number | null>(2)
  const [sessionToken, setSessionToken] = useState<string | null>(null)

  const breadcrumbs = [{ name: 'Find Home', href: '/find-home' }]

  useEffect(() => {
    const stored = localStorage.getItem('pw_session_token')
    if (stored) {
      fetch('/api/check-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionToken: stored }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.valid && data.canUse) {
            setSessionToken(stored)
            setEmail(data.email)
            setRemainingSearches(data.remaining)
            setStep('preferences')
          } else if (data.valid && !data.canUse) {
            setStep('limit-reached')
          } else {
            localStorage.removeItem('pw_session_token')
          }
        })
        .catch(() => {
          localStorage.removeItem('pw_session_token')
        })
    }
  }, [])

  const handleSendCode = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/send-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to send code.')
        return
      }

      setCodeSent(true)
    } catch {
      setError('Failed to send verification code. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyCode = async () => {
    if (verificationCode.length !== 6) {
      setError('Please enter the 6-digit code from your email.')
      return
    }
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: verificationCode }),
      })
      const data = await response.json()

      if (!response.ok || !data.verified) {
        setError(data.error || 'Invalid verification code.')
        return
      }

      if (!data.canUse) {
        setStep('limit-reached')
        return
      }

      if (data.sessionToken) {
        localStorage.setItem('pw_session_token', data.sessionToken)
        setSessionToken(data.sessionToken)
      }

      setRemainingSearches(data.remaining)
      setStep('preferences')
    } catch {
      setError('Verification failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleBudgetPreset = (index: number, value: number) => {
    setSelectedPreset(index)
    setBudget(value)
    setCustomBudget('')
  }

  const handleCustomBudget = (val: string) => {
    setCustomBudget(val)
    setSelectedPreset(null)
    const num = parseInt(val.replace(/,/g, ''))
    if (!isNaN(num) && num >= 50000) {
      setBudget(num)
    }
  }

  const handleGenerateReport = async () => {
    if (description.trim().length < 20) {
      setError('Please describe your dream home in more detail (at least 20 characters).')
      return
    }
    if (!budget || budget < 50000) {
      setError('Please select or enter a valid budget.')
      return
    }

    setError('')
    setStep('loading')

    setLoadingMessage('Analyzing your preferences...')

    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 300000)
      const response = await fetch('/api/find-home', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, budget, sessionToken }),
        signal: controller.signal,
      })
      clearTimeout(timeout)

      if (!response.ok) {
        const data = await response.json()
        if (response.status === 429) {
          setStep('limit-reached')
          return
        }
        if (response.status === 401) {
          localStorage.removeItem('pw_session_token')
          setSessionToken(null)
          setCodeSent(false)
          setVerificationCode('')
          setStep('email')
          setError('Session expired. Please verify your email again.')
          return
        }
        throw new Error(data.error || 'Failed to generate report')
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response stream')

      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          const cleaned = line.replace(/^data: /, '').trim()
          if (!cleaned) continue
          try {
            const event = JSON.parse(cleaned)
            if (event.type === 'progress') {
              setLoadingMessage(event.message)
            } else if (event.type === 'result') {
              setReport(event.data)
              setStep('results')
            } else if (event.type === 'error') {
              throw new Error(event.error)
            }
          } catch (e) {
            if (e instanceof SyntaxError) continue
            throw e
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setStep('preferences')
    }
  }

  const handleReset = () => {
    setStep('preferences')
    setDescription('')
    setBudget(1500000)
    setCustomBudget('')
    setSelectedPreset(2)
    setReport(null)
    setError('')
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        {step === 'email' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">Find Your Dream Home</h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Get a personalized property report powered by AI analysis of 500,000+ real transactions in Dubai.
              </p>
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                    placeholder="your@email.com"
                    disabled={codeSent}
                  />
                  <button
                    onClick={handleSendCode}
                    disabled={codeSent || loading}
                    className={`px-6 py-4 rounded-xl font-medium transition-colors whitespace-nowrap ${
                      codeSent
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : loading
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    {codeSent ? 'Sent!' : loading ? 'Sending...' : 'Send Code'}
                  </button>
                </div>
              </div>

              {codeSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-3xl tracking-[0.3em] font-mono"
                    placeholder="000000"
                    maxLength={6}
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Enter the 6-digit code sent to your email
                  </p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm text-center">{error}</p>
                </div>
              )}

              {codeSent && (
                <button
                  onClick={handleVerifyCode}
                  disabled={verificationCode.length !== 6 || loading}
                  className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-colors ${
                    verificationCode.length !== 6 || loading
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {loading ? 'Verifying...' : 'Verify & Continue'}
                </button>
              )}

              <div className="flex items-center gap-3 pt-4">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="text-sm text-gray-400">3 free reports per day</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
            </div>
          </div>
        )}

        {step === 'verify' && null}

        {step === 'preferences' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Email Verified</h2>
              <p className="text-gray-600">
                Now tell us about your dream home and budget.
                {remainingSearches !== null && (
                  <span className="block text-primary-600 font-medium mt-1">
                    {remainingSearches} free {remainingSearches === 1 ? 'report' : 'reports'} remaining today
                  </span>
                )}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Budget (AED)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {BUDGET_PRESETS.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => handleBudgetPreset(index, preset.value)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                        selectedPreset === index
                          ? 'bg-primary-600 text-white shadow-md'
                          : 'bg-warm-50 text-gray-700 hover:bg-warm-100 border border-warm-200'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">AED</span>
                  <input
                    type="text"
                    value={customBudget || (selectedPreset !== null ? formatNumber(budget) : '')}
                    onChange={(e) => handleCustomBudget(e.target.value)}
                    className="w-full pl-14 pr-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                    placeholder="Or enter custom budget..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Describe Your Dream Home
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-base"
                  placeholder="Example: I'm looking for a 2-bedroom apartment near the beach. I work in DIFC and need a short commute. I love outdoor activities, gyms, and restaurants nearby. Looking for a modern building with a pool and gym. Family-friendly area with good schools would be a plus..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  Include: location preferences, property type, bedrooms, lifestyle needs, work area, family size, must-have amenities
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <button
                onClick={handleGenerateReport}
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-primary-700 transition-colors shadow-sm"
              >
                Generate My Property Report
              </button>
            </div>
          </div>
        )}

        {step === 'loading' && (
          <div className="bg-white rounded-2xl shadow-lg p-12 md:p-16 text-center">
            <div className="w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">Generating Your Report...</h2>
            <p className="text-lg text-primary-600 font-medium mb-2">{loadingMessage}</p>
            <p className="text-gray-500">This typically takes 15-30 seconds</p>
          </div>
        )}

        {step === 'limit-reached' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">Daily Limit Reached</h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto mb-2">
                You have used all 3 free property reports for today.
              </p>
              <p className="text-gray-500">Come back tomorrow for 3 more free reports.</p>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="/guides" className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors text-center">
                Explore Guides
              </Link>
              <Link href="/locations/dubai" className="flex-1 bg-primary-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors text-center">
                Browse Locations
              </Link>
            </div>
          </div>
        )}

        {step === 'results' && report && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">{report.reportTitle}</h1>
                <p className="text-sm text-gray-500">Based on analysis of real Dubai property transactions</p>
              </div>

              <div className="bg-warm-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Executive Summary</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{report.executiveSummary}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-primary-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-primary-700">{report.marketOverview.totalTransactionsAnalyzed.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">Transactions Analyzed</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-4 text-center">
                  <p className="text-lg font-bold text-primary-700">{report.marketOverview.averagePriceInRange}</p>
                  <p className="text-xs text-gray-500 mt-1">Avg Price in Range</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-accent-700">{report.marketOverview.averageRentalYield}</p>
                  <p className="text-xs text-gray-500 mt-1">Avg Rental Yield</p>
                </div>
                <div className="bg-warm-100 rounded-xl p-4 text-center">
                  <p className="text-sm font-medium text-gray-700">{report.marketOverview.marketInsight}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Recommended Areas</h2>
              <div className="space-y-6">
                {report.recommendedAreas.map((area, index) => (
                  <div key={index} className="border border-warm-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                            index === 0 ? 'bg-yellow-100 text-yellow-700' :
                            index === 1 ? 'bg-gray-100 text-gray-700' :
                            'bg-orange-50 text-orange-700'
                          }`}>
                            #{area.rank}
                          </span>
                          <h3 className="text-xl font-serif font-bold text-gray-900">{area.areaName}</h3>
                        </div>
                        {area.areaNameAr && (
                          <p className="text-sm text-gray-400 mr-10" dir="rtl">{area.areaNameAr}</p>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        area.matchScore === 'Excellent' ? 'bg-green-100 text-green-700' :
                        area.matchScore === 'Very Good' ? 'bg-blue-100 text-blue-700' :
                        'bg-warm-100 text-warm-700'
                      }`}>
                        {area.matchScore}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-5 leading-relaxed">{area.whyRecommended}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-warm-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Buy Range</p>
                        <p className="font-semibold text-gray-900 text-sm">{area.priceRange.buyMin} - {area.priceRange.buyMax}</p>
                      </div>
                      <div className="bg-warm-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Avg Buy Price</p>
                        <p className="font-semibold text-gray-900 text-sm">{area.priceRange.buyAvg}</p>
                      </div>
                      <div className="bg-warm-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Avg Annual Rent</p>
                        <p className="font-semibold text-gray-900 text-sm">{area.priceRange.rentAvgAnnual}</p>
                      </div>
                      <div className="bg-warm-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Rental Yield</p>
                        <p className="font-semibold text-accent-700 text-sm">{area.rentalYield}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Price/sqm</p>
                        <p className="text-sm font-medium text-gray-700">{area.avgPricePerSqm}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Service Charge</p>
                        <p className="text-sm font-medium text-gray-700">{area.serviceCharge}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Transactions</p>
                        <p className="text-sm font-medium text-gray-700">{area.transactionVolume.toLocaleString()}</p>
                      </div>
                    </div>

                    {area.developers.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Developers</p>
                        <p className="text-sm text-gray-700">{area.developers.join(', ')}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {area.highlights.map((h, i) => (
                        <span key={i} className="bg-accent-50 text-accent-700 text-xs px-3 py-1.5 rounded-lg font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {report.chartData && (
              <ReportCharts chartData={report.chartData} lang="en" />
            )}

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Cost Breakdown</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-warm-100">
                  <span className="text-gray-600">Purchase Price</span>
                  <span className="font-semibold text-gray-900">{report.costBreakdown.purchasePrice}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-warm-100">
                  <span className="text-gray-600">DLD Registration Fee (4%)</span>
                  <span className="font-semibold text-gray-900">{report.costBreakdown.dldFee}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-warm-100">
                  <span className="text-gray-600">Agency Fee (2%)</span>
                  <span className="font-semibold text-gray-900">{report.costBreakdown.agencyFee}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-warm-100">
                  <span className="text-gray-600">Annual Service Charge</span>
                  <span className="font-semibold text-gray-900">{report.costBreakdown.annualServiceCharge}</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-primary-50 rounded-xl px-4">
                  <span className="font-semibold text-gray-900">Total Estimated Cost</span>
                  <span className="font-bold text-primary-700 text-lg">{report.costBreakdown.totalEstimatedCost}</span>
                </div>
                <p className="text-sm text-gray-500 italic">{report.costBreakdown.mortgageNote}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Investment Insights</h2>
              <div className="space-y-4">
                <div className="bg-accent-50 rounded-xl p-5">
                  <h3 className="font-semibold text-accent-800 mb-2">Rental Yield Analysis</h3>
                  <p className="text-accent-700 text-sm leading-relaxed">{report.investmentInsights.rentalYieldAnalysis}</p>
                </div>
                <div className="bg-warm-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">Capital Appreciation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{report.investmentInsights.capitalAppreciation}</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-5">
                  <h3 className="font-semibold text-primary-800 mb-2">Our Recommendation</h3>
                  <p className="text-primary-700 text-sm leading-relaxed">{report.investmentInsights.recommendation}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Next Steps</h2>
              <div className="space-y-3">
                {report.nextSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {report.disclaimer && (
              <div className="bg-warm-50 rounded-xl p-5 border border-warm-200">
                <p className="text-xs text-gray-500 italic">{report.disclaimer}</p>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Generate Another Report
                </button>
                <Link
                  href="/guides"
                  className="flex-1 bg-primary-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors text-center"
                >
                  Explore Buying Guides
                </Link>
              </div>
            </div>
          </div>
        )}

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">How to Buy Property in Dubai</p>
            </Link>
            <Link href="/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Marina Guide</p>
            </Link>
            <Link href="/guides/highest-rental-yield-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Highest Rental Yield Areas</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Freehold Property?</p>
            </Link>
            <Link href="/guides/best-areas-families-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Best Areas for Families</p>
            </Link>
            <Link href="/investing" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Investing</span>
              <p className="font-medium text-gray-900 mt-1">Investment Insights</p>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
