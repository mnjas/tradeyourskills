import CategoryGrid from '../../../components/categoryGrid/CategoryGrid'
import Banner from '../../../components/banner/Banner'
import Slogan from '../../../components/slogan/Slogan'
import bannerStyles from '../../../components/banner/Banner.module.scss'
import styles from "../../skills/skills.module.scss"

const theatreSubcategories = [
  {
    title: 'Improvisation',
    image: '/assets/impro.jpg',
    href: '/competence/improvisation',
  },
]

export default function TheatrePage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre le <span className={bannerStyles.highlight}>theatre ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={theatreSubcategories} />
    </main>
  )
}
