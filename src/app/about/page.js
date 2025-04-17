import RectangleCeo from '@/components/rectangleCeo/RectangleCeo'
import styles from "./about.module.scss"
import Teams from "@/components/teams/Teams"
import Banner from '@/components/banner/Banner'
import Slogan from '@/components/slogan/Slogan'
import bannerStyles from '@/components/banner/Banner.module.scss'


export default async function About() {

  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          QUI SOMMES-<span className={bannerStyles.highlight}>NOUS</span> ?
        </Banner>
      </div>
      <Slogan />
      <div className={styles.gridContainer}>
        <div className={styles.leftSection}>
          <h2 className={styles.title}>Lorem ipsum dolor si amet</h2>
          <p className={styles.subtitle}>Nulla fermentum fermentum tincidunt. Nam eget eleifend ligula, ac tincidunt ante. Duis vel iaculis neque, in venenatis elit. Mauris malesuada cursus ante, vitae commodo dui dapibus scelerisque. Sed id laoreet velit. In imperdiet sapien diam, ac iaculis metus tincidunt quis. Nullam a laoreet ex, pulvinar sollicitudin ex. Maecenas auctor consectetur erat vitae rhoncus. Phasellus eu turpis maximus ex ornare dignissim.</p>
          <p className={styles.subtitle}>Nulla fermentum fermentum tincidunt. Nam eget eleifend ligula, ac tincidunt ante. Duis vel iaculis neque, in venenatis elit. Mauris malesuada cursus ante, vitae commodo dui dapibus scelerisque. Sed id laoreet velit. In imperdiet sapien diam, ac iaculis metus tincidunt quis. Nullam a laoreet ex, pulvinar sollicitudin ex. Maecenas auctor consectetur erat vitae rhoncus. Phasellus eu turpis maximus ex ornare dignissim.</p>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.imageContainer}>
            <img src="/assets/image about.png" alt="Illustration" />
          </div>
        </div>
      </div>
      <Teams />
      <RectangleCeo />
    </main>
  )
}
