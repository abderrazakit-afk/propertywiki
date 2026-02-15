'use client'

import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ReportCharts = dynamic(() => import('@/components/charts/ReportCharts'), { ssr: false })

type Step = 'preferences' | 'email' | 'verify' | 'loading' | 'results' | 'limit-reached'

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
  { label: 'أقل من 500 ألف', value: 400000 },
  { label: '500 ألف - 1 مليون', value: 750000 },
  { label: '1 - 2 مليون', value: 1500000 },
  { label: '2 - 3 مليون', value: 2500000 },
  { label: '3 - 5 مليون', value: 4000000 },
  { label: '5 - 10 مليون', value: 7500000 },
  { label: '+10 مليون', value: 12000000 },
]

export default function FindHomeFormAr() {
  const [step, setStep] = useState<Step>('preferences')
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

  const handleGenerateReport = useCallback(async () => {
    if (description.trim().length < 20) {
      setError('يرجى وصف منزل أحلامك بمزيد من التفصيل (20 حرفًا على الأقل).')
      return
    }
    if (!budget || budget < 50000) {
      setError('يرجى تحديد أو إدخال ميزانية صالحة.')
      return
    }

    setError('')
    setStep('loading')

    setLoadingMessage('جاري تحليل تفضيلاتك...')

    try {
      const currentToken = sessionToken || localStorage.getItem('pw_session_token')
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 300000)
      const response = await fetch('/api/find-home', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, budget, sessionToken: currentToken }),
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
          setError('انتهت صلاحية الجلسة. يرجى التحقق من بريدك الإلكتروني مرة أخرى.')
          return
        }
        throw new Error(data.error || 'فشل في إنشاء التقرير')
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response stream')

      const decoder = new TextDecoder()
      let buffer = ''

      const progressMap: Record<string, string> = {
        'Understanding your requirements with AI...': 'جاري فهم متطلباتك بالذكاء الاصطناعي...',
        'Analyzing your preferences...': 'جاري تحليل تفضيلاتك...',
        'Connected to database...': 'تم الاتصال بقاعدة البيانات...',
        'Querying 500,000+ property transactions...': 'جاري البحث في أكثر من 500,000 معاملة عقارية...',
        'Comparing rental yields and price trends...': 'جاري مقارنة عوائد الإيجار واتجاهات الأسعار...',
        'Generating your personalized report...': 'جاري إعداد تقريرك المخصص...',
      }

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
              let arMsg = progressMap[event.message] || event.message
              if (event.message.includes('Identified') && event.message.includes('target areas')) {
                const num = event.message.match(/\d+/)?.[0] || ''
                arMsg = `تم تحديد ${num} مناطق مستهدفة تتوافق مع احتياجاتك...`
              } else if (event.message.includes('Found') && event.message.includes('matching areas')) {
                const num = event.message.match(/\d+/)?.[0] || ''
                arMsg = `تم العثور على ${num} منطقة مطابقة، جاري تحليل الإيجارات...`
              }
              setLoadingMessage(arMsg)
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
      setError(err instanceof Error ? err.message : 'حدث خطأ ما')
      setStep('preferences')
    }
  }, [description, budget, sessionToken])

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
      setError('يرجى إدخال بريد إلكتروني صحيح.')
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
        setError(data.error || 'فشل في إرسال الرمز.')
        return
      }

      setCodeSent(true)
    } catch {
      setError('فشل في إرسال رمز التحقق. يرجى المحاولة مرة أخرى.')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyCode = async () => {
    if (verificationCode.length !== 6) {
      setError('يرجى إدخال الرمز المكون من 6 أرقام.')
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
        setError(data.error || 'رمز التحقق غير صالح.')
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
      setLoading(false)
      handleGenerateReport()
      return
    } catch {
      setError('فشل التحقق. يرجى المحاولة مرة أخرى.')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyAndGenerate = async () => {
    await handleVerifyCode()
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

  const handleContinueFromPreferences = () => {
    if (description.trim().length < 20) {
      setError('يرجى وصف منزل أحلامك بمزيد من التفصيل (20 حرفًا على الأقل).')
      return
    }
    if (!budget || budget < 50000) {
      setError('يرجى تحديد أو إدخال ميزانية صالحة.')
      return
    }
    setError('')

    if (sessionToken) {
      handleGenerateReport()
    } else {
      setStep('email')
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
    <>
      {step === 'preferences' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {remainingSearches !== null && (
            <p className="text-primary-600 font-medium text-sm text-center mb-4">
              {remainingSearches} {remainingSearches === 1 ? 'تقرير مجاني متبقي' : 'تقارير مجانية متبقية'} اليوم
            </p>
          )}

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                الميزانية (درهم إماراتي)
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-1.5 mb-2">
                {BUDGET_PRESETS.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => handleBudgetPreset(index, preset.value)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
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
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">درهم</span>
                <input
                  type="text"
                  value={customBudget || (selectedPreset !== null ? formatNumber(budget) : '')}
                  onChange={(e) => handleCustomBudget(e.target.value)}
                  className="w-full pr-14 pl-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  placeholder="أو أدخل ميزانية مخصصة..."
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                صف منزل أحلامك
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-sm"
                placeholder="مثال: شقة بغرفتي نوم بالقرب من الشاطئ، قريبة من مركز دبي المالي، بناء حديث مع مسبح وصالة رياضية، منطقة مناسبة للعائلات..."
              />
              <p className="text-xs text-gray-400 mt-1">
                تضمين: الموقع، نوع العقار، غرف النوم، نمط الحياة، المرافق
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button
              onClick={handleContinueFromPreferences}
              className="w-full bg-primary-600 text-white py-3.5 px-6 rounded-xl font-medium text-base hover:bg-primary-700 transition-colors shadow-sm"
            >
              احصل على تقريرك المجاني
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="text-xs text-gray-400">3 تقارير مجانية يوميًا</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      )}

      {step === 'email' && (
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">اقتربت!</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              أدخل بريدك الإلكتروني للحصول على تقريرك المخصص.
            </p>
          </div>

          <div className="space-y-6 max-w-md mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                  placeholder="your@email.com"
                  dir="ltr"
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
                  {codeSent ? 'تم الإرسال!' : loading ? 'جاري الإرسال...' : 'إرسال الرمز'}
                </button>
              </div>
            </div>

            {codeSent && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رمز التحقق
                </label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-3xl tracking-[0.3em] font-mono"
                  placeholder="000000"
                  maxLength={6}
                  dir="ltr"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  أدخل الرمز المكون من 6 أرقام المرسل إلى بريدك
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
                onClick={handleVerifyAndGenerate}
                disabled={verificationCode.length !== 6 || loading}
                className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-colors ${
                  verificationCode.length !== 6 || loading
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {loading ? 'جاري التحقق...' : 'تحقق ومتابعة'}
              </button>
            )}

            <div className="flex items-center gap-3 pt-4">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="text-sm text-gray-400">3 تقارير مجانية يوميًا</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      )}


      {step === 'loading' && (
        <div className="bg-white rounded-2xl shadow-lg p-12 md:p-16 text-center">
          <div className="w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-8"></div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">جاري إنشاء تقريرك...</h2>
          <p className="text-lg text-primary-600 font-medium mb-2">{loadingMessage}</p>
          <p className="text-gray-500">يستغرق هذا عادة 15-30 ثانية</p>
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
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">تم الوصول للحد اليومي</h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-2">
              لقد استخدمت جميع التقارير المجانية الثلاثة لهذا اليوم.
            </p>
            <p className="text-gray-500">عد غدًا للحصول على 3 تقارير مجانية إضافية.</p>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href="/ar/guides" className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors text-center">
              استكشف الأدلة
            </Link>
            <Link href="/ar/locations/dubai" className="flex-1 bg-primary-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors text-center">
              تصفح المواقع
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
              <p className="text-sm text-gray-500">بناءً على تحليل معاملات عقارية حقيقية في دبي</p>
            </div>

            <div className="bg-warm-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">الملخص التنفيذي</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{report.executiveSummary}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary-700">{report.marketOverview.totalTransactionsAnalyzed.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">معاملة تم تحليلها</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <p className="text-lg font-bold text-primary-700">{report.marketOverview.averagePriceInRange}</p>
                <p className="text-xs text-gray-500 mt-1">متوسط السعر</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-accent-700">{report.marketOverview.averageRentalYield}</p>
                <p className="text-xs text-gray-500 mt-1">عائد الإيجار</p>
              </div>
              <div className="bg-warm-100 rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-gray-700">{report.marketOverview.marketInsight}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">المناطق الموصى بها</h2>
            <div className="space-y-6">
              {report.recommendedAreas.map((area, index) => (
                <div key={index} className="border border-warm-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                          index === 0 ? 'bg-yellow-100 text-yellow-700' : index === 1 ? 'bg-gray-100 text-gray-700' : 'bg-orange-50 text-orange-700'
                        }`}>
                          #{area.rank}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-gray-900">{area.areaNameAr || area.areaName}</h3>
                      </div>
                      {area.areaName && area.areaNameAr && (
                        <p className="text-sm text-gray-400 mr-10" dir="ltr">{area.areaName}</p>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      area.matchScore === 'Excellent' ? 'bg-green-100 text-green-700' :
                      area.matchScore === 'Very Good' ? 'bg-blue-100 text-blue-700' : 'bg-warm-100 text-warm-700'
                    }`}>
                      {area.matchScore === 'Excellent' ? 'ممتاز' : area.matchScore === 'Very Good' ? 'جيد جدًا' : 'جيد'}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-5 leading-relaxed">{area.whyRecommended}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    <div className="bg-warm-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">نطاق الشراء</p>
                      <p className="font-semibold text-gray-900 text-sm" dir="ltr">{area.priceRange.buyMin} - {area.priceRange.buyMax}</p>
                    </div>
                    <div className="bg-warm-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">متوسط سعر الشراء</p>
                      <p className="font-semibold text-gray-900 text-sm" dir="ltr">{area.priceRange.buyAvg}</p>
                    </div>
                    <div className="bg-warm-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">متوسط الإيجار السنوي</p>
                      <p className="font-semibold text-gray-900 text-sm" dir="ltr">{area.priceRange.rentAvgAnnual}</p>
                    </div>
                    <div className="bg-warm-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">عائد الإيجار</p>
                      <p className="font-semibold text-accent-700 text-sm" dir="ltr">{area.rentalYield}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">السعر/متر مربع</p>
                      <p className="text-sm font-medium text-gray-700" dir="ltr">{area.avgPricePerSqm}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">رسوم الخدمة</p>
                      <p className="text-sm font-medium text-gray-700" dir="ltr">{area.serviceCharge}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">عدد المعاملات</p>
                      <p className="text-sm font-medium text-gray-700">{area.transactionVolume.toLocaleString()}</p>
                    </div>
                  </div>

                  {area.developers.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-1">المطورون</p>
                      <p className="text-sm text-gray-700">{area.developers.join('، ')}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((h, i) => (
                      <span key={i} className="bg-accent-50 text-accent-700 text-xs px-3 py-1.5 rounded-lg font-medium">{h}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {report.chartData && (
            <ReportCharts chartData={report.chartData} lang="ar" />
          )}

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">تفاصيل التكاليف</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-warm-100">
                <span className="text-gray-600">سعر الشراء</span>
                <span className="font-semibold text-gray-900" dir="ltr">{report.costBreakdown.purchasePrice}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-warm-100">
                <span className="text-gray-600">رسوم دائرة الأراضي (4%)</span>
                <span className="font-semibold text-gray-900" dir="ltr">{report.costBreakdown.dldFee}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-warm-100">
                <span className="text-gray-600">عمولة الوكيل (2%)</span>
                <span className="font-semibold text-gray-900" dir="ltr">{report.costBreakdown.agencyFee}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-warm-100">
                <span className="text-gray-600">رسوم الخدمة السنوية</span>
                <span className="font-semibold text-gray-900" dir="ltr">{report.costBreakdown.annualServiceCharge}</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-primary-50 rounded-xl px-4">
                <span className="font-semibold text-gray-900">إجمالي التكلفة التقديرية</span>
                <span className="font-bold text-primary-700 text-lg" dir="ltr">{report.costBreakdown.totalEstimatedCost}</span>
              </div>
              <p className="text-sm text-gray-500 italic">{report.costBreakdown.mortgageNote}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">رؤى استثمارية</h2>
            <div className="space-y-4">
              <div className="bg-accent-50 rounded-xl p-5">
                <h3 className="font-semibold text-accent-800 mb-2">تحليل عائد الإيجار</h3>
                <p className="text-accent-700 text-sm leading-relaxed">{report.investmentInsights.rentalYieldAnalysis}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 mb-2">ارتفاع رأس المال</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{report.investmentInsights.capitalAppreciation}</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-5">
                <h3 className="font-semibold text-primary-800 mb-2">توصيتنا</h3>
                <p className="text-primary-700 text-sm leading-relaxed">{report.investmentInsights.recommendation}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">الخطوات التالية</h2>
            <div className="space-y-3">
              {report.nextSteps.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <p className="text-gray-700 pt-0.5">{s}</p>
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
              <button onClick={handleReset} className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                إنشاء تقرير آخر
              </button>
              <Link href="/ar/guides" className="flex-1 bg-primary-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors text-center">
                استكشف أدلة الشراء
              </Link>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
