'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

type Step = 'describe' | 'verify' | 'loading' | 'results'

interface Recommendation {
  propertyType: string
  community: string
  whyItFits: string
  priceRange: {
    rentPerYear: string
    buyPrice: string
  }
  highlights: string[]
}

interface Results {
  summary: string
  clarifyingQuestions?: string[]
  recommendations: Recommendation[]
  additionalTips: string
}

export default function FindHomePage() {
  const [step, setStep] = useState<Step>('describe')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpError, setOtpError] = useState('')
  const [results, setResults] = useState<Results | null>(null)
  const [error, setError] = useState('')

  const breadcrumbs = [{ name: 'Find Home', href: '/find-home' }]

  const handleDescribeSubmit = () => {
    if (description.trim().length < 20) {
      setError('Please describe your ideal home in more detail (at least 20 characters).')
      return
    }
    setError('')
    setStep('verify')
  }

  const handleSendOtp = () => {
    if (phone.length < 8) {
      setOtpError('Please enter a valid phone number.')
      return
    }
    setOtpError('')
    setOtpSent(true)
  }

  const handleVerifyOtp = async () => {
    if (otp !== '00000') {
      setOtpError('Invalid code. Use 00000 for demo.')
      return
    }
    setOtpError('')
    setStep('loading')

    try {
      const response = await fetch('/api/find-home', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to get recommendations')
      }

      const data = await response.json()
      setResults(data)
      setStep('results')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setStep('describe')
    }
  }

  const handleReset = () => {
    setStep('describe')
    setDescription('')
    setPhone('')
    setOtp('')
    setOtpSent(false)
    setOtpError('')
    setResults(null)
    setError('')
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        {step === 'describe' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">Find Your Perfect Home</h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Tell us about your lifestyle, and our AI will recommend the ideal properties and communities for you in Dubai.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Describe your ideal home and lifestyle
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={8}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-base"
                  placeholder="Example: I'm a remote worker with a young family (2 kids). We love outdoor activities and need good schools nearby. Looking for a quiet neighborhood but with easy access to the city. Budget around 150k AED/year for rent. We have a car but prefer walkable areas for daily errands. Would love beach access on weekends..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  Include: location preferences, family size, work situation, hobbies, budget, community type (urban/suburban/quiet/vibrant)
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <button
                onClick={handleDescribeSubmit}
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-primary-700 transition-colors shadow-sm"
              >
                Continue to Verification
              </button>
            </div>
          </div>
        )}

        {step === 'verify' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">Verify Your Phone</h2>
              <p className="text-lg text-gray-600">
                Quick verification before we show your personalized results.
              </p>
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Phone Number
                </label>
                <div className="flex gap-3">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                    placeholder="+971 50 123 4567"
                    disabled={otpSent}
                  />
                  <button
                    onClick={handleSendOtp}
                    disabled={otpSent}
                    className={`px-6 py-4 rounded-xl font-medium transition-colors whitespace-nowrap ${
                      otpSent
                        ? 'bg-green-100 text-green-700 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {otpSent ? 'Sent!' : 'Send Code'}
                  </button>
                </div>
              </div>

              {otpSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-3xl tracking-[0.3em] font-mono"
                    placeholder="00000"
                    maxLength={5}
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Demo mode: Enter <strong>00000</strong> as the code
                  </p>
                </div>
              )}

              {otpError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm text-center">{otpError}</p>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setStep('describe')}
                  className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleVerifyOtp}
                  disabled={!otpSent || otp.length < 5}
                  className={`flex-1 py-4 px-6 rounded-xl font-medium transition-colors ${
                    !otpSent || otp.length < 5
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  Get Recommendations
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 'loading' && (
          <div className="bg-white rounded-2xl shadow-lg p-12 md:p-16 text-center">
            <div className="w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">Finding Your Perfect Home...</h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Our AI is analyzing your preferences and searching for the best property matches in Dubai.
            </p>
          </div>
        )}

        {step === 'results' && results && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">Your Personalized Recommendations</h1>
              </div>

              <div className="bg-primary-50 rounded-xl p-5 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">{results.summary}</p>
              </div>

              {results.clarifyingQuestions && results.clarifyingQuestions.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
                  <h3 className="font-semibold text-blue-900 mb-3">A few questions to refine your search:</h3>
                  <ul className="space-y-2">
                    {results.clarifyingQuestions.map((q, i) => (
                      <li key={i} className="text-blue-800 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">?</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {results.recommendations.map((rec, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Recommendation #{index + 1}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-gray-900">{rec.propertyType}</h3>
                      <p className="text-primary-600 font-medium text-lg">{rec.community}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-5 leading-relaxed">{rec.whyItFits}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="bg-warm-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Annual Rent</p>
                      <p className="font-bold text-gray-900 text-lg">{rec.priceRange.rentPerYear}</p>
                    </div>
                    <div className="bg-warm-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Purchase Price</p>
                      <p className="font-bold text-gray-900 text-lg">{rec.priceRange.buyPrice}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {rec.highlights.map((highlight, i) => (
                      <span key={i} className="bg-accent-50 text-accent-700 text-sm px-3 py-1.5 rounded-lg font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {results.additionalTips && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Pro Tip</h3>
                    <p className="text-amber-800">{results.additionalTips}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Search Again
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
      </div>
    </div>
  )
}
