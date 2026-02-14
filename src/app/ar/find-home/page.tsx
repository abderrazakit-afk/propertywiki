'use client'

import { useState } from 'react'
import Link from 'next/link'

type Step = 'email' | 'preferences' | 'loading' | 'results' | 'limit-reached'

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

export default function FindHomePageAr() {
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
      setRemainingSearches(data.remaining)
      setStep('preferences')
    } catch {
      setError('فشل التحقق. يرجى المحاولة مرة أخرى.')
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
    if (!isNaN(num) && num >= 50000) setBudget(num)
  }

  const handleGenerateReport = async () => {
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

    const messages = [
      'جاري تحليل تفضيلاتك...',
      'جاري البحث في أكثر من 500,000 معاملة عقارية...',
      'جاري إيجاد أفضل المناطق لميزانيتك...',
      'جاري مقارنة عوائد الإيجار...',
      'جاري إعداد تقريرك المخصص...',
    ]

    let msgIndex = 0
    setLoadingMessage(messages[0])
    const interval = setInterval(() => {
      msgIndex = Math.min(msgIndex + 1, messages.length - 1)
      setLoadingMessage(messages[msgIndex])
    }, 3000)

    try {
      const response = await fetch('/api/find-home', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, budget, email }),
      })

      clearInterval(interval)

      if (!response.ok) {
        const data = await response.json()
        if (response.status === 429) {
          setStep('limit-reached')
          return
        }
        throw new Error(data.error || 'فشل في إنشاء التقرير')
      }

      const data = await response.json()
      setReport(data)
      setStep('results')
    } catch (err) {
      clearInterval(interval)
      setError(err instanceof Error ? err.message : 'حدث خطأ ما')
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

  const formatNumber = (num: number) => num.toLocaleString()

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8 text-center">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">ابحث عن منزل</span>
        </nav>

        {step === 'email' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">ابحث عن منزل أحلامك</h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                احصل على تقرير عقاري مخصص مدعوم بتحليل الذكاء الاصطناعي لأكثر من 500,000 معاملة حقيقية في دبي.
              </p>
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
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
                      codeSent ? 'bg-green-100 text-green-700 cursor-default' :
                      loading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
                      'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    {codeSent ? 'تم الإرسال!' : loading ? 'جاري الإرسال...' : 'إرسال الرمز'}
                  </button>
                </div>
              </div>

              {codeSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">رمز التحقق</label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-3xl tracking-[0.3em] font-mono"
                    placeholder="000000"
                    maxLength={6}
                    dir="ltr"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">أدخل الرمز المكون من 6 أرقام المرسل إلى بريدك</p>
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
                    verificationCode.length !== 6 || loading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-primary-600 text-white hover:bg-primary-700'
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

        {step === 'preferences' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">تم التحقق من البريد</h2>
              <p className="text-gray-600">
                أخبرنا الآن عن منزل أحلامك وميزانيتك.
                {remainingSearches !== null && (
                  <span className="block text-primary-600 font-medium mt-1">
                    {remainingSearches} {remainingSearches === 1 ? 'تقرير مجاني متبقي' : 'تقارير مجانية متبقية'} اليوم
                  </span>
                )}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">الميزانية (درهم إماراتي)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {BUDGET_PRESETS.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => handleBudgetPreset(index, preset.value)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                        selectedPreset === index ? 'bg-primary-600 text-white shadow-md' : 'bg-warm-50 text-gray-700 hover:bg-warm-100 border border-warm-200'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">درهم</span>
                  <input
                    type="text"
                    value={customBudget || (selectedPreset !== null ? formatNumber(budget) : '')}
                    onChange={(e) => handleCustomBudget(e.target.value)}
                    className="w-full pr-14 pl-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                    placeholder="أو أدخل ميزانية مخصصة..."
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">صف منزل أحلامك</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-base"
                  placeholder="مثال: أبحث عن شقة بغرفتي نوم بالقرب من الشاطئ. أعمل في مركز دبي المالي وأحتاج تنقل قصير. أحب الأنشطة الخارجية والمطاعم القريبة. بناء حديث مع مسبح وصالة رياضية. منطقة مناسبة للعائلات مع مدارس جيدة..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  تضمين: تفضيلات الموقع، نوع العقار، غرف النوم، احتياجات نمط الحياة، منطقة العمل، حجم العائلة
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
                إنشاء تقريري العقاري
              </button>
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
              <p className="text-lg text-gray-600 mb-2">لقد استخدمت جميع التقارير المجانية الثلاثة لهذا اليوم.</p>
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

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">دليل دبي مارينا</p>
            </Link>
            <Link href="/ar/guides/highest-rental-yield-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أعلى مناطق عائد الإيجار</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">ما هو التملك الحر؟</p>
            </Link>
            <Link href="/ar/guides/best-areas-families-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل مناطق للعائلات</p>
            </Link>
            <Link href="/ar/investing" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">رؤى استثمارية</p>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
