import { useLang } from '../i18n'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="px-6 lg:px-12 pt-28 pb-16">
      <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-start gap-6 max-w-2xl w-full">

        {/* Logo card */}
        <div
          className="inline-flex items-center gap-3 px-6 py-4 rounded-md text-white text-4xl sm:text-5xl font-bold tracking-tight"
          style={{
            background: '#0866FF',
            boxShadow: '6px 6px 0 #0550CC',
          }}
        >
          <span className="opacity-70 font-normal text-3xl sm:text-4xl">$</span>
          CTR Labs
        </div>

        {/* Headline */}
        <p
          className="text-gray-500 text-base sm:text-lg leading-relaxed border-l-4 pl-4"
          style={{ borderColor: '#0866FF' }}
        >
          {t.headline}
        </p>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/5547999718864"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-md text-white text-sm font-bold
                     transition-opacity duration-150 hover:opacity-90 active:opacity-80"
          style={{ background: '#25D366', boxShadow: '4px 4px 0 #1aad52', fontFamily: "'Poppins', sans-serif" }}
        >
          {/* WhatsApp icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
            <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.504 3.585 1.38 5.08L2 22l5.085-1.33A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2Zm0 18a7.96 7.96 0 0 1-4.07-1.116l-.29-.173-3.017.79.804-2.94-.19-.302A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.588 8-7.999 8Zm4.39-5.826c-.24-.12-1.42-.701-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.013-.373-1.93-1.19-.713-.636-1.195-1.42-1.335-1.66-.14-.24-.015-.37.105-.49.108-.107.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.468-.393-.404-.54-.412l-.46-.008a.884.884 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.693 2.584 4.102 3.622.574.247 1.021.395 1.37.506.575.183 1.099.157 1.513.095.461-.068 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/>
          </svg>
          {t.whatsapp}
        </a>

        {/* Blinking cursor */}
        <span className="cursor-blink text-2xl font-bold" style={{ color: '#0866FF' }}>
          _
        </span>
      </div>
      </div>
    </section>
  )
}
