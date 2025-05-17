import CategoryGrid from '@/components/categoryGrid/CategoryGrid'
import Banner from '@/components/banner/Banner'
import Slogan from '@/components/slogan/Slogan'
import bannerStyles from '@/components/banner/Banner.module.scss'
import styles from "../../skills/skills.module.scss"

const musicSubcategories = [
  {
    title: 'Guitare',
    image: '/assets/guitare.jpg',
    href: '/competence/guitare',
  },
  {
    title: 'Piano',
    image: '/assets/piano.png',
    href: '/competence/piano',
  },
  {
    title: 'Batterie',
    image: '/assets/batterie.png',
    href: '/competence/batterie',
  },
  {
    title: 'Violon',
    image: '/assets/violon.png',
    href: '/competence/violon',
  },
  {
    title: 'Accordéon',
    image: '/assets/accordeon.png',
    href: '/competence/accordeon',
  },
  {
    title: 'Clarinette',
    image: '/assets/clarinette.png',
    href: '/competence/clarinette',
  },
  {
    title: 'Flûte',
    image: '/assets/flute.png',
    href: '/competence/flute',
  },
  {
    title: 'Saxophone',
    image: '/assets/saxophone.png',
    href: '/competence/saxophone',
  },
  {
    title: 'Clavecin',
    image: '/assets/clavecin.jpg',
    href: '/competence/clavecin',
  },
]

export default function MusiquePage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre un <span className={bannerStyles.highlight}>instrument ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={musicSubcategories} />
    </main>
  )
}
