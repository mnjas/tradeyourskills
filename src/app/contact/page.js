import ContactForm from "../../components/contactForm/ContactForm"
import styles from "./contact.module.scss"
import Map from '../../components/map/Map'
import Banner from '../../components/banner/Banner'
import bannerStyles from '../../components/banner/Banner.module.scss'
import Slogan from '../../components/slogan/Slogan'

export default async function Contact() {

  const latitude = 48.8566
  const longitude = 2.3522

  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Contactez-<span className={bannerStyles.highlight}>nous</span>
        </Banner>
      </div>
      <hr />
      <Slogan />
      <ContactForm />

      {/* google map */}
      <Map latitude={latitude} longitude={longitude} />
    </main>
  )
}
