import { Navbar, Footer } from "@/components";
import { GettingStartedHero } from "@/components/GettingStartedHero";
import { AudienceFeatures, type FeatureCard } from "@/components/AudienceFeatures";

const teamFeatures: FeatureCard[] = [
  {
    title: "Trusted Partners",
    description:
      "Only elite, team referred fueling partners with athlete catering experience.",
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
      "After $10,000 spent (subtotal) receive $100 gift card (MC, Lululemon or Amazon).",
    image: "/images/getting-started/team-4_rewards.jpg",
  },
  {
    title: "Nationwide",
    description:
      "500 vendor locations across all sport league cities",
    image: "/images/getting-started/team-5_nationwide.jpg",
  },
];

const vendorFeatures: FeatureCard[] = [
  {
    title: "Increase Sales",
    description:
      "Team orders are profitable & frequent in nature due to year round events.",
    image: "/images/getting-started/vendor-1_increase-sales.jpg",
  },
  {
    title: "Exclusive List",
    description:
      "Exclusive list of 10-15 invited fueling partners per city for our teams to choose from.",
    image: "/images/getting-started/vendor-2_exclusive-list.jpg",
  },
  {
    title: "Order Support",
    description:
      "Support every step of the way from menu creation to team order assistance.",
    image: "/images/getting-started/vendor-3_order-support.jpg",
  },
  {
    title: "Max Efficiency",
    description:
      "Update orders, communicate, organize & process payment in one place.",
    image: "/images/getting-started/vendor-4_max-efficiency.jpg",
  },
  {
    title: "Credibility",
    description:
      "Feeding elite athletes at the highest level is an honor and privilege.",
    image: "/images/getting-started/vendor-5_credibility.jpg",
  },
]

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
        textAccentColor="text-yellow-green"
        bgAccentColor="bg-yellow-green"
        ctaHref="#"
        features={teamFeatures}
      />
      <AudienceFeatures
        label="For Teams"
        headingBefore="Why"
        headingAccent="Fueling Partners"
        headingAfter="Choose Elite Eats"
        ctaLabel="Create Your Account"
        textAccentColor="text-azure"
        bgAccentColor="bg-azure"
        ctaHref="#"
        features={vendorFeatures}
      />
      <Footer />
    </>
  );
}
