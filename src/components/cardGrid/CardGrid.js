import React from "react";
import styles from "./CardGrid.module.scss"


const CardGrid = () => {
  const cards = [
    { image: "/assets/guitare.jpg", text: "Guitare" },
    { image: "/assets/cuisine.jpg", text: "Cuisine" },
    { image: "/assets/informatique.jpg", text: "Informatique" },
    { image: "/assets/chant.jpg", text: "Chant" },
    { image: "/assets/anglais.jpg", text: "Anglais" },
  ];

  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.subtitle}>Large selection de competences</h4>
      <h2 className={styles.title}>Lorem ipsum dolor si amet</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.image} alt={card.text} className={styles.cardImage} />
            <div className={styles.overlay}>
              <span className={styles.overlayText}>{card.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
