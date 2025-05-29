import CategoryGrid from "../../../components/categoryGrid/CategoryGrid";
import Banner from "../../../components/banner/Banner";
import Slogan from "../../../components/slogan/Slogan";
import bannerStyles from "../../../components/banner/Banner.module.scss";
import styles from "../../skills-list/skills.module.scss";

const mecaniqueSubcategories = [
  {
    title: "Freinage",
    image: "/assets/freinage.png",
    href: "/competence/freinage",
  },
];

export default function MecaniquePage() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner>
          Apprendre la{" "}
          <span className={bannerStyles.highlight}>mecanique ?</span>
        </Banner>
      </div>
      <Slogan />
      <CategoryGrid items={mecaniqueSubcategories} />
    </main>
  );
}
