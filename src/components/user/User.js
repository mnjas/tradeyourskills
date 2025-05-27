import React from "react"
import styles from "./User.module.scss"
import Link from 'next/link'

const users = [
  { image: "/assets/avatar1.png", name: "Jean Dupont", role: "Guitariste", location: "Paris, France" },
  { image: "/assets/avatar2.png", name: "Sophie Martin", role: "Oenologue", location: "Lyon, France" },
  { image: "/assets/avatar3.png", name: "Marc Leblanc", role: "Developpeur web", location: "Marseille, France" },
  { image: "/assets/avatar4.png", name: "Claire Fontaine", role: "Danseuse", location: "Bordeaux, France" }
]

const User = () => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.title}>NOS TRADERS APPRECIES</h2>
      <h4 className={styles.subtitle}>Decouvrez les membres les plus actifs de notre communaute</h4>

      <div className={styles.gridContainer}>
        {users.map((user, index) => (
          <div key={index} className={styles.userCard}>
            <img src={user.image} alt={user.name} className={styles.userImage} />
            <div className={styles.userInfo}>
              <h3 className={styles.userName}>{user.name}</h3>
              <p className={styles.userRole}>{user.role}</p>
              <p className={styles.userLocation}>{user.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Link href="/list" className={styles.seeMoreButton}>
          Voir plus
        </Link>
      </div>
    </div>
  )
}

export default User
