import { vslCategories } from '../data/categories'
import CategoryCarousel from './CategoryCarousel'

export default function VSLSection() {
  return (
    <section id="vsl" className="pb-2 lg:pb-12 w-full">
      <CategoryCarousel categories={vslCategories} basePath="vsl" />
    </section>
  )
}
