import React from "react";
import styles from "./User.module.scss";

const users = [
  { image: "/assets/avatar1.png", name: "Jean Dupont", role: "Guitariste", location: "Paris, France" },
  { image: "/assets/avatar2.png", name: "Sophie Martin", role: "Oenologue", location: "Lyon, France" },
  { image: "/assets/avatar3.png", name: "Marc Leblanc", role: "Développeur web", location: "Marseille, France" },
  { image: "/assets/avatar4.png", name: "Claire Fontaine", role: "Danseuse", location: "Bordeaux, France" }
];

const User = () => {
  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.subtitle}>Nos traders appréciés</h4>
      <h2 className={styles.title}>Lorem ipsum dolor si amet</h2>

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
      <button type="submit" className={styles.btn}>Tout voir</button>
    </div>
  );
};

export default User;
