'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './Slogan.module.scss'

const competences = [
  "Guitare", "Cuisine", "Informatique", "Chant", "Anglais",
  "PHP", "Javascript", "Judo", "Football", "Tennis",
  "Mathématiques", "Histoire", "Français", "SVT", "Physique-chimie",
]

const Slogan = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const filtered = competences.filter((comp) =>
    comp.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim() !== '') {
      router.push(`/competence/${encodeURIComponent(searchTerm.toLowerCase())}`)
    }
  }

  return (
    <div className={styles.slogan}>
      <h2 className={styles.actions}>Apprendre, partager, recommencer</h2>
      <p className={styles.subtitle}>Plateforme de partage de compétences</p>

      <form onSubmit={handleSearch} style={{ position: 'relative' }}>
        <input
          type="text"
          className={styles.searchHint}
          placeholder="Rechercher une compétence... 🔍"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />

        {searchTerm && (
          <ul className={styles.suggestionsList}>
            {filtered.length > 0 ? (
              filtered.map((comp, index) => (
                <li key={index}>
                  <Link
                    href={`/competence/${encodeURIComponent(comp.toLowerCase())}`}
                    onClick={() => setSearchTerm('')}
                    className={styles.suggestionItem}
                  >
                    {comp}
                  </Link>
                </li>
              ))
            ) : (
              <li className={styles.noResult}>Aucune compétence trouvée</li>
            )}
          </ul>
        )}
      </form>
    </div>
  )
}

export default Slogan
