import { Navbar, Footer } from "@/components";
import { PressHero } from "@/components/PressHero";
import { PressReleases } from "@/components/PressReleases";

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
