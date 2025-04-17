import CategoryGrid from '@/components/categoryGrid/CategoryGrid'

const categories = [
  {
    title: 'Musique',
    image: '/assets/music.jpg',
    href: '/categories/musique',
  },
  {
    title: 'Cuisine',
    image: '/assets/cooking.jpg',
    href: '/categories/cuisine',
  },
]

export default function CategoriesPage() {
  return <CategoryGrid items={categories} />
}
