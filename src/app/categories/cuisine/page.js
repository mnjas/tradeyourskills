import CategoryGrid from "../../../components/categoryGrid/CategoryGrid";
import Banner from "../../../components/banner/Banner";
import Slogan from "../../../components/slogan/Slogan";
import bannerStyles from "../../../components/banner/Banner.module.scss";
import styles from "../../skills-list/skills.module.scss";

const cuisineSubcategories = [
  {
    title: "Cuisine française",
    image: "/assets/cuisine-francaise.webp",
    href: "/competence/cuisine-francaise",
  },
  {
    title: "Pâtisserie",
    image: "/assets/patisserie.jpg",
    href: "/competence/patisserie",
  },
  {
    title: "Cuisine asiatique",
    image: "/assets/cuisine-asiatique.jpg",
    href: "/competence/cuisine-asiatique",
  },
  {
    title: "Végétarien / Végan",
    image: "/assets/vegetarien.webp",
    href: "/competence/vegetarien",
  },
  {
    title: "Cuisine italienne",
    image: "/assets/cuisine-italienne.jpg",
    href: "/competence/cuisine-italienne",
  },
  {
    title: "Recettes rapides",
    image: "/assets/recettes-rapides.jpeg",
    href: "/competence/recettes-rapides",
  },
];

export default function CuisinePage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre la <span className={bannerStyles.highlight}>cuisine ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={cuisineSubcategories} />
    </main>
  );
}
