import CardGrid from "../components/cardGrid/CardGrid";
import FAQ from "../components/faq/FAQ";
import HeroSection from "../components/heroSection/HeroSection";
import User from "../components/user/User";
import CommunityBanner from "../components/communityBanner/CommunityBanner";
import ExchangeBanner from "../components/exchangeBanner/ExchangeBanner";
import Intro from "../components/intro/Intro";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Intro />
      <CardGrid />
      <ExchangeBanner />
      <User />
      <CommunityBanner />
      <FAQ />
    </>
  );
}
