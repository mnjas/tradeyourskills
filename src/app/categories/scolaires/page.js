import CategoryGrid from '../../../components/categoryGrid/CategoryGrid'
import Banner from '../../../components/banner/Banner'
import Slogan from '../../../components/slogan/Slogan'
import bannerStyles from '../../../components/banner/Banner.module.scss'
import styles from "../../skills/skills.module.scss"

const scolaireSubcategories = [
  {
    title: 'Maths',
    image: '/assets/maths.jpg',
    href: '/competence/maths',
  },
  {
    title: 'Histoire',
    image: '/assets/histoire.jpg',
    href: '/competence/histoire',
  },
  {
    title: 'Francais',
    image: '/assets/francais.jpg',
    href: '/competence/francais',
  },
  {
    title: 'SVT',
    image: '/assets/svt.jpg',
    href: '/competence/svt',
  },
  {
    title: 'Physique-Chimie',
    image: '/assets/physique.jpg',
    href: '/competence/physique',
  },
]

export default function ScolairePage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Reviser ses matieres <span className={bannerStyles.highlight}>scolaires ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={scolaireSubcategories} />
    </main>
  )
}
