import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { AboutHero } from "@/components/AboutHero";
import { getAboutPageSchema } from "@/lib/jsonld";
import { FounderQuote } from "@/components/FounderQuote";
import { AboutFounders } from "@/components/AboutFounders";
import { AboutTeam } from "@/components/AboutTeam";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Elite Eats — founded by Jennifer Gibson, MS, RD, CSSD, a performance dietitian with 20 years of experience fueling professional athletes.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Elite Eats",
    description:
      "Founded by a performance dietitian, Elite Eats is the trusted catering marketplace for professional sports teams.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <FounderQuote dark hideSectionHeader />
      <AboutFounders />
      <AboutTeam />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAboutPageSchema()),
        }}
      />
    </>
  );
}
