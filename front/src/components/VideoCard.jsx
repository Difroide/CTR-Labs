import { useLang } from '../i18n'

export default function VideoCard({ label = 'VSL_01.mp4', title = 'Projeto', tag = 'VSL', placeholder = false }) {
  const { t } = useLang()

  return (
    <div
      className="bg-white border border-gray-200 rounded-md overflow-hidden cursor-pointer transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
      style={{ boxShadow: '4px 4px 0 #d1d5db' }}
    >
      <div className="aspect-video bg-gray-100 border-b border-gray-200 flex flex-col items-center justify-center gap-2 hover:bg-gray-200 transition-colors duration-150">
        {placeholder ? (
          <>
            <span className="text-4xl text-gray-400">+</span>
            <p className="text-xs text-gray-400">{t.comingSoon}</p>
          </>
        ) : (
          <>
            <span className="text-4xl" style={{ color: '#0866FF' }}>▶</span>
            <p className="text-xs text-gray-400">{label}</p>
          </>
        )}
      </div>

      <div className="flex items-center gap-3 px-4 py-3">
        <span
          className="text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded"
          style={{ background: placeholder ? '#6b7280' : '#0866FF' }}
        >
          {placeholder ? '--' : tag}
        </span>
        <span className="text-sm text-gray-800">{placeholder ? t.newProject : title}</span>
      </div>
    </div>
  )
}
