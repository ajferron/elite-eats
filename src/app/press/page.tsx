import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { PressHero } from "@/components/PressHero";
import { PressReleases } from "@/components/PressReleases";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Elite Eats press releases and media coverage. Stay up to date on the latest news from the sports nutrition catering marketplace.",
  alternates: { canonical: "/press" },
  openGraph: {
    title: "Elite Eats Press & Media",
    description: "News and press releases from Elite Eats.",
    url: "/press",
  },
};

export default function PressPage() {
  return (
    <>
      <Navbar />
      <PressHero />
      <PressReleases />
      <Footer />
    </>
  );
}
