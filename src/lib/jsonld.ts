import { SOCIAL_LINKEDIN, SOCIAL_INSTAGRAM } from "./urls";

const BASE_URL = "https://elite-eats.com";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elite Eats",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Sports nutrition catering marketplace connecting professional sports teams with vetted fueling partners.",
    founder: {
      "@type": "Person",
      name: "Jennifer Gibson",
      jobTitle: "Founder & CEO",
      description: "MS, RD, CSSD — Performance dietitian with 20 years of experience",
    },
    sameAs: [SOCIAL_LINKEDIN, SOCIAL_INSTAGRAM],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Elite Eats",
    url: BASE_URL,
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Elite Eats",
    url: `${BASE_URL}/about`,
    description:
      "Meet the team behind Elite Eats — the sports nutrition catering marketplace for professional sports teams.",
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Elite Eats",
    url: `${BASE_URL}/contact`,
    description:
      "Get in touch with Elite Eats for questions about our sports nutrition catering marketplace.",
  };
}
