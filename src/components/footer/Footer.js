import React from "react"
import styles from "./Footer.module.scss"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <p>S&rsquo;inscrire à la <span>newsletter</span></p>
          <input type="email" placeholder="Entrer votre email" className={styles.input} />
        </div>

        <div className={styles.logo}>
          <p>TRADE</p>
          <p>YOUR</p>
          <p className={styles.skills}>SKILLS</p>
        </div>
      </div>

      {/* Section inférieure */}
      <div className={styles.bottomSection}>
        {/* Coordonnées à gauche */}
        <div className={styles.contact}>
          <p>info@tradeyourskills.com</p>
          <p>+33 6 12 34 56 78</p>
        </div>

        {/* Liens à droite */}
        <div className={styles.links}>
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="#">Médias sociaux</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
