"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar, Footer } from "@/components";
import { GettingStartedHero } from "@/components/GettingStartedHero";
import { AudienceFeatures, type FeatureCard } from "@/components/AudienceFeatures";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
      "870 fueling partners across all sport league cities",
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
];

export default function GettingStartedPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      // ── Hero: above-fold entrance (no ScrollTrigger) ──
      const heroSection = pageRef.current?.querySelector(
        "[data-section='hero']"
      );
      if (heroSection) {
        const heroH1 = heroSection.querySelector("h1");
        const heroButtons = heroSection.querySelector(
          ".flex.flex-wrap"
        );

        const heroTargets = [heroH1, heroButtons].filter(Boolean);
        if (heroTargets.length) {
          gsap.from(heroTargets, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.2,
          });
        }
      }

      // ── Teams section: header then swiper carousel ──
      // Note: we animate the whole .features-swiper container rather than
      // individual .features-slide elements to avoid conflicts with Swiper's
      // internal layout transforms (which cause a blink/jump on init).
      const teamsSection = pageRef.current?.querySelector(
        "[data-section='teams']"
      ) as HTMLElement | null;

      if (teamsSection) {
        const teamsHeader = teamsSection.querySelector(".container-section");
        const teamsSwiper = teamsSection.querySelector(".features-swiper");

        if (teamsHeader) {
          gsap.from(teamsHeader, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: teamsSection,
              start: "top 80%",
            },
          });
        }

        if (teamsSwiper) {
          gsap.from(teamsSwiper, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: teamsSection,
              start: "top 75%",
            },
          });
        }
      }

      // ── Fueling Partners section: header then swiper carousel ──
      const vendorSection = pageRef.current?.querySelector(
        "[data-section='vendors']"
      ) as HTMLElement | null;

      if (vendorSection) {
        const vendorHeader = vendorSection.querySelector(".container-section");
        const vendorSwiper = vendorSection.querySelector(".features-swiper");

        if (vendorHeader) {
          gsap.from(vendorHeader, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: vendorSection,
              start: "top 80%",
            },
          });
        }

        if (vendorSwiper) {
          gsap.from(vendorSwiper, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: vendorSection,
              start: "top 75%",
            },
          });
        }
      }
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef}>
      <Navbar />
      <div data-section="hero">
        <GettingStartedHero />
      </div>
      <div data-section="teams" id="teams">
        <AudienceFeatures
          label="For Teams"
          headingBefore="Why"
          headingAccent="Teams"
          headingAfter="Choose Elite Eats"
          ctaLabel="Register Your Team"
          textAccentColor="text-yellow-green"
          bgAccentColor="bg-yellow-green"
          ctaHref="https://eliteeatsinc.com/team-main"
          features={teamFeatures}
        />
      </div>
      <div data-section="vendors" id="fueling-partners">
        <AudienceFeatures
          label="For Teams"
          headingBefore="Why"
          headingAccent="Fueling Partners"
          headingAfter="Choose Elite Eats"
          ctaLabel="Create Your Account"
          textAccentColor="text-azure"
          bgAccentColor="bg-azure hover:bg-azure/90 hover:shadow-azure/25"
          ctaHref="https://eliteeatsinc.com/vendor-main"
          features={vendorFeatures}
        />
      </div>
      <Footer />
    </div>
  );
}
