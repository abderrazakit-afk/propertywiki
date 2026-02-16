'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const DUBAI_AREA_COORDS: Record<string, [number, number]> = {
  'Dubai Marina': [25.0805, 55.1403],
  'JBR': [25.0783, 55.1344],
  'Jumeirah Beach Residence': [25.0783, 55.1344],
  'Palm Jumeirah': [25.1124, 55.1390],
  'Downtown Dubai': [25.1972, 55.2744],
  'Business Bay': [25.1860, 55.2720],
  'DIFC': [25.2100, 55.2795],
  'JVC': [25.0566, 55.2094],
  'Jumeirah Village Circle': [25.0566, 55.2094],
  'JVT': [25.0650, 55.2000],
  'Jumeirah Village Triangle': [25.0650, 55.2000],
  'Dubai Hills Estate': [25.1044, 55.2250],
  'Dubai Hills': [25.1044, 55.2250],
  'Arabian Ranches': [25.0614, 55.2489],
  'Arabian Ranches 2': [25.0550, 55.2600],
  'Arabian Ranches 3': [25.0480, 55.2700],
  'Dubai Silicon Oasis': [25.1254, 55.3785],
  'Sports City': [25.0440, 55.2240],
  'Dubai Sports City': [25.0440, 55.2240],
  'Motor City': [25.0456, 55.2325],
  'Al Furjan': [25.0265, 55.1438],
  'Discovery Gardens': [25.0389, 55.1350],
  'International City': [25.1644, 55.4052],
  'Al Barsha': [25.1145, 55.2000],
  'Mirdif': [25.2211, 55.4170],
  'Town Square': [25.0270, 55.2690],
  'Dubailand': [25.0730, 55.3020],
  'MBR City': [25.1500, 55.3100],
  'Mohammed Bin Rashid City': [25.1500, 55.3100],
  'Creek Harbour': [25.1961, 55.3406],
  'Dubai Creek Harbour': [25.1961, 55.3406],
  'Sobha Hartland': [25.1630, 55.3200],
  'Emaar Beachfront': [25.0830, 55.1330],
  'Bluewaters': [25.0820, 55.1240],
  'Bluewaters Island': [25.0820, 55.1240],
  'City Walk': [25.2060, 55.2620],
  'La Mer': [25.2310, 55.2640],
  'Emirates Hills': [25.0772, 55.1670],
  'The Springs': [25.0730, 55.1800],
  'The Meadows': [25.0800, 55.1750],
  'JLT': [25.0690, 55.1500],
  'Jumeirah Lakes Towers': [25.0690, 55.1500],
  'Deira': [25.2750, 55.3210],
  'Bur Dubai': [25.2580, 55.3000],
  'World Trade Centre': [25.2270, 55.2850],
  'Zabeel': [25.2180, 55.2870],
  'Arjan': [25.0500, 55.2350],
  'Al Quoz': [25.1480, 55.2200],
  'Jumeirah': [25.2160, 55.2520],
  'Umm Suqeim': [25.1480, 55.2100],
  'Dubai Internet City': [25.0950, 55.1580],
  'Dubai Media City': [25.0990, 55.1560],
  'Production City': [25.0440, 55.1920],
  'IMPZ': [25.0440, 55.1920],
  'Damac Hills': [25.0360, 55.2340],
  'Damac Hills 2': [25.0180, 55.2800],
  'Tilal Al Ghaf': [25.0300, 55.2450],
  'Dubai South': [24.9560, 55.1690],
  'Expo City': [24.9670, 55.1530],
  'Mudon': [25.0310, 55.2780],
  'Remraam': [25.0450, 55.2550],
  'Liwan': [25.0500, 55.2900],
  'Meydan': [25.1630, 55.3050],
  'Nad Al Sheba': [25.1720, 55.3200],
  'Al Jaddaf': [25.2060, 55.3300],
  'Culture Village': [25.2100, 55.3350],
  'Dubai Festival City': [25.2300, 55.3560],
  'Ras Al Khor': [25.1830, 55.3450],
  'Dubai Investments Park': [24.9960, 55.1580],
  'Green Community': [25.0020, 55.1650],
  'Studio City': [25.0400, 55.2150],
  'Villanova': [25.0320, 55.2850],
  'Serena': [25.0290, 55.2780],
  'Park Heights': [25.1050, 55.2280],
  'Acacia': [25.1030, 55.2260],
  'Golf Place': [25.1060, 55.2300],
  'Madinat Jumeirah Living': [25.1350, 55.1880],
  'Jumeirah Golf Estates': [25.0320, 55.1750],
  'Al Barari': [25.0900, 55.2700],
  'The Villa': [25.0600, 55.2600],
}

function getAreaCoords(areaName: string): [number, number] | null {
  if (DUBAI_AREA_COORDS[areaName]) return DUBAI_AREA_COORDS[areaName]

  const normalized = areaName.toLowerCase()
  for (const [key, coords] of Object.entries(DUBAI_AREA_COORDS)) {
    if (key.toLowerCase() === normalized) return coords
    if (normalized.includes(key.toLowerCase()) || key.toLowerCase().includes(normalized)) return coords
  }

  return null
}

interface AreaMarker {
  areaName: string
  rank: number
  matchScore: string
  avgPrice: string
  rentalYield: string
}

interface AreaMapProps {
  areas: AreaMarker[]
  lang?: 'en' | 'ar'
}

export default function AreaMap({ areas, lang = 'en' }: AreaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current) return

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
    }).setView([25.1500, 55.2500], 11)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map)

    const bounds: [number, number][] = []

    areas.forEach((area) => {
      const coords = getAreaCoords(area.areaName)
      if (!coords) return

      bounds.push(coords)

      const color = area.rank === 1 ? '#d4a847' : area.rank === 2 ? '#8b8b8b' : '#cd7f32'

      const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background:${color};color:white;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);">#${area.rank}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      })

      const popupContent = `
        <div style="min-width:180px;font-family:system-ui,-apple-system,sans-serif;">
          <h3 style="margin:0 0 6px;font-size:15px;font-weight:700;color:#1a1a1a;">#${area.rank} ${area.areaName}</h3>
          <p style="margin:0 0 3px;font-size:12px;color:#666;"><strong>${lang === 'ar' ? 'التقييم' : 'Match'}:</strong> ${area.matchScore}</p>
          <p style="margin:0 0 3px;font-size:12px;color:#666;"><strong>${lang === 'ar' ? 'متوسط السعر' : 'Avg Price'}:</strong> ${area.avgPrice}</p>
          <p style="margin:0;font-size:12px;color:#666;"><strong>${lang === 'ar' ? 'عائد الإيجار' : 'Yield'}:</strong> ${area.rentalYield}</p>
        </div>
      `

      L.marker(coords, { icon }).addTo(map).bindPopup(popupContent)
    })

    if (bounds.length > 1) {
      map.fitBounds(bounds as L.LatLngBoundsExpression, { padding: [50, 50] })
    } else if (bounds.length === 1) {
      map.setView(bounds[0] as L.LatLngExpression, 13)
    }

    mapInstanceRef.current = map

    setTimeout(() => {
      map.invalidateSize()
    }, 200)

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [areas, lang])

  return (
    <>
      <style>{`.custom-marker { background: transparent !important; border: none !important; }`}</style>
      <div
        ref={mapRef}
        className="w-full h-[400px] rounded-xl overflow-hidden border border-warm-200"
        style={{ zIndex: 1 }}
      />
    </>
  )
}
