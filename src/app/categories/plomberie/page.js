import CategoryGrid from '../../../components/categoryGrid/CategoryGrid'
import Banner from '../../../components/banner/Banner'
import Slogan from '../../../components/slogan/Slogan'
import bannerStyles from '../../../components/banner/Banner.module.scss'
import styles from "../../skills/skills.module.scss"

const plomberieSubcategories = [
  {
    title: 'Gérer une fuite',
    image: '/assets/reparation-fuite.jpg',
    href: '/competence/reparation-fuite',
  },
  {
    title: 'Désembouage',
    image: '/assets/desembouage.jpg',
    href: '/competence/desembouage',
  },
]

export default function PlomberiePage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre la <span className={bannerStyles.highlight}>plomberie ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={plomberieSubcategories} />
    </main>
  )
}
