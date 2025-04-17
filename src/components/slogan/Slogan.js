import styles from './Slogan.module.scss'

const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <h2 className={styles.actions}>Apprendre, partager, recommencer</h2>
      <p className={styles.subtitle}>Plateforme de partage de compétences</p>
      <p className={styles.searchHint}>Rechercher une compétence...</p>
    </div>
  )
}

export default Slogan
