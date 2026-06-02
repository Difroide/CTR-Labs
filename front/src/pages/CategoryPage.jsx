import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLang } from '../i18n'
import { vslCategories, criativosCategories } from '../data/categories'
import Navbar from '../components/Navbar'
import VideoPreviewCard from '../components/VideoPreviewCard'
import VideoModal from '../components/VideoModal'

export default function CategoryPage({ type }) {
  const { slug } = useParams()
  const { lang, t } = useLang()
  const navigate = useNavigate()
  const [activeVideo, setActiveVideo] = useState(null)

  const list = type === 'vsl' ? vslCategories : criativosCategories
  const category = list.find((c) => c.slug === slug)

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-gray-400">
        <span style={{ color: '#0866FF' }}>404</span>&nbsp;— diretório não encontrado
      </div>
    )
  }

  const data = category[lang]

  return (
    <main className="min-h-screen flex flex-col font-mono">
      <Navbar />

      <section className="flex-1 max-w-6xl mx-auto w-full px-6 pt-24 pb-16">
        {/* Back button */}
        <button
          onClick={() => navigate('/', { state: { scrollTo: type } })}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded text-sm font-bold text-white
                     transition-opacity duration-150 hover:opacity-80 cursor-pointer"
          style={{ background: '#0866FF', boxShadow: '3px 3px 0 #0550CC' }}
        >
          <span>←</span>
          <span>{t.backToHome}</span>
        </button>

        {/* Page header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span style={{ color: '#0866FF' }}>$</span>
            <span>cd ./{type}/{slug}/</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{data.title}</h1>
        </div>

        {/* Cards de vídeo */}
        {category.videos?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.videos.map((v) => (
              <VideoPreviewCard key={v.playerId} video={v} onPlay={() => setActiveVideo(v)} type={type} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-gray-200 rounded-md p-12 flex flex-col items-center justify-center gap-3 text-gray-400">
            <span className="text-3xl">📂</span>
            <p className="text-sm">{t.noVideos}</p>
            <p className="text-xs text-gray-300">$ 0 {t.files}</p>
          </div>
        )}
      </section>

      <footer className="text-center py-5 text-xs text-gray-400 border-t border-gray-200">
        <span style={{ color: '#0866FF' }}>$</span> {t.footer}
      </footer>

      {/* Modal fullscreen */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} type={type} />
      )}
    </main>
  )
}
