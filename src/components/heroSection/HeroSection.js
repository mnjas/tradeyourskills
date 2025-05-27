import React from "react"
import styles from "./HeroSection.module.scss"
import SearchSection from "../searchSection/SearchSection"

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <SearchSection />
      <div className={styles.imageContainer}>
        <img src="/assets/image header.png" alt="Illustration" />
      </div>
    </div>
  )
}

export default HeroSection
