import React from "react"
import styles from "./HeroSection.module.scss"

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>

      <div className={styles.textContainer}>
        <h2 className={styles.title}>Trouvez ce que vous cherchez</h2>
        <h4 className={styles.subtitle}>Recherchez parmi toutes nos compétences</h4>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Rechercher..." />
          <button>🔍</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img src="/assets/image header.png" alt="Illustration" />
      </div>
    </div>
  )
}

export default HeroSection
