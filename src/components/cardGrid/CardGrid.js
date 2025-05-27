import React from "react"
import styles from "./CardGrid.module.scss"
import Link from 'next/link'
import PrivatePage from '../privatePage/PrivatePage'

const CardGrid = () => {
  const cards = [
    { image: "/assets/guitare.jpg", text: "Guitare" },
    { image: "/assets/cuisine.jpg", text: "Cuisine" },
    { image: "/assets/informatique.jpg", text: "Informatique" },
    { image: "/assets/chant.jpg", text: "Chant" },
    { image: "/assets/anglais.jpg", text: "Anglais" },
  ]

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.title}>Large selection de competences</h2>
      <h4 className={styles.subtitle}>Explorez un monde de competences a portee de main</h4>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <Link
            key={index}
            href={`/competence/${encodeURIComponent(card.text.toLowerCase())}`}
            className={styles.card}
          >
            <img src={card.image} alt={card.text} className={styles.cardImage} />
            <div className={styles.overlay}>
              <span className={styles.overlayText}>{card.text}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Link href="/skills" className={styles.seeMoreButton}>
          Voir plus
        </Link>
      </div>
    </div>
  )
}

export default CardGrid
