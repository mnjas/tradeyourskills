"use client"
import React, { useState } from "react";
import styles from "./FAQ.module.scss";

const questions = [
  {
    question: "Comment fonctionne l’échange de compétences ?",
    answer: "Chaque utilisateur propose une compétence qu’il souhaite partager, et peut en apprendre une autre en retour. L’échange est basé sur le temps, pas sur l’argent.",
  },
  {
    question: "Est-ce que la plateforme est gratuite ?",
    answer: "Oui, l’inscription et l’utilisation de la plateforme sont entièrement gratuites. L’échange repose sur le partage de savoirs, sans transaction financière.",
  },
  {
    question: "Comment trouver une compétence qui m'intéresse ?",
    answer: "Vous pouvez utiliser la barre de recherche ou parcourir les catégories pour découvrir les compétences proposées par les membres.",
  },
  {
    question: "Puis-je enseigner plusieurs compétences ?",
    answer: "Absolument ! Vous pouvez proposer autant de compétences que vous le souhaitez. Cela augmentera vos chances d’échanger.",
  },
  {
    question: "Qui peut s’inscrire sur la plateforme ?",
    answer: "Toute personne majeure, curieuse d’apprendre ou de partager une compétence. Aucun prérequis n’est nécessaire.",
  },
  {
    question: "Comment contacter un autre membre ?",
    answer: "Une fois connecté, vous pouvez accéder au profil des membres et envoyer une demande d’échange depuis leur fiche.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Questions Fréquentes</h2>
        <p className={styles.subtitle}>Retrouvez ici les réponses aux questions les plus courantes.</p>
      </div>

      {/* FAQ */}
      <div className={styles.rightSection}>
        {questions.map((item, index) => (
          <div key={index} className={styles.questionBlock}>
            <div className={styles.question} onClick={() => toggleAnswer(index)}>
              {item.question}
              <span className={styles.icon}>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && <div className={styles.answer}>{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
