"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "../heroSection/HeroSection.module.scss"

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const competences = [
    "Guitare", "Cuisine", "Informatique", "Chant", "Anglais",
    "PHP", "Javascript", "Judo", "Football", "Tennis",
    "Mathématiques", "Histoire", "Français", "SVT", "Physique-chimie",
  ]

  const filtered = competences.filter((comp) =>
    comp.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={styles.textContainer}>
      <h2 className={styles.title}>Trouvez ce que vous cherchez</h2>
      <h4 className={styles.subtitle}>Recherchez parmi toutes nos compétences</h4>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>

      {searchTerm && (
        <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
          {filtered.length > 0 ? (
            filtered.map((comp, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Link
                  href={`/competence/${encodeURIComponent(comp.toLowerCase())}`}
                  style={{ textDecoration: "none", color: "#0041C2", fontWeight: "bold" }}
                >
                  {comp}
                </Link>
              </li>
            ))
          ) : (
            <li>Aucune compétence trouvée</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default SearchSection
