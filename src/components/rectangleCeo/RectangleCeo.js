import React from "react"
import styles from "./RectangleCeo.module.scss"

const RectangleCeo = () => {
  return (
    <div className={styles.component}>
      <div className={styles.banner}>
        <div className={styles.imageContainer}>
          <img src="/assets/rectangle-ceo.png" alt="Illustration" />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Rejoignez une communauté qui valorise l&rsquo;échange</h2>
          <p className={styles.subtitle}>
            Ici, chaque talent compte. En quelques clics, proposez ce que vous savez faire et découvrez des compétences à apprendre, sans barrière et sans pression.
            Un espace collaboratif où apprendre devient un plaisir partagé.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RectangleCeo
