import React from "react";
import styles from "./Rectangle.module.scss";

const Rectangle = () => {
  return (
    <div className={styles.component}>
      <div className={styles.banner}>
        {/* Contenu à gauche */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor si amet</h1>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus qui suscipit dolorum quam minus ipsum totam. Ratione repudiandae sit nostrum labore quaerat consequatur neque dolore! Dolore soluta hic vel amet?</p>
          <button className={styles.btn}>En savoir plus</button>
        </div>

        {/* Image à droite */}
        <div className={styles.imageContainer}>
          <img src="/assets/banner-img.png" alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
