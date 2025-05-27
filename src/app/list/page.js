"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "../competence/SkillPage.module.scss"
import Banner from "../../components/banner/Banner"
import bannerStyles from "../../components/banner/Banner.module.scss"
import Slogan from "../../components/slogan/Slogan"
import PrivatePage from '../../components/privatePage/PrivatePage'

export default function ListUserPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("http://localhost:5000/api/users/")
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        console.error("Erreur de chargement des utilisateurs", err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <PrivatePage>
      <main className={styles.container}>
        <div className={styles.banner}>
          <Banner>
            Tous nos <span className={bannerStyles.highlight}>membres</span>
          </Banner>
        </div>
        <Slogan />

        {loading ? (
          <p>Chargement...</p>
        ) : (
          <div className={styles.cardGrid}>
            {users.map((user) => (
              <div
                key={user.id}
                className={styles.card}
                onClick={() => router.push(`/users/${user.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${user.id % 100}.jpg`}
                  alt={`Avatar de ${user.name}`}
                  width={100}
                  height={100}
                  className={styles.avatarImg}
                />
                <h3>{user.name}</h3>
                <p>{user.skill ? `Spécialiste en ${user.skill}` : "Compétence non précisée"}</p>
                <p><strong>Compétence :</strong> {user.skill}</p>
                <p><strong>Téléphone :</strong> {user.phone || 'Non renseigné'}</p>
                <p><strong>Email :</strong> {user.email}</p>
                <p><strong>Ville :</strong> {user.city || 'Non renseignée'}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </PrivatePage>
  )
}
