import { criativosCategories } from '../data/categories'
import CategoryCarousel from './CategoryCarousel'

export default function CreativosSection() {
  return (
    <section id="criativos" className="pb-24 w-full">
      <CategoryCarousel categories={criativosCategories} basePath="criativos" />
    </section>
  )
}
