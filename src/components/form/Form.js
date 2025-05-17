"use client"
import styles from "../../styles/auth.module.scss"

export default function Form({
  title,
  onSubmit,
  name,
  setName,
  skill,
  setSkill,
  interest,
  setInterest,
  email,
  setEmail,
  password,
  setPassword,
  city,
  setCity,
  phone,
  setPhone,
  error,
  submitLabel
}) {
  return (
    <div className={styles.formContainer}>
      <h2>{title}</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        {setName && (
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className={styles.inputGroup}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
          />
        </div>

        {setCity && city !== undefined && (
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ville"
              required
            />
          </div>
        )}

        {setPhone && phone !== undefined && (
          <div className={styles.inputGroup}>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Numéro de téléphone"
              pattern="[0-9]{10}"
              required
            />
          </div>
        )}

        {setSkill && skill !== undefined && (
          <div className={styles.inputGroup}>
            <label>Compétence</label>
            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              required
            >
              <option value="">Sélectionner une compétence</option>
              <option value="guitare">Guitare</option>
              <option value="anglais">Anglais</option>
              <option value="php">PHP</option>
              <option value="javascript">Javascript</option>
              <option value="judo">Judo</option>
              <option value="football">Football</option>
              <option value="tennis">Tennis</option>
              <option value="maths">Mathématiques</option>
              <option value="histoire">Histoire</option>
              <option value="francais">Francais</option>
              <option value="svt">SVT</option>
              <option value="physique">Physique-chimie</option>
            </select>
          </div>
        )}

        {/* Compétence d'intérêt */}
        {setInterest && interest !== undefined && (
          <div className={styles.inputGroup}>
            <label>Compétence qui m'intéresse</label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
            >
              <option value="">Sélectionner une compétence d'intérêt</option>
              <option value="guitare">Guitare</option>
              <option value="anglais">Anglais</option>
              <option value="php">PHP</option>
              <option value="javascript">Javascript</option>
              <option value="judo">Judo</option>
              <option value="football">Football</option>
              <option value="tennis">Tennis</option>
              <option value="maths">Mathématiques</option>
              <option value="histoire">Histoire</option>
              <option value="francais">Francais</option>
              <option value="svt">SVT</option>
              <option value="physique">Physique-chimie</option>
            </select>
          </div>
        )}

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitButton}>
          {submitLabel}
        </button>
      </form>
    </div>
  )
}
