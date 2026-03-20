import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { ContactHero } from "@/components/ContactHero";
import { getContactPageSchema } from "@/lib/jsonld";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Elite Eats. Whether you're a professional sports team or a food vendor, we'd love to hear from you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Elite Eats",
    description:
      "Reach out to learn how Elite Eats can streamline your team's catering.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getContactPageSchema()),
        }}
      />
    </>
  );
}
