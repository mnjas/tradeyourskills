import CategoryGrid from '../../../components/categoryGrid/CategoryGrid'
import Banner from '../../../components/banner/Banner'
import Slogan from '../../../components/slogan/Slogan'
import bannerStyles from '../../../components/banner/Banner.module.scss'
import styles from "../../skills/skills.module.scss"

const artsSubcategories = [
  {
    title: 'Dessin',
    image: '/assets/dessin.jpg',
    href: '/competence/dessin',
  },
  {
    title: 'Peinture',
    image: '/assets/peinture.jpeg',
    href: '/competence/peinture',
  },
  {
    title: 'Graffiti',
    image: '/assets/graffiti.jpg',
    href: '/competence/graffiti',
  },
]

export default function ArtsPage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre l'<span className={bannerStyles.highlight}>arts ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={artsSubcategories} />
    </main>
  )
}
