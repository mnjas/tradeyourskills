import CategoryGrid from "../../../components/categoryGrid/CategoryGrid";
import Banner from "../../../components/banner/Banner";
import Slogan from "../../../components/slogan/Slogan";
import bannerStyles from "../../../components/banner/Banner.module.scss";
import styles from "../../skills-list/skills.module.scss";

const languesSubcategories = [
  {
    title: "Anglais",
    image: "/assets/usa.png",
    href: "/competence/anglais",
  },
  {
    title: "Italien",
    image: "/assets/italie.png",
    href: "/competence/italien",
  },
];

export default function LanguesPage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre une <span className={bannerStyles.highlight}>langue ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={languesSubcategories} />
    </main>
  );
}
