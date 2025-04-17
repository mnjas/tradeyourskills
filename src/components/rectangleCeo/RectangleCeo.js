import React from "react";
import styles from "./RectangleCeo.module.scss";

const RectangleCeo = () => {
  return (
    <div className={styles.component}>
      <div className={styles.banner}>
        {/* Image à gauche */}
      <div className={styles.imageContainer}>
          <img src="/assets/rectangle-ceo.png" alt="Illustration" />
        </div>
        {/* Contenu à droite */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor si amet</h1>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus qui suscipit dolorum quam minus ipsum totam. Ratione repudiandae sit nostrum labore quaerat consequatur neque dolore! Dolore soluta hic vel amet?</p>
        </div>
      </div>
    </div>
  );
};

export default RectangleCeo;
