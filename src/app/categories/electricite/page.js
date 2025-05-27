import CategoryGrid from '../../../components/categoryGrid/CategoryGrid'
import Banner from '../../../components/banner/Banner'
import Slogan from '../../../components/slogan/Slogan'
import bannerStyles from '../../../components/banner/Banner.module.scss'
import styles from "../../skills/skills.module.scss"

const electriciteSubcategories = [
  {
    title: 'Bases de l\'électricité',
    image: '/assets/electricite-bases.jpg',
    href: '/competence/electricite-bases',
  },
  {
    title: 'Domotique',
    image: '/assets/domotique.webp',
    href: '/competence/domotique',
  },
]

export default function ElectricitePage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre l&rsquo;<span className={bannerStyles.highlight}>electricite ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={electriciteSubcategories} />
    </main>
  )
}
