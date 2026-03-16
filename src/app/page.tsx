"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Navbar,
  Hero,
  TrustBar,
  ValueProposition,
  Testimonials,
  FounderQuote,
  TeamMap,
  Footer,
} from "@/components";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      // ── TrustBar ──
      gsap.from("[data-section='trustbar']", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-section='trustbar']",
          start: "top 85%",
        },
      });

      // ── ValueProposition: staggered cards ──
      gsap.from("[data-section='vp'] .bg-darker-azure", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-section='vp']",
          start: "top 75%",
        },
      });

      // ── Testimonials: header then swiper separately ──
      // Animate children inside the section rather than the wrapper,
      // because the inner <section> has overflow-x-clip which clips
      // content when the outer wrapper is translated.
      const testimonialsSection = mainRef.current?.querySelector(
        "[data-section='testimonials']"
      ) as HTMLElement | null;

      if (testimonialsSection) {
        const testimonialsHeader =
          testimonialsSection.querySelector(".container-section");
        const testimonialsSwiper =
          testimonialsSection.querySelector(".testimonials-swiper");

        if (testimonialsHeader) {
          gsap.from(testimonialsHeader, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: testimonialsSection,
              start: "top 80%",
            },
          });
        }

        if (testimonialsSwiper) {
          gsap.from(testimonialsSwiper, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: testimonialsSection,
              start: "top 75%",
            },
          });
        }
      }

      // ── FounderQuote ──
      gsap.from("[data-section='founder']", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-section='founder']",
          start: "top 80%",
        },
      });

      // Parallax on founder image (desktop only)
      mm.add("(min-width: 768px)", () => {
        const founderImg = mainRef.current?.querySelector(
          "[data-section='founder'] .aspect-square"
        );
        if (founderImg) {
          gsap.to(founderImg, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-section='founder']",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      // ── TeamMap: text and map staggered ──
      const mapSection = mainRef.current?.querySelector(
        "[data-section='teammap']"
      ) as HTMLElement | null;

      if (mapSection) {
        const mapGrid = mapSection.querySelector(".grid");
        if (mapGrid) {
          gsap.from(Array.from(mapGrid.children), {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapSection,
              start: "top 80%",
            },
          });
        }
      }

      // Parallax on map (desktop only)
      mm.add("(min-width: 768px)", () => {
        const mapVisual = mainRef.current?.querySelector(
          "[data-section='teammap'] .grid > :last-child"
        );
        if (mapVisual) {
          gsap.to(mapVisual, {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-section='teammap']",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: mainRef }
  );

  return (
    <>
      <Navbar />
      <Hero />
      <div ref={mainRef}>
        <div data-section="trustbar">
          <TrustBar />
        </div>
        <div data-section="vp">
          <ValueProposition />
        </div>
        <div data-section="testimonials">
          <Testimonials />
        </div>
        <div data-section="founder">
          <FounderQuote />
        </div>
        <div data-section="teammap">
          <TeamMap />
        </div>
      </div>
      <Footer />
    </>
  );
}
