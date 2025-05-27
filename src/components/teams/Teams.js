import React from "react"
import styles from "./Teams.module.scss"

const users = [
  { image: "/assets/avatar1.png", name: "Jean Dupont", role: "Chef de projet", location: "Paris, France" },
  { image: "/assets/avatar2.png", name: "Sophie Martin", role: "Développeuse web", location: "Lyon, France" },
  { image: "/assets/avatar3.png", name: "Marc Leblanc", role: "Développeur fullstack", location: "Paris, France" },
  { image: "/assets/avatar4.png", name: "Claire Fontaine", role: "UX/UI Design", location: "Bordeaux, France" },
  { image: "/assets/avatar4.png", name: "Thomas Meuner", role: "Testeur QA", location: "Paris, France" }
]

const Teams = () => {
  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.title}>Notre équipe</h4>
      <h2 className={styles.subtitle}>
        Derrière chaque compétence échangée se cache une équipe passionnée, engagée à faire vivre l'entraide et le partage au quotidien.
      </h2>
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
    </div>
  )
}

export default Teams
