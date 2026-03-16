import { Navbar, Footer } from "@/components";
import { AboutHero } from "@/components/AboutHero";
import { FounderQuote } from "@/components/FounderQuote";
import { AboutFounders } from "@/components/AboutFounders";
import { AboutTeam } from "@/components/AboutTeam";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      {/* <AboutQuote /> */}
      <FounderQuote dark hideSectionHeader />
      <AboutFounders />
      <AboutTeam />
      <Footer />
    </>
  );
}
