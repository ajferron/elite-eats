import { Navbar, Footer } from "@/components";
import { ContactHero } from "@/components/ContactHero";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
}
