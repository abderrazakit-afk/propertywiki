'use client'

import { useState } from 'react'
import Link from 'next/link'

type Step = 'describe' | 'verify' | 'loading' | 'results' | 'limit-reached'

interface Recommendation {
  community: string
  propertyType: string
  rentRange: string
  buyRange: string
  highlights: string[]
}

interface AIResponse {
  summary: string
  recommendations: Recommendation[]
  proTip: string
}

export default function FindHomePageAr() {
  const [step, setStep] = useState<Step>('describe')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [results, setResults] = useState<AIResponse | null>(null)
  const [error, setError] = useState('')
  const [remainingSearches, setRemainingSearches] = useState<number | null>(null)
  const [checkingUsage, setCheckingUsage] = useState(false)

  const handleDescriptionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (description.trim().length < 50) {
      setError('يرجى تقديم مزيد من التفاصيل (50 حرف على الأقل)')
      return
    }
    setError('')
    setStep('verify')
  }

  const handleSendCode = async () => {
    if (phone.length < 9) return
    
    setCheckingUsage(true)
    try {
      const response = await fetch('/api/check-usage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, action: 'check' }),
      })
      const data = await response.json()

      if (!data.canUse) {
        setStep('limit-reached')
        setCheckingUsage(false)
        return
      }

      setRemainingSearches(data.remaining)
      setCodeSent(true)
    } catch {
      setError('فشل التحقق. يرجى المحاولة مرة أخرى.')
    } finally {
      setCheckingUsage(false)
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (code !== '00000') {
      setError('رمز التحقق غير صحيح. استخدم 00000 للوضع التجريبي.')
      return
    }
    setError('')
    setStep('loading')

    try {
      const usageResponse = await fetch('/api/check-usage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, action: 'increment' }),
      })
      const usageData = await usageResponse.json()

      if (!usageData.canUse) {
        setStep('limit-reached')
        return
      }

      setRemainingSearches(usageData.remaining)

      const response = await fetch('/api/find-home', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        setStep('verify')
        return
      }

      setResults(data)
      setStep('results')
    } catch {
      setError('حدث خطأ أثناء الاتصال. يرجى المحاولة مرة أخرى.')
      setStep('verify')
    }
  }

  const handleReset = () => {
    setStep('describe')
    setDescription('')
    setPhone('')
    setCode('')
    setCodeSent(false)
    setResults(null)
    setError('')
    setRemainingSearches(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8 text-center">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">
            الرئيسية
          </Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">ابحث عن منزل</span>
        </nav>

        {step === 'describe' && (
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                ابحث عن منزلك المثالي
              </h1>
              <p className="text-warm-600 text-lg">
                أخبرنا عن نمط حياتك، وسيوصي الذكاء الاصطناعي بالعقارات والمجتمعات المثالية لك في دبي.
              </p>
            </div>

            <form onSubmit={handleDescriptionSubmit}>
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  صف منزلك المثالي ونمط حياتك
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 border border-warm-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="مثال: أنا موظف عن بُعد مع عائلة صغيرة (طفلان). نحب الأنشطة الخارجية ونحتاج مدارس جيدة قريبة. نبحث عن حي هادئ لكن مع سهولة الوصول للمدينة. الميزانية حوالي 150 ألف درهم سنوياً للإيجار..."
                  dir="rtl"
                />
                <p className="text-xs text-warm-500 mt-2">
                  تضمين: تفضيلات الموقع، حجم العائلة، وضع العمل، الهوايات، الميزانية، نوع المجتمع
                </p>
              </div>

              {error && (
                <p className="text-red-600 text-sm mb-4">{error}</p>
              )}

              <button
                type="submit"
                className="w-full luxury-button justify-center"
              >
                متابعة للتحقق
                <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        )}

        {step === 'verify' && (
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                تحقق من هاتفك
              </h2>
              <p className="text-warm-600">
                تحقق سريع قبل عرض نتائجك المخصصة.
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <div className="flex gap-2">
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-4 py-3 border border-warm-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+971 50 123 4567"
                    dir="ltr"
                  />
                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={phone.length < 9 || codeSent || checkingUsage}
                    className="px-4 py-3 bg-warm-100 text-warm-700 rounded-xl hover:bg-warm-200 disabled:opacity-50 transition-colors whitespace-nowrap"
                  >
                    {codeSent ? 'تم الإرسال!' : checkingUsage ? 'جاري التحقق...' : 'إرسال الرمز'}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                  رمز التحقق
                </label>
                <input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-3 border border-warm-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center tracking-widest"
                  placeholder="00000"
                  maxLength={5}
                  dir="ltr"
                />
                <p className="text-xs text-warm-500 mt-2 text-center">
                  الوضع التجريبي: أدخل 00000 كرمز
                </p>
                {remainingSearches !== null && (
                  <p className="text-sm text-primary-600 mt-2 text-center font-medium">
                    {remainingSearches} {remainingSearches === 1 ? 'بحث مجاني متبقي' : 'عمليات بحث مجانية متبقية'} اليوم
                  </p>
                )}
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep('describe')}
                  className="flex-1 px-6 py-3 border border-warm-200 text-warm-700 rounded-xl hover:bg-warm-50 transition-colors"
                >
                  رجوع
                </button>
                <button
                  type="submit"
                  disabled={code.length !== 5}
                  className="flex-1 luxury-button justify-center disabled:opacity-50"
                >
                  الحصول على التوصيات
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'loading' && (
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
            <div className="animate-spin w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-6" />
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              جاري البحث عن منزلك المثالي...
            </h2>
            <p className="text-warm-600">
              يقوم الذكاء الاصطناعي بتحليل تفضيلاتك والبحث عن أفضل العقارات في دبي.
            </p>
          </div>
        )}

        {step === 'limit-reached' && (
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">تم الوصول للحد اليومي</h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto mb-2">
                لقد استخدمت جميع عمليات البحث المجانية الثلاث لهذا اليوم.
              </p>
              <p className="text-gray-500">
                قم بالترقية إلى بروبرتي ويكي بريميوم للحصول على عمليات بحث غير محدودة وميزات حصرية.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">مزايا الباقة المميزة</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">توصيات عقارية غير محدودة بالذكاء الاصطناعي</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">دعم أولوية من خبراء العقارات لدينا</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">رؤى سوقية حصرية وتنبيهات الأسعار</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">قوائم عقارات مخصصة</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <button
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-primary-700 transition-colors shadow-sm"
              >
                الترقية إلى الباقة المميزة
              </button>
              <p className="text-center text-sm text-gray-500">
                أو عد غداً للحصول على 3 عمليات بحث مجانية إضافية
              </p>
              <div className="flex gap-4 pt-2">
                <Link
                  href="/ar/guides"
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors text-center"
                >
                  استكشف الأدلة
                </Link>
                <Link
                  href="/ar/locations/dubai"
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors text-center"
                >
                  تصفح المواقع
                </Link>
              </div>
            </div>
          </div>
        )}

        {step === 'results' && results && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
                توصياتك المخصصة
              </h2>
              <p className="text-warm-600 text-center mb-8">
                {results.summary}
              </p>
            </div>

            <div className="grid gap-6">
              {results.recommendations.map((rec, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900">{rec.community}</h3>
                      <p className="text-primary-600">{rec.propertyType}</p>
                    </div>
                    <span className="bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
                      #{index + 1}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-warm-50 rounded-xl p-4">
                      <p className="text-xs text-warm-500 mb-1">الإيجار السنوي</p>
                      <p className="font-semibold text-gray-900">{rec.rentRange}</p>
                    </div>
                    <div className="bg-warm-50 rounded-xl p-4">
                      <p className="text-xs text-warm-500 mb-1">سعر الشراء</p>
                      <p className="font-semibold text-gray-900">{rec.buyRange}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {rec.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-accent-50 text-accent-700 px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-accent-800 mb-1">نصيحة مهمة</p>
                  <p className="text-accent-700 text-sm">{results.proTip}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleReset}
                className="flex-1 px-6 py-3 border border-warm-200 text-warm-700 rounded-xl hover:bg-warm-50 transition-colors"
              >
                بحث مرة أخرى
              </button>
              <Link
                href="/ar/guides/how-to-buy-property-in-dubai"
                className="flex-1 luxury-button justify-center"
              >
                استكشف أدلة الشراء
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
