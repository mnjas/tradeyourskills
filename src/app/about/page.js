import styles from "./about.module.scss";
import Teams from "../../components/teams/Teams";
import Banner from "../../components/banner/Banner";
import Slogan from "../../components/slogan/Slogan";
import bannerStyles from "../../components/banner/Banner.module.scss";

export default async function About() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          QUI SOMMES-<span className={bannerStyles.highlight}>NOUS</span> ?
        </Banner>
      </div>
      <Slogan />
      <div className={styles.gridContainer}>
        <div className={styles.leftSection}>
          <h2 className={styles.title}>Une communauté basée sur le partage</h2>
          <p className={styles.subtitle}>
            Chez Trade Your Skills, nous croyons que tout le monde a quelque
            chose à transmettre. Notre mission est de créer un espace où les
            compétences circulent librement, sans barrière financière. Que vous
            sachiez jouer d&rsquo;un instrument, coder, cuisiner ou parler une
            langue étrangère, votre savoir a de la valeur.
            <br />
            <br />
            La plateforme a été pensée pour favoriser les échanges humains,
            l&rsquo;apprentissage collaboratif et la découverte de nouvelles
            passions. Chaque utilisateur devient à la fois enseignant et
            apprenant, dans une logique d&rsquo;entraide et de bienveillance.
            Rejoignez un réseau où la transmission devient un moteur de lien
            social et de développement personnel.
          </p>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.imageContainer}>
            <img src="/assets/image about.png" alt="Illustration" />
          </div>
        </div>
      </div>
      <Teams />
    </main>
  );
}
