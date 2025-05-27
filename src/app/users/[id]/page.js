"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import styles from '../userProfile.module.scss'

export default function UserPage() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [recommendations, setRecommendations] = useState([])

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))

    fetch(`${API_BASE_URL}/api/users/${id}/recommendations`)
      .then(res => res.json())
      .then(setRecommendations)
  }, [id])

  if (!user) return <div>Chargement...</div>

  const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h1>{user.name}</h1>
          <p className={styles.skill}>Compétence : {user.skill}</p>
        </div>
        <div className={styles.avatar}>
          <img
            src={`https://randomuser.me/api/portraits/men/${user.id % 100}.jpg`}
            alt={`Avatar de ${user.name}`}
            width={100}
            height={100}
            className={styles.avatarImg}
          />
        </div>
      </div>

      {/* Review */}
      <div className={styles.reviews}>
        {[1, 2].map((_, i) => (
          <div className={styles.review} key={i}>
            <div className={styles.reviewAvatar}>A</div>
            <div className={styles.reviewText}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <small>- Utilisateur {i + 1}</small>
            </div>
          </div>
        ))}
      </div>

      {/* User info */}
      <div className={styles.infoBox}>
        <h2>Informations de l&rsquo;utilisateur :</h2>
        <p><strong>Compétence :</strong> {user.skill}</p>
        <p><strong>Téléphone :</strong> {user.phone || 'Non renseigné'}</p>
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>Ville :</strong> {user.city || 'Non renseignée'}</p>
        <p><strong>Description :</strong> {user.description || 'Non renseignée'}</p>

        <a href={`mailto:${user.email}`} className={styles.contactButton}>
          Contacter
        </a>
      </div>
    </div>
  )
}
