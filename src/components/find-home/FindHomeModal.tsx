'use client'

import { useState } from 'react'

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
  recommendations: Recommendation[]
  additionalTips: string
}

interface FindHomeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FindHomeModal({ isOpen, onClose }: FindHomeModalProps) {
  const [step, setStep] = useState<Step>('describe')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpError, setOtpError] = useState('')
  const [results, setResults] = useState<Results | null>(null)
  const [error, setError] = useState('')

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

  const handleClose = () => {
    handleReset()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={handleClose} />
        
        <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8">
            {step === 'describe' && (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Find Your Perfect Home</h2>
                  <p className="text-gray-600 mt-2">
                    Tell us about your lifestyle, and we&apos;ll find the ideal property for you.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe your ideal home and lifestyle
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Example: I'm a remote worker with a young family (2 kids). We love outdoor activities and need good schools nearby. Looking for a quiet neighborhood but with easy access to the city. Budget around 150k AED/year for rent. We have a car but prefer walkable areas for daily errands..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Include: location preferences, family size, work situation, hobbies, budget, community type (urban/suburban/quiet/vibrant)
                    </p>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    onClick={handleDescribeSubmit}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </>
            )}

            {step === 'verify' && (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Verify Your Phone</h2>
                  <p className="text-gray-600 mt-2">
                    Quick verification before we show your personalized results.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+971 50 123 4567"
                        disabled={otpSent}
                      />
                      <button
                        onClick={handleSendOtp}
                        disabled={otpSent}
                        className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                          otpSent
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {otpSent ? 'Sent' : 'Send Code'}
                      </button>
                    </div>
                  </div>

                  {otpSent && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Verification Code
                      </label>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-2xl tracking-widest"
                        placeholder="00000"
                        maxLength={5}
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">
                        Demo mode: Enter <strong>00000</strong> as the code
                      </p>
                    </div>
                  )}

                  {otpError && (
                    <p className="text-red-500 text-sm text-center">{otpError}</p>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep('describe')}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleVerifyOtp}
                      disabled={!otpSent || otp.length < 5}
                      className={`flex-1 py-3 px-6 rounded-xl font-medium transition-colors ${
                        !otpSent || otp.length < 5
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                    >
                      Verify & See Results
                    </button>
                  </div>
                </div>
              </>
            )}

            {step === 'loading' && (
              <div className="text-center py-12">
                <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-6"></div>
                <h2 className="text-xl font-serif font-bold text-gray-900">Finding Your Perfect Home...</h2>
                <p className="text-gray-600 mt-2">
                  Analyzing your preferences and searching for the best matches.
                </p>
              </div>
            )}

            {step === 'results' && results && (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Your Personalized Recommendations</h2>
                </div>

                <div className="bg-primary-50 rounded-xl p-4 mb-6">
                  <p className="text-gray-700">{results.summary}</p>
                </div>

                <div className="space-y-4 mb-6">
                  {results.recommendations.map((rec, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{rec.propertyType}</h3>
                          <p className="text-primary-600 font-medium">{rec.community}</p>
                        </div>
                        <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">
                          Match #{index + 1}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{rec.whyItFits}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Rent/Year</p>
                          <p className="font-semibold text-gray-900">{rec.priceRange.rentPerYear}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Buy Price</p>
                          <p className="font-semibold text-gray-900">{rec.priceRange.buyPrice}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {rec.highlights.map((highlight, i) => (
                          <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {results.additionalTips && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                    <div className="flex gap-2">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-amber-800">{results.additionalTips}</p>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    Search Again
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
