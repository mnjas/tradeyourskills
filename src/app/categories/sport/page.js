import CategoryGrid from "../../../components/categoryGrid/CategoryGrid";
import Banner from "../../../components/banner/Banner";
import Slogan from "../../../components/slogan/Slogan";
import bannerStyles from "../../../components/banner/Banner.module.scss";
import styles from "../../skills-list/skills.module.scss";

const sportSubcategories = [
  {
    title: "Judo",
    image: "/assets/judo.jpg",
    href: "/competence/judo",
  },
  {
    title: "Football",
    image: "/assets/football.jpg",
    href: "/competence/football",
  },
  {
    title: "Tennis",
    image: "/assets/tennis.jpg",
    href: "/competence/tennis",
  },
];

export default function SportPage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre un <span className={bannerStyles.highlight}>sport ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={sportSubcategories} />
    </main>
  );
}
