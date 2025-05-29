import styles from "./skills.module.scss"
import Banner from '../../components/banner/Banner'
import Slogan from '../../components/slogan/Slogan'
import CategoryGrid from '../../components/categoryGrid/CategoryGrid'
import bannerStyles from '../../components/banner/Banner.module.scss'
import PrivatePage from '../../components/privatePage/PrivatePage'
import Link from 'next/link'

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
    href: '/categories/informatique',
  },
  {
    title: 'Sport',
    image: '/assets/skate.jpg',
    href: '/categories/sport',
  },
  {
    title: 'Langues',
    image: '/assets/anglais.jpg',
    href: '/categories/langues',
  },
  {
    title: 'Arts',
    image: '/assets/dessin.jpg',
    href: '/categories/arts',
  },
  {
    title: 'Scolaire',
    image: '/assets/maths.jpg',
    href: '/categories/scolaires',
  },
  {
    title: 'Électricité',
    image: '/assets/electricite.webp',
    href: '/categories/electricite',
  },
  {
    title: 'Théâtre',
    image: '/assets/theatre.jpg',
    href: '/categories/theatre',
  },
  {
    title: 'Plomberie',
    image: '/assets/plomberie.jpg',
    href: '/categories/plomberie',
  },
  {
    title: 'Mécanique',
    image: '/assets/mecanique.jpg',
    href: '/categories/mecanique',
  },
  {
    title: 'Oenologie',
    image: '/assets/oenologie.jpg',
    href: '/categories/oenologie',
  },
]

export default async function Skills() {
  return (
    <PrivatePage>
      <main className={styles.container}>
        <div className={styles.banner}>
          <Banner>
            Les competences <span className={bannerStyles.highlight}>disponibles</span>
          </Banner>
        </div>
        <Slogan />
        <CategoryGrid items={skillsCategories} />

        <div className={styles.suggest}>
          <p>Tu veux enseigner une compétence qui n&rsquo;est pas encore listée ?</p>
          <Link href="/suggest-skill" className={styles.suggestLink}>
            👉 Proposer une compétence
          </Link>
        </div>
      </main>
    </PrivatePage>
  )
}
