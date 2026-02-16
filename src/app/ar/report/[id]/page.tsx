'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ReportCharts = dynamic(() => import('@/components/charts/ReportCharts'), { ssr: false })
const AreaMap = dynamic(() => import('@/components/map/AreaMap'), { ssr: false })

interface AreaRecommendation {
  rank: number
  areaName: string
  areaNameAr: string
  matchScore: string
  whyRecommended: string
  priceRange: { buyMin: string; buyMax: string; buyAvg: string; rentAvgAnnual: string }
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
  marketOverview: { totalTransactionsAnalyzed: number; averagePriceInRange: string; averageRentalYield: string; marketInsight: string }
  recommendedAreas: AreaRecommendation[]
  costBreakdown: { purchasePrice: string; dldFee: string; agencyFee: string; mortgageNote: string; annualServiceCharge: string; totalEstimatedCost: string }
  investmentInsights: { rentalYieldAnalysis: string; capitalAppreciation: string; recommendation: string }
  nextSteps: string[]
  disclaimer: string
  chartData?: ChartData
  recentTransactions?: Record<string, Array<{ building: string; propertyType: string; bedrooms: string; size: string; price: string; date: string }>>
}

export default function ReportViewerPageAr() {
  const params = useParams()
  const [report, setReport] = useState<Report | null>(null)
  const [budget, setBudget] = useState<number>(0)
  const [description, setDescription] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchReport = async () => {
      const token = localStorage.getItem('pw_session_token')
      if (!token) {
        setError('يرجى تسجيل الدخول من صفحة حسابك لعرض التقارير.')
        setLoading(false)
        return
      }
      try {
        const res = await fetch(`/api/report/${params.id}`, {
          headers: { 'x-session-token': token },
        })
        const data = await res.json()
        if (!res.ok) {
          setError(data.error || 'فشل في تحميل التقرير.')
          return
        }
        setReport(data.report as Report)
        setBudget(data.budget)
        setDescription(data.description)
        setCreatedAt(data.createdAt)
      } catch {
        setError('فشل في تحميل التقرير.')
      } finally {
        setLoading(false)
      }
    }
    fetchReport()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">جاري تحميل التقرير...</p>
        </div>
      </div>
    )
  }

  if (error || !report) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white flex items-center justify-center" dir="rtl">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-4">{error || 'التقرير غير موجود.'}</p>
          <Link href="/ar/account" className="text-primary-600 hover:text-primary-700 font-medium">العودة إلى حسابي</Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('ar-AE', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/ar/account" className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة إلى تقاريري
          </Link>
          <div className="text-sm text-gray-400">{createdAt && formatDate(createdAt)}</div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">{report.reportTitle}</h1>
              <p className="text-sm text-gray-500">الميزانية: {budget.toLocaleString()} درهم | {description}</p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">الملخص التنفيذي</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{report.executiveSummary}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary-700">{report.marketOverview.totalTransactionsAnalyzed?.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">المعاملات المحللة</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <p className="text-lg font-bold text-primary-700">{report.marketOverview.averagePriceInRange}</p>
                <p className="text-xs text-gray-500 mt-1">متوسط السعر</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-accent-700">{report.marketOverview.averageRentalYield}</p>
                <p className="text-xs text-gray-500 mt-1">متوسط العائد الإيجاري</p>
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
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${index === 0 ? 'bg-yellow-100 text-yellow-700' : index === 1 ? 'bg-gray-100 text-gray-700' : 'bg-orange-50 text-orange-700'}`}>#{area.rank}</span>
                        <h3 className="text-xl font-serif font-bold text-gray-900">{area.areaNameAr || area.areaName}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mr-10">{area.areaName}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${area.matchScore === 'Excellent' ? 'bg-green-100 text-green-700' : area.matchScore === 'Very Good' ? 'bg-blue-100 text-blue-700' : 'bg-warm-100 text-warm-700'}`}>
                      {area.matchScore === 'Excellent' ? 'ممتاز' : area.matchScore === 'Very Good' ? 'جيد جداً' : 'جيد'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-5 leading-relaxed">{area.whyRecommended}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    <div className="bg-warm-50 rounded-lg p-3"><p className="text-xs text-gray-500 mb-1">نطاق الشراء</p><p className="font-semibold text-gray-900 text-sm">{area.priceRange.buyMin} - {area.priceRange.buyMax}</p></div>
                    <div className="bg-warm-50 rounded-lg p-3"><p className="text-xs text-gray-500 mb-1">متوسط سعر الشراء</p><p className="font-semibold text-gray-900 text-sm">{area.priceRange.buyAvg}</p></div>
                    <div className="bg-warm-50 rounded-lg p-3"><p className="text-xs text-gray-500 mb-1">متوسط الإيجار السنوي</p><p className="font-semibold text-gray-900 text-sm">{area.priceRange.rentAvgAnnual}</p></div>
                    <div className="bg-warm-50 rounded-lg p-3"><p className="text-xs text-gray-500 mb-1">العائد الإيجاري</p><p className="font-semibold text-accent-700 text-sm">{area.rentalYield}</p></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                    <div><p className="text-xs text-gray-500 mb-1">السعر/متر مربع</p><p className="text-sm font-medium text-gray-700">{area.avgPricePerSqm}</p></div>
                    <div><p className="text-xs text-gray-500 mb-1">رسوم الخدمة</p><p className="text-sm font-medium text-gray-700">{area.serviceCharge}</p></div>
                    <div><p className="text-xs text-gray-500 mb-1">المعاملات</p><p className="text-sm font-medium text-gray-700">{area.transactionVolume?.toLocaleString()}</p></div>
                  </div>
                  {area.developers && area.developers.length > 0 && (
                    <div className="mb-4"><p className="text-xs text-gray-500 mb-1">المطورون</p><p className="text-sm text-gray-700">{area.developers.join('، ')}</p></div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {area.highlights?.map((h, i) => (
                      <span key={i} className="bg-accent-50 text-accent-700 text-xs px-3 py-1.5 rounded-lg font-medium">{h}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">خريطة المناطق</h2>
            <AreaMap areas={report.recommendedAreas.map((area) => ({ areaName: area.areaName, rank: area.rank, matchScore: area.matchScore, avgPrice: area.priceRange.buyAvg, rentalYield: area.rentalYield }))} lang="ar" />
            <p className="text-xs text-gray-400 mt-3 text-center">انقر على العلامات لرؤية تفاصيل المنطقة</p>
          </div>

          {report.recentTransactions && Object.keys(report.recentTransactions).length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">المعاملات الأخيرة</h2>
              <div className="space-y-8">
                {report.recommendedAreas.map((area) => {
                  const txs = report.recentTransactions?.[area.areaName]
                  if (!txs || txs.length === 0) return null
                  return (
                    <div key={area.areaName}>
                      <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${area.rank === 1 ? 'bg-yellow-100 text-yellow-700' : area.rank === 2 ? 'bg-gray-100 text-gray-700' : 'bg-orange-50 text-orange-700'}`}>#{area.rank}</span>
                        {area.areaNameAr || area.areaName}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-warm-200">
                              <th className="text-right py-2 pl-4 text-xs font-semibold text-gray-500">المبنى</th>
                              <th className="text-right py-2 pl-4 text-xs font-semibold text-gray-500">النوع</th>
                              <th className="text-right py-2 pl-4 text-xs font-semibold text-gray-500">الغرف</th>
                              <th className="text-right py-2 pl-4 text-xs font-semibold text-gray-500">المساحة</th>
                              <th className="text-right py-2 pl-4 text-xs font-semibold text-gray-500">السعر</th>
                              <th className="text-right py-2 text-xs font-semibold text-gray-500">التاريخ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {txs.map((tx, i) => (
                              <tr key={i} className="border-b border-warm-100 last:border-0">
                                <td className="py-2.5 pl-4 text-gray-900 font-medium max-w-[200px] truncate">{tx.building}</td>
                                <td className="py-2.5 pl-4 text-gray-600">{tx.propertyType}</td>
                                <td className="py-2.5 pl-4 text-gray-600">{tx.bedrooms}</td>
                                <td className="py-2.5 pl-4 text-gray-600">{tx.size}</td>
                                <td className="py-2.5 pl-4 text-primary-700 font-semibold whitespace-nowrap">{tx.price}</td>
                                <td className="py-2.5 text-gray-500">{tx.date}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {report.chartData && <ReportCharts chartData={report.chartData} lang="ar" />}

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">تفاصيل التكلفة</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-warm-100"><span className="text-gray-600">سعر الشراء</span><span className="font-semibold text-gray-900">{report.costBreakdown.purchasePrice}</span></div>
              <div className="flex justify-between items-center py-3 border-b border-warm-100"><span className="text-gray-600">رسوم دائرة الأراضي (4%)</span><span className="font-semibold text-gray-900">{report.costBreakdown.dldFee}</span></div>
              <div className="flex justify-between items-center py-3 border-b border-warm-100"><span className="text-gray-600">رسوم الوكالة (2%)</span><span className="font-semibold text-gray-900">{report.costBreakdown.agencyFee}</span></div>
              <div className="flex justify-between items-center py-3 border-b border-warm-100"><span className="text-gray-600">رسوم الخدمة السنوية</span><span className="font-semibold text-gray-900">{report.costBreakdown.annualServiceCharge}</span></div>
              <div className="flex justify-between items-center py-3 bg-primary-50 rounded-xl px-4"><span className="font-semibold text-gray-900">التكلفة الإجمالية المقدرة</span><span className="font-bold text-primary-700 text-lg">{report.costBreakdown.totalEstimatedCost}</span></div>
              <p className="text-sm text-gray-500 italic">{report.costBreakdown.mortgageNote}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">رؤى الاستثمار</h2>
            <div className="space-y-4">
              <div className="bg-accent-50 rounded-xl p-5"><h3 className="font-semibold text-accent-800 mb-2">تحليل العائد الإيجاري</h3><p className="text-accent-700 text-sm leading-relaxed">{report.investmentInsights.rentalYieldAnalysis}</p></div>
              <div className="bg-warm-50 rounded-xl p-5"><h3 className="font-semibold text-gray-800 mb-2">ارتفاع قيمة رأس المال</h3><p className="text-gray-600 text-sm leading-relaxed">{report.investmentInsights.capitalAppreciation}</p></div>
              <div className="bg-primary-50 rounded-xl p-5"><h3 className="font-semibold text-primary-800 mb-2">توصيتنا</h3><p className="text-primary-700 text-sm leading-relaxed">{report.investmentInsights.recommendation}</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">الخطوات التالية</h2>
            <div className="space-y-3">
              {report.nextSteps.map((nextStep, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <p className="text-gray-700 pt-0.5">{nextStep}</p>
                </div>
              ))}
            </div>
          </div>

          {report.disclaimer && (
            <div className="bg-warm-50 rounded-xl p-5 border border-warm-200"><p className="text-xs text-gray-500 italic">{report.disclaimer}</p></div>
          )}

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ar/account" className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors text-center">العودة إلى تقاريري</Link>
              <Link href="/ar/find-home" className="flex-1 bg-primary-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors text-center">إنشاء تقرير جديد</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
