import { useLang } from '../i18n'

const flags = {
  pt: { emoji: '🇧🇷', label: 'PT' },
  en: { emoji: '🇺🇸', label: 'EN' },
}

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const other = lang === 'pt' ? 'en' : 'pt'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm font-mono">
      {/* Logo — fundo vermelho igual ao banner */}
      <div
        className="inline-flex items-center whitespace-nowrap px-2 py-0.5 rounded text-white text-xs font-bold tracking-tight"
        style={{ background: '#0866FF', boxShadow: '2px 2px 0 #0550CC' }}
      >
        CTR Labs
      </div>

      <nav className="ml-auto flex items-center gap-3 text-sm text-gray-500">
        {/* Links ocultos em mobile */}
        <a href="#vsl" className="hidden sm:inline hover:text-gray-900 transition-colors duration-150">
          {t.navVsl}
        </a>
        <span className="hidden sm:inline text-gray-300">|</span>
        <a href="#criativos" className="hidden sm:inline hover:text-gray-900 transition-colors duration-150">
          {t.navCreativos}
        </a>

        <button
          onClick={() => setLang(other)}
          className="flex items-center gap-1 border border-gray-200 rounded px-2 py-0.5 hover:border-gray-400 transition-colors duration-150 cursor-pointer"
          title={flags[other].label}
        >
          <span className="text-sm leading-none">{flags[lang].emoji}</span>
          <span className="text-xs font-bold text-gray-600">{flags[lang].label}</span>
          <span className="text-gray-300 text-xs">▾</span>
        </button>
      </nav>
    </header>
  )
}
