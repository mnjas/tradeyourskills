"use client"
import React, { useState } from "react";
import styles from "./FAQ.module.scss";

const questions = [
  { question: "Lorem ipsum dolor si amet ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper vel nisl nec hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Lorem ipsum dolor si amet ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper vel nisl nec hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Lorem ipsum dolor si amet ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper vel nisl nec hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Lorem ipsum dolor si amet ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper vel nisl nec hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Lorem ipsum dolor si amet ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper vel nisl nec hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Lorem ipsum dolor si amet ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper vel nisl nec hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
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
