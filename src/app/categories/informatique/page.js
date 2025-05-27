import CategoryGrid from '../../../components/categoryGrid/CategoryGrid'
import Banner from '../../../components/banner/Banner'
import Slogan from '../../../components/slogan/Slogan'
import bannerStyles from '../../../components/banner/Banner.module.scss'
import styles from "../../skills/skills.module.scss"

const informatiqueSubcategories = [
  {
    title: 'JavaScript',
    image: '/assets/javascript.png',
    href: '/competence/javascript',
  },
  {
    title: 'PHP',
    image: '/assets/php.png',
    href: '/competence/php',
  },
]

export default function InformatiquePage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre l&rsquo;<span className={bannerStyles.highlight}>informatique ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={informatiqueSubcategories} />
    </main>
  )
}
