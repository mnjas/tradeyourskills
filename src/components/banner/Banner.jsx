import styles from './Banner.module.scss'

const Banner = ({ children }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.bannerText}>{children}</h1>
    </div>
  )
}

export default Banner
