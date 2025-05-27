"use client"
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import styles from '../SkillPage.module.scss'
import Banner from '../../../components/banner/Banner'
import bannerStyles from '../../../components/banner/Banner.module.scss'
import Slogan from '../../../components/slogan/Slogan'
import Image from 'next/image'

export default function SkillPage() {

  const router = useRouter()

  const [users, setUsers] = useState([])
  const { skill } = useParams()

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/skill/${skill}`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [skill])

  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Decouvrez les <span className={bannerStyles.highlight}>profils</span>
        </Banner>
      </div>
      <Slogan />
      <div className={styles.bannerSecond}>
        <h2 className={styles.title}>Devenez un expert en {skill}</h2>
      </div>

      {/* Card Users */}
      <div className={styles.cardGrid}>
        {users.map(user => (
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure excepturi odit deleniti pariatur commodi perferendis veritatis, a culpa, nostrum tempore minus quidem, iste expedita animi qui inventore beatae ut eaque.</p>
          </div>
        ))}
      </div>
    </main>
  )
}
