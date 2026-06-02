import { useRef, useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'

function Arrow({ dir, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === -1 ? 'Anterior' : 'Próximo'}
      className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200
                 text-gray-600 hover:text-blue-500 hover:border-blue-500 transition-all duration-150 cursor-pointer"
      style={{
        boxShadow: '3px 3px 0 #d1d5db',
        opacity: disabled ? 0.25 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
      {dir === -1 ? '←' : '→'}
    </button>
  )
}

export default function CategoryCarousel({ categories, basePath }) {
  const scrollRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  function updateArrows() {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  function scroll(dir) {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <div className="w-full py-4 lg:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-5 pb-3 border-b border-gray-200">
          <span style={{ color: '#0866FF' }}>$</span>
          <span>ls ./{basePath}/</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-3">

        <Arrow dir={-1} disabled={!canLeft} onClick={() => scroll(-1)} />

        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', flex: '1 1 0', minWidth: 0 }}
        >
          {categories.map((cat) => (
            <div key={cat.slug} className="shrink-0 w-44 lg:w-56">
              <CategoryCard category={cat} basePath={basePath} />
            </div>
          ))}
        </div>

        <Arrow dir={1} disabled={!canRight} onClick={() => scroll(1)} />

      </div>
    </div>
  )
}
