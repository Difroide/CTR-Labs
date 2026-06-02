import { useEffect } from 'react'
import VturbPlayer from './VturbPlayer'

function Headline({ parts }) {
  if (!parts?.length) return null
  return (
    <p
      className="text-center leading-snug px-1 mb-5"
      style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.05rem', color: '#374151' }}
    >
      {parts.map((part, i) =>
        part.highlight ? (
          <strong
            key={i}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#16a34a',
            }}
          >
            {part.text}
          </strong>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </p>
  )
}

export default function VideoModal({ video, onClose, type }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isCriativo = type === 'criativos'

  if (isCriativo) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-8 right-0 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-150 cursor-pointer text-base leading-none"
            aria-label="Fechar"
          >
            ×
          </button>
          <VturbPlayer playerId={video.playerId} accountId={video.accountId} />
        </div>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl w-full max-w-sm shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors duration-150 cursor-pointer text-base leading-none"
          aria-label="Fechar"
        >
          ×
        </button>

        <div className="pt-8 pb-6 px-4">
          <Headline parts={video.headline} />
          <VturbPlayer playerId={video.playerId} accountId={video.accountId} />
        </div>
      </div>
    </div>
  )
}
