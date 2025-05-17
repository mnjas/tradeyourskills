import CategoryGrid from '../../../components/categoryGrid/CategoryGrid'
import Banner from '../../../components/banner/Banner'
import Slogan from '../../../components/slogan/Slogan'
import bannerStyles from '../../../components/banner/Banner.module.scss'
import styles from "../../skills/skills.module.scss"

const oenologieSubcategories = [
  {
    title: 'Cépage',
    image: '/assets/cepage.webp',
    href: '/competence/cepage',
  },
  {
    title: 'Vinification',
    image: '/assets/vinification.jpg',
    href: '/competence/vinification',
  },
]

export default function OenologiePage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre l'<span className={bannerStyles.highlight}>oenologie ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={oenologieSubcategories} />
    </main>
  )
}
