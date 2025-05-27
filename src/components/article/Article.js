import Image from "next/image"
import styles from "./Article.module.scss"

export default async function Article() {


  return (
    <div className={styles.component}>
      {/* Intro */}
      <div className={styles.banner}>
        <h1 className={styles.title}>Trade Your Skills</h1>
        <p className={styles.subtitle}>Apprendre en échangeant du temps !</p>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <article className={styles.content}>
          <Image
            className={styles.siteLogo}
            src="/assets/image second bloc.png"
            width={350}
            height={350}
            alt="Logo"
          />
          <p>
            Trade Your Skills est une plateforme collaborative où chacun peut partager ses compétences en échange de l'apprentissage d'autres talents. Que vous soyez passionné de guitare, doué en mathématiques ou expert en cuisine, ici, le savoir se transmet sans argent, mais avec du temps et de l'entraide. Apprenez, enseignez, échangez… tout simplement !
          </p>
        </article>
      </div>
    </div>
  )
}
