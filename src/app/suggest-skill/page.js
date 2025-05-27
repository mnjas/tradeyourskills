"use client"

import { useState } from "react"
import styles from "./suggestSkill.module.scss"
import Banner from '../../components/banner/Banner'
import Slogan from '../../components/slogan/Slogan'
import bannerStyles from '../../components/banner/Banner.module.scss'


export default function SuggestSkillPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSubmitted(false)

    const res = await fetch("/api/suggest-skill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, description })
    })

    if (res.ok) {
      setSubmitted(true)
      setTitle("")
      setDescription("")
    } else {
      const data = await res.json()
      setError(data?.error || "Erreur lors de l'envoi")
    }
  }

  return (
    <>
      <div className={styles.banner}>
        <Banner>
          Proposer une <span className={bannerStyles.highlight}>competence</span>
        </Banner>
      </div>
      <Slogan />
      <div className={styles.container}>
        <h1>Fais nous ta proposition !</h1>

        {submitted ? (
          <p className={styles.success}>✅ Merci ! Votre proposition a été envoyée.</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Nom de la compétence"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Description de la compétence ou pourquoi elle serait utile"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit">Envoyer la suggestion</button>
          </form>
        )}
      </div>
    </>
  )
}
