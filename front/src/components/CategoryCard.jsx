import { useNavigate } from 'react-router-dom'
import { useLang } from '../i18n'

export default function CategoryCard({ category, basePath }) {
  const { lang, t } = useLang()
  const navigate = useNavigate()
  const data = category[lang]

  return (
    <button
      onClick={() => navigate(`/${basePath}/${category.slug}`)}
      className="text-left w-full bg-white border border-gray-200 rounded-md p-4 lg:p-8 flex flex-col gap-4
                 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer min-h-40 lg:min-h-64"
      style={{ boxShadow: '4px 4px 0 #d1d5db' }}
    >
      {/* Directory header */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold px-1.5 py-0.5 rounded shrink-0" style={{ background: '#0866FF', color: '#fff' }}>
          DIR
        </span>
        <span className="text-xs text-gray-400 truncate">./{category.slug}/</span>
      </div>

      {/* Title */}
      <p
        className="text-sm lg:text-base font-bold text-gray-900 leading-snug"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {data.title}
      </p>

      {/* Footer prompt */}
      <div className="flex items-center gap-1.5 text-xs text-gray-400 border-t border-gray-100 pt-3 mt-auto">
        <span style={{ color: '#0866FF' }}>$</span>
        <span>{category.videos?.length ?? 0} {t.files}</span>
        <span className="ml-auto text-gray-300">→</span>
      </div>
    </button>
  )
}
