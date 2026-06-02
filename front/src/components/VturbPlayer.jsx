import { useEffect, useRef } from 'react'

const SDK_URL = 'https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js'

function loadSdk() {
  if (document.querySelector(`script[src="${SDK_URL}"]`)) return
  const s = document.createElement('script')
  s.src = SDK_URL
  s.async = true
  document.head.appendChild(s)
}

export default function VturbPlayer({ playerId, accountId }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    loadSdk()

    const iframe = iframeRef.current
    if (!iframe) return

    iframe.src =
      `https://scripts.converteai.net/${accountId}/players/${playerId}/v4/embed.html` +
      (window.location.search || '?') +
      '&vl=' + encodeURIComponent(window.location.href)
  }, [playerId, accountId])

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ position: 'relative', paddingTop: '180%' }}>
        <iframe
          ref={iframeRef}
          id={`ifr_${playerId}`}
          src=""
          frameBorder="0"
          allowFullScreen
          referrerPolicy="origin"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}
