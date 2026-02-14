'use client'

import { useMemo } from 'react'
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ComposedChart,
} from 'recharts'

interface PriceTrendPoint {
  period: string
  year: number
  quarter: number
  area: string
  avgPrice: number
  transactions: number
  avgPricePerSqm: number
}

interface RentalTrendPoint {
  period: string
  year: number
  quarter: number
  area: string
  avgRent: number
  transactions: number
}

interface AreaComparisonPoint {
  area: string
  avgPrice: number
  avgPricePerSqm: number
  transactions: number
  rentalYield: number
  avgSize: number
}

interface YieldComparisonPoint {
  area: string
  rentalYield: number
  avgPrice: number
  avgRent: number
  annualRent: number
}

interface ChartData {
  priceTrends: PriceTrendPoint[]
  rentalTrends: RentalTrendPoint[]
  areaComparison: AreaComparisonPoint[]
  yieldComparison: YieldComparisonPoint[]
}

interface ReportChartsProps {
  chartData: ChartData
  lang?: 'en' | 'ar'
}

const COLORS = ['#9b7260', '#5a7a6f', '#d4a574', '#7ba899', '#c08b6e', '#4a6a5f', '#e8c4a0', '#8dbbaa']

const formatPrice = (value: number) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
  return value.toString()
}

const formatFullPrice = (value: number) => `AED ${value.toLocaleString()}`

const shortenArea = (name: string) => {
  if (name.length <= 15) return name
  return name.split(' ').slice(0, 2).join(' ')
}

export default function ReportCharts({ chartData, lang = 'en' }: ReportChartsProps) {
  const isAr = lang === 'ar'

  const labels = useMemo(() => ({
    priceTrend: isAr ? 'اتجاه الأسعار بمرور الوقت' : 'Price Trend Over Time',
    priceTrendDesc: isAr ? 'متوسط أسعار البيع حسب الربع' : 'Average sale prices by quarter for recommended areas',
    rentalTrend: isAr ? 'اتجاه الإيجارات' : 'Rental Trend',
    rentalTrendDesc: isAr ? 'متوسط الإيجار الشهري بمرور الوقت' : 'Average monthly rent over time',
    areaComparison: isAr ? 'مقارنة المناطق' : 'Area Price Comparison',
    areaComparisonDesc: isAr ? 'مقارنة متوسط الأسعار وحجم المعاملات' : 'Compare average prices and transaction volume',
    yieldComparison: isAr ? 'مقارنة العائد الإيجاري' : 'Rental Yield Comparison',
    yieldComparisonDesc: isAr ? 'مقارنة عوائد الإيجار بين المناطق' : 'Compare rental yields across areas',
    forecast: isAr ? 'توقعات الأسعار' : 'Price Forecast',
    forecastDesc: isAr ? 'الأسعار المتوقعة بناءً على الاتجاهات التاريخية' : 'Projected prices based on historical trends',
    avgPrice: isAr ? 'متوسط السعر' : 'Avg Price',
    transactions: isAr ? 'المعاملات' : 'Transactions',
    avgRent: isAr ? 'متوسط الإيجار' : 'Avg Rent',
    yield: isAr ? 'العائد %' : 'Yield %',
    annualRent: isAr ? 'الإيجار السنوي' : 'Annual Rent',
    projected: isAr ? 'متوقع' : 'Projected',
    historical: isAr ? 'تاريخي' : 'Historical',
  }), [isAr])

  const priceTrendByPeriod = useMemo(() => {
    if (!chartData.priceTrends.length) return []
    const areas = Array.from(new Set(chartData.priceTrends.map(d => d.area)))
    const periods = Array.from(new Set(chartData.priceTrends.map(d => d.period)))
    
    periods.sort((a, b) => {
      const [qA, yA] = a.replace('Q', '').split(' ')
      const [qB, yB] = b.replace('Q', '').split(' ')
      return Number(yA) - Number(yB) || Number(qA) - Number(qB)
    })

    return periods.map(period => {
      const row: Record<string, string | number> = { period }
      areas.forEach(area => {
        const point = chartData.priceTrends.find(d => d.period === period && d.area === area)
        if (point) row[area] = point.avgPrice
      })
      return row
    })
  }, [chartData.priceTrends])

  const rentalTrendByPeriod = useMemo(() => {
    if (!chartData.rentalTrends.length) return []
    const areas = Array.from(new Set(chartData.rentalTrends.map(d => d.area)))
    const periods = Array.from(new Set(chartData.rentalTrends.map(d => d.period)))
    
    periods.sort((a, b) => {
      const [qA, yA] = a.replace('Q', '').split(' ')
      const [qB, yB] = b.replace('Q', '').split(' ')
      return Number(yA) - Number(yB) || Number(qA) - Number(qB)
    })

    return periods.map(period => {
      const row: Record<string, string | number> = { period }
      areas.forEach(area => {
        const point = chartData.rentalTrends.find(d => d.period === period && d.area === area)
        if (point) row[area] = point.avgRent
      })
      return row
    })
  }, [chartData.rentalTrends])

  const forecastData = useMemo(() => {
    if (!chartData.priceTrends.length) return []
    const areas = Array.from(new Set(chartData.priceTrends.map(d => d.area))).slice(0, 3)
    
    const result: Record<string, string | number | null>[] = []
    
    areas.forEach(area => {
      const areaData = chartData.priceTrends
        .filter(d => d.area === area)
        .sort((a, b) => a.year - b.year || a.quarter - b.quarter)
      
      if (areaData.length < 2) return
      
      const recent = areaData.slice(-4)
      const firstPrice = recent[0].avgPrice
      const lastPrice = recent[recent.length - 1].avgPrice
      const growthRate = recent.length > 1 ? (lastPrice - firstPrice) / firstPrice / recent.length : 0.02
      
      const lastPeriod = areaData[areaData.length - 1]
      let currentYear = lastPeriod.year
      let currentQuarter = lastPeriod.quarter
      let currentPrice = lastPeriod.avgPrice
      
      for (let i = 0; i < 4; i++) {
        currentQuarter++
        if (currentQuarter > 4) {
          currentQuarter = 1
          currentYear++
        }
        currentPrice = Math.round(currentPrice * (1 + growthRate))
        
        let existing = result.find(r => r.period === `Q${currentQuarter} ${currentYear}`)
        if (!existing) {
          existing = { period: `Q${currentQuarter} ${currentYear}` }
          result.push(existing)
        }
        existing[`${area}_forecast`] = currentPrice
      }
    })

    const historicalPeriods = priceTrendByPeriod.slice(-6).map(row => {
      const enhanced: Record<string, string | number | null> = { ...row }
      areas.forEach(area => {
        enhanced[`${area}_forecast`] = null
      })
      return enhanced
    })

    if (historicalPeriods.length > 0 && result.length > 0) {
      const lastHistorical = historicalPeriods[historicalPeriods.length - 1]
      areas.forEach(area => {
        if (lastHistorical[area]) {
          const firstForecast = result[0]
          if (firstForecast) {
            const bridgeRow: Record<string, string | number | null> = { ...lastHistorical }
            areas.forEach(a => {
              bridgeRow[`${a}_forecast`] = lastHistorical[a] as number
            })
            historicalPeriods[historicalPeriods.length - 1] = bridgeRow
          }
        }
      })
    }

    return [...historicalPeriods, ...result]
  }, [chartData.priceTrends, priceTrendByPeriod])

  const uniqueAreas = useMemo(() => 
    Array.from(new Set(chartData.priceTrends.map(d => d.area))),
    [chartData.priceTrends]
  )

  const uniqueRentalAreas = useMemo(() => 
    Array.from(new Set(chartData.rentalTrends.map(d => d.area))),
    [chartData.rentalTrends]
  )

  const hasChartData = priceTrendByPeriod.length > 0 || chartData.areaComparison.length > 0

  if (!hasChartData) return null

  return (
    <div className="space-y-6">
      {priceTrendByPeriod.length > 1 && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">{labels.priceTrend}</h2>
          <p className="text-sm text-gray-500 mb-6">{labels.priceTrendDesc}</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceTrendByPeriod}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0ece8" />
                <XAxis 
                  dataKey="period" 
                  tick={{ fontSize: 11, fill: '#888' }} 
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tickFormatter={formatPrice} 
                  tick={{ fontSize: 11, fill: '#888' }}
                  width={65}
                />
                <Tooltip 
                  formatter={(value: unknown) => formatFullPrice(Number(value))} 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e8e0d8', fontSize: '13px' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                {uniqueAreas.map((area, i) => (
                  <Line 
                    key={area}
                    type="monotone" 
                    dataKey={area} 
                    stroke={COLORS[i % COLORS.length]} 
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                    connectNulls
                    name={shortenArea(area)}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {forecastData.length > 2 && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">{labels.forecast}</h2>
          <p className="text-sm text-gray-500 mb-6">{labels.forecastDesc}</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0ece8" />
                <XAxis 
                  dataKey="period" 
                  tick={{ fontSize: 11, fill: '#888' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tickFormatter={formatPrice} 
                  tick={{ fontSize: 11, fill: '#888' }}
                  width={65}
                />
                <Tooltip 
                  formatter={(value: unknown) => value ? formatFullPrice(Number(value)) : '—'} 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e8e0d8', fontSize: '13px' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                {uniqueAreas.slice(0, 3).map((area, i) => (
                  <Line 
                    key={`hist-${area}`}
                    type="monotone" 
                    dataKey={area} 
                    stroke={COLORS[i % COLORS.length]} 
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    connectNulls
                    name={`${shortenArea(area)} (${labels.historical})`}
                  />
                ))}
                {uniqueAreas.slice(0, 3).map((area, i) => (
                  <Line 
                    key={`forecast-${area}`}
                    type="monotone" 
                    dataKey={`${area}_forecast`} 
                    stroke={COLORS[i % COLORS.length]} 
                    strokeWidth={2.5}
                    strokeDasharray="8 4"
                    dot={{ r: 3, strokeDasharray: '' }}
                    connectNulls
                    name={`${shortenArea(area)} (${labels.projected})`}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">
            {isAr 
              ? '* التوقعات تستند إلى الاتجاهات التاريخية ولا تضمن الأداء المستقبلي'
              : '* Forecasts are based on historical trends and do not guarantee future performance'}
          </p>
        </div>
      )}

      {chartData.areaComparison.length > 1 && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">{labels.areaComparison}</h2>
          <p className="text-sm text-gray-500 mb-6">{labels.areaComparisonDesc}</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData.areaComparison.map(d => ({ ...d, area: shortenArea(d.area) }))}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0ece8" />
                <XAxis 
                  dataKey="area" 
                  tick={{ fontSize: 11, fill: '#888' }}
                  angle={-25}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  yAxisId="price"
                  tickFormatter={formatPrice} 
                  tick={{ fontSize: 11, fill: '#888' }}
                  width={65}
                />
                <YAxis 
                  yAxisId="transactions"
                  orientation="right"
                  tick={{ fontSize: 11, fill: '#888' }}
                  width={50}
                />
                <Tooltip 
                  formatter={(value: unknown, name: unknown) => {
                    if (name === labels.avgPrice) return formatFullPrice(Number(value))
                    return Number(value).toLocaleString()
                  }}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e8e0d8', fontSize: '13px' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar yAxisId="price" dataKey="avgPrice" fill="#9b7260" name={labels.avgPrice} radius={[6, 6, 0, 0]} />
                <Line yAxisId="transactions" type="monotone" dataKey="transactions" stroke="#5a7a6f" strokeWidth={2.5} name={labels.transactions} dot={{ r: 5 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {chartData.yieldComparison.length > 1 && chartData.yieldComparison.some(d => d.rentalYield > 0) && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">{labels.yieldComparison}</h2>
          <p className="text-sm text-gray-500 mb-6">{labels.yieldComparisonDesc}</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData.yieldComparison.map(d => ({ ...d, area: shortenArea(d.area) }))}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0ece8" />
                <XAxis 
                  dataKey="area" 
                  tick={{ fontSize: 11, fill: '#888' }}
                  angle={-25}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tick={{ fontSize: 11, fill: '#888' }}
                  width={45}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip 
                  formatter={(value: unknown, name: unknown) => {
                    if (name === labels.yield) return `${Number(value).toFixed(1)}%`
                    return formatFullPrice(Number(value))
                  }}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e8e0d8', fontSize: '13px' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="rentalYield" fill="#5a7a6f" name={labels.yield} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {rentalTrendByPeriod.length > 1 && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">{labels.rentalTrend}</h2>
          <p className="text-sm text-gray-500 mb-6">{labels.rentalTrendDesc}</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={rentalTrendByPeriod}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0ece8" />
                <XAxis 
                  dataKey="period" 
                  tick={{ fontSize: 11, fill: '#888' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tickFormatter={formatPrice} 
                  tick={{ fontSize: 11, fill: '#888' }}
                  width={65}
                />
                <Tooltip 
                  formatter={(value: unknown) => `AED ${Number(value).toLocaleString()}/mo`}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e8e0d8', fontSize: '13px' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                {uniqueRentalAreas.map((area, i) => (
                  <Area
                    key={area}
                    type="monotone"
                    dataKey={area}
                    stroke={COLORS[i % COLORS.length]}
                    fill={COLORS[i % COLORS.length]}
                    fillOpacity={0.1}
                    strokeWidth={2}
                    connectNulls
                    name={shortenArea(area)}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  )
}
