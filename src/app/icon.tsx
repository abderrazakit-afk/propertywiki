import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#9b7260',
          borderRadius: '4px',
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M12 32V12L20 8L28 12V18"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M14 18H22C24.2091 18 26 19.7909 26 22C26 24.2091 24.2091 26 22 26H14V18Z"
            fill="white"
          />
          <rect x="14" y="26" width="3" height="6" fill="white" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
