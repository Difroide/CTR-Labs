import { useLang } from '../i18n'

const THUMB_BASE = 'https://images.converteai.net'

const FLAGS = {
  us: '🇺🇸',
  br: '🇧🇷',
}

export default function VideoPreviewCard({ video, onPlay, type }) {
  const { lang } = useLang()

  const thumbnail = video.thumbnail ||
    `${THUMB_BASE}/${video.accountId}/players/${video.playerId}/thumbnail.jpg`

  const isCriativo = type === 'criativos'
  const title = lang === 'en' && video.titleEn ? video.titleEn : video.title

  return (
    <div
      className="bg-white border border-gray-200 rounded-md overflow-hidden cursor-pointer group"
      style={{ boxShadow: '4px 4px 0 #d1d5db' }}
      onClick={onPlay}
    >
      {/* Thumbnail */}
      <div className={`relative bg-gray-100 overflow-hidden ${isCriativo ? 'aspect-[3/4]' : 'aspect-video'}`}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        {/* Bandeira */}
        {video.flag && (
          <span className="absolute top-2 right-2 text-xl leading-none drop-shadow">
            {FLAGS[video.flag]}
          </span>
        )}

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-200">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110"
            style={{ background: '#0866FF' }}
          >
            <span className="text-white text-xl pl-1">▶</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-100">
        <span
          className="text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0"
          style={{ background: '#0866FF' }}
        >
          {isCriativo ? 'CRIATIVO' : 'VSL'}
        </span>
        <span className="text-sm text-gray-800 font-mono truncate">{title}</span>
      </div>
    </div>
  )
}
