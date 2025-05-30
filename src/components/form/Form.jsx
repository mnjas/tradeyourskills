"use client";
import Link from "next/link";
import styles from "../../styles/auth.module.scss";
import button from "../../styles/buttons.module.scss";

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
  description,
  setDescription,
  error,
  submitLabel,
}) {
  return (
    <div className={styles.formContainer}>
      <h2>{title}</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        {setName && (
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Prénom"
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
            <label>Compétence à transmettre</label>
            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              required
            >
              <option value="">Sélectionner une compétence</option>
              <option value="guitare">Guitare</option>
              <option value="piano">Piano</option>
              <option value="batterie">Batterie</option>
              <option value="violon">Violon</option>
              <option value="accordeon">Accordéon</option>
              <option value="clarinette">Clarinette</option>
              <option value="flute">Flûte</option>
              <option value="saxophone">Saxophone</option>
              <option value="clavecin">Clavecin</option>
              <option value="anglais">Anglais</option>
              <option value="italien">Italien</option>
              <option value="dessin">Dessin</option>
              <option value="peinture">Peinture</option>
              <option value="graffiti">Graffiti</option>
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
              <option value="cepage">Cépage</option>
              <option value="vinification">Vinification</option>
              <option value="domotique">Domotique</option>
              <option value="electricite">Éléctricité</option>
              <option value="improvisation">Improvisation</option>
              <option value="desembouage">Désembouage</option>
              <option value="freinage">Freinage</option>
              <option value="cuisine-francaise">Cuisine francaise</option>
              <option value="cuisine-italienne">Cuisine italienne</option>
              <option value="cuisine-asiatique">Cuisine asiatique</option>
              <option value="recette-rapide">Recette rapide</option>
            </select>
          </div>
        )}

        {/* Compétence d'intérêt */}
        {setInterest && interest !== undefined && (
          <div className={styles.inputGroup}>
            <label>Compétence qui m&rsquo;intéresse</label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
            >
              <option value="">
                Sélectionner une compétence d&rsquo;intérêt
              </option>
              <option value="guitare">Guitare</option>
              <option value="piano">Piano</option>
              <option value="batterie">Batterie</option>
              <option value="violon">Violon</option>
              <option value="accordeon">Accordéon</option>
              <option value="clarinette">Clarinette</option>
              <option value="flute">Flûte</option>
              <option value="saxophone">Saxophone</option>
              <option value="clavecin">Clavecin</option>
              <option value="anglais">Anglais</option>
              <option value="italien">Italien</option>
              <option value="dessin">Dessin</option>
              <option value="peinture">Peinture</option>
              <option value="graffiti">Graffiti</option>
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
              <option value="cepage">Cépage</option>
              <option value="vinification">Vinification</option>
              <option value="domotique">Domotique</option>
              <option value="electricite">Éléctricité</option>
              <option value="improvisation">Improvisation</option>
              <option value="desembouage">Désembouage</option>
              <option value="freinage">Freinage</option>
              <option value="cuisine-francaise">Cuisine francaise</option>
              <option value="cuisine-italienne">Cuisine italienne</option>
              <option value="cuisine-asiatique">Cuisine asiatique</option>
              <option value="recette-rapide">Recette rapide</option>
            </select>
          </div>
        )}

        {error && <p className={styles.error}>{error}</p>}

        {setDescription && description !== undefined && (
          <div className={styles.inputGroup}>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Décrivez-vous"
              rows={4}
              required
            />
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          {submitLabel}
        </button>

        {!setName && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <p>Pas encore de compte ?</p>
            <Link href="/register" className={button.authButton}>
              S&rsquo;inscrire
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}
