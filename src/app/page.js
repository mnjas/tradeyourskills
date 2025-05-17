import Article from "../components/article/Article"
import CardGrid from "../components/cardGrid/CardGrid"
import FAQ from "../components/faq/FAQ"
import HeroSection from "../components/heroSection/HeroSection"
import Rectangle from "../components/rectangle/Rectangle"
import RectangleCeo from "../components/rectangleCeo/RectangleCeo"
import User from "../components/user/User"

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Article />
      <CardGrid />
      <Rectangle />
      <User />
      <RectangleCeo />
      <FAQ />
    </>
  )
}
