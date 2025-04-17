import Image from "next/image"
import styles from "./Article.module.scss"

export default async function Article() {


  return (
    <div className={styles.component}>
      {/* Intro */}
      <div className={styles.banner}>
        <h1 className={styles.title}>lOREM IPSUM</h1>
        <p className={styles.subtitle}>Trade Your Skills</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime aliquam quo esse accusamus facilis minus non, deleniti, quis expedita nemo incidunt. Debitis unde esse in autem quaerat laboriosam quis.</p>
        </article>
      </div>
    </div>
  )
}
