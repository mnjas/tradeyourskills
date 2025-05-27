"use client"
import { useState } from "react"
import styles from "../../app/contact/contact.module.scss"

export default function ContactForm({ data }) {
  const [isSend, setIsSend] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSending) {
      return
    }
    setIsSending(true)
  }
  return (
    <div className={styles.gridContainer}>
      <div className={styles.contactForm}>
        {isSend ? (
          <h2 className={styles.contactFormTitle}>Votre message a ete envoye avec succes!</h2>
        ) : (
          <>
            <h2 className={styles.contactFormTitle}>Vos coordonnees</h2>

            <form
              onSubmit={handleSubmit}
              method="POST"
              className={styles.centeredForm}
            >
              <div className={styles.formRow}>
                <div className={styles.formGroupNameFirstName}>
                  <label htmlFor="name">NOM*</label>
                  <input
                    type="text"
                    id="name"
                    name="lastname"
                    required
                  />
                </div>
                <div className={styles.formGroupNameFirstName}>
                  <label htmlFor="firstName">PRÉNOM*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstname"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroupFonctionSociety}>
                  <label htmlFor="function">LOREM*</label>
                  <input
                    type="text"
                    id="function"
                    name="job"
                  />
                </div>
                <div className={styles.formGroupFonctionSociety}>
                  <label htmlFor="company">LOREM*</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                  />
                </div>
              </div>
              <label htmlFor="message" className={styles.contactFormTitle}>
                Votre message
              </label>
              <div className={styles.textareaGroup}>
                <label htmlFor="sujet">SUJET*</label>
                <textarea
                  id="message"
                  name="message"
                  cols="40"
                  rows="10"
                  maxLength="2000"
                  required
                ></textarea>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroupPhoneOrEmail}>
                  <label htmlFor="contact">Ajoutez votre numéro de téléphone ou votre e-mail pour être contacté*</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                  />
                </div>
              </div>

              <div className={styles.submitGroup}>
                <button type="submit" className={styles.btn}>
                  Envoyer
                </button>
                <p className={styles.requiredField}>*Champs obligatoires</p>
              </div>
            </form>
          </>
        )}

        <div className={styles.disclaimer}>
          Les données à caractère personnel collectées dans le présent formulaire sont traitées par Trade Your Skills, responsable du traitement, afin de répondre à vos questions, demandes d&rsquo;informations et réclamations. Dans la mesure permise par la loi, vous bénéficiez d&rsquo;un droit d&rsquo;accès, de rectification, d&rsquo;effacement et de portabilité des données à caractère personnel vous concernant. Vous disposez également d&rsquo;un droit de limitation et d&rsquo;opposition au traitement de vos données, ainsi que la possibilité de nous faire part de vos instructions concernant l&rsquo;utilisation de vos données après votre décès. Vous pouvez exercer vos droits en écrivant à privacy@tradeyourskills.com. Enfin, vous pouvez également introduire une réclamation auprès de la CNIL si vous n&rsquo;étiez pas satisfait des réponses à vos demandes. Pour plus d&rsquo;information concernant nos pratiques en matière de protection des données, voir notre politique de protection des données/de confidentialité .
        </div>

        <hr className={styles.horizontalLine} />
        <h2 className={styles.coordinatesTitle}>NOS COORDONNEES</h2>
        <div className={styles.coordinates}>
          <div className={styles.column}>
            <p>
              Trade Your Skills est basé à Paris, mais notre communauté s&rsquo;étend à travers toute la France. Que vous ayez une question, une remarque ou une demande spécifique, nous sommes à votre écoute et nous engageons à vous répondre rapidement.
            </p>
          </div>
          <div className={styles.column}>
            <p>
              Notre équipe est disponible du lundi au vendredi de 9h à 18h. Vous pouvez nous joindre par e-mail ou via le formulaire ci-dessus. Chaque message compte pour nous : n&rsquo;hésitez pas à nous contacter !
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
