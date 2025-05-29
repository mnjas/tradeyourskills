import React from "react"
import styles from "./Footer.module.scss"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <p>
            S&rsquo;inscrire à la <span>newsletter</span>{' '}
            <em className={styles.comingSoon}>(Prochainement disponible)</em>
          </p>
          <input
            type="email"
            placeholder="Entrer votre email"
            className={styles.input}
            disabled
          />
        </div>

        <div className={styles.logo}>
          <p>TRADE</p>
          <p>YOUR</p>
          <p className={styles.skills}>SKILLS</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.contact}>
          <p>info@tradeyourskills.com</p>
          <p>+33 6 02 21 53 95</p>
        </div>

        <div className={styles.links}>
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/contact">Nous contacter</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
