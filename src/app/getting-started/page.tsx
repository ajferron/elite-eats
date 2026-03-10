import { Navbar, Footer } from "@/components";
import { GettingStartedHero } from "@/components/GettingStartedHero";
import { AudienceFeatures, type FeatureCard } from "@/components/AudienceFeatures";

const teamFeatures: FeatureCard[] = [
  {
    title: "Trusted Partners",
    description:
      "Only elite, team referred fueling partners with athlete catering experience",
    image: "/images/getting-started/team-1_trusted-partners.jpg",
  },
  {
    title: "Max Efficiency",
    description:
      "Plan, communicate, organize & pay for all airline, pre & post game meals in one place.",
    image: "/images/getting-started/team-2_efficiency.jpg",
  },
  {
    title: "RD Designed",
    description:
      "Created & founded by a sport dietitian with input from RDs across all pro leagues!",
    image: "/images/getting-started/team-3_rd-designed.jpg",
  },
  {
    title: "Rewards",
    description:
      "After $10,000 spent (subtotal) receive $100 gift card (MC, Lululemon or Amazon)",
    image: "/images/getting-started/team-4_rewards.jpg",
  },
  {
    title: "Nationwide",
    description:
      "500 vendor locations across all sport league cities",
    image: "/images/getting-started/team-5_nationwide.jpg",
  },
];

export default function GettingStartedPage() {
  return (
    <>
      <Navbar />
      <GettingStartedHero />
      <AudienceFeatures
        label="For Teams"
        headingBefore="Why"
        headingAccent="Teams"
        headingAfter="Choose Elite Eats"
        ctaLabel="Register Your Team"
        ctaHref="#"
        features={teamFeatures}
      />
      <Footer />
    </>
  );
}
