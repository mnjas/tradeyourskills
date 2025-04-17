import styles from "./skills.module.scss"
import Banner from '@/components/banner/Banner'
import Slogan from '@/components/slogan/Slogan'
import CategoryGrid from '@/components/categoryGrid/CategoryGrid'
import bannerStyles from '@/components/banner/Banner.module.scss'

const skillsCategories = [
  {
    title: 'Musique',
    image: '/assets/guitare.jpg',
    href: '/categories/musique',
  },
  {
    title: 'Cuisine',
    image: '/assets/cuisine.jpg',
    href: '/categories/cuisine',
  },
  {
    title: 'Informatique',
    image: '/assets/informatique.jpg',
    href: '/categories/cuisine',
  },
  {
    title: 'Sport',
    image: '/assets/skate.jpg',
    href: '/categories/cuisine',
  },
  {
    title: 'Langues',
    image: '/assets/anglais.jpg',
    href: '/categories/cuisine',
  },
  {
    title: 'Arts',
    image: '/assets/dessin.jpg',
    href: '/categories/cuisine',
  },
  {
    title: 'Scolaire',
    image: '/assets/maths.jpg',
    href: '/categories/cuisine',
  },
  {
    title: 'Électricité',
    image: '/assets/electricite.webp',
    href: '/categories/cuisine',
  },
  {
    title: 'Théâtre',
    image: '/assets/theatre.jpg',
    href: '/categories/cuisine',
  },
  {
    title: 'Plomberie',
    image: '/assets/plomberie.jpg',
    href: '/categories/cuisine',
  },
  {
    title: 'Mécanique',
    image: '/assets/mecanique.jpg',
    href: '/categories/cuisine',
  },
  {
    title: 'Oenologie',
    image: '/assets/oenologie.jpg',
    href: '/categories/cuisine',
  },

]

export default async function Skills() {

  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Les competences <span className={bannerStyles.highlight}>disponibles</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={skillsCategories} />
    </main>
  )
}
