import { Navbar, Hero, TrustBar, ValueProposition, HowItWorks, Testimonials, TeamMap, CTA, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <ValueProposition />
      <Testimonials />
      <TeamMap />
      <HowItWorks />
      {/* <CTA /> */}
      <Footer />
    </>
  );
}
