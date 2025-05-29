import React from "react";
import styles from "../communityBanner/CommunityBanner.module.scss";
import Link from "next/link";

const ExchangeBanner = () => {
  return (
    <div className={styles.component}>
      <div className={styles.banner}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Échangez vos compétences en toute simplicité
          </h2>
          <p className={styles.subtitle}>
            Partagez ce que vous savez faire et apprenez de nouvelles choses
            grâce à notre communauté. Que vous soyez passionné de musique, de
            langues, de sport ou de développement, ici, tout le monde a quelque
            chose à transmettre.
          </p>
          <Link href="/about" className={styles.btn}>
            En savoir plus
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img src="/assets/banner-img.png" alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default ExchangeBanner;
