"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function PressHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".press-hero-animate", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="pt-32 pb-0 lg:pt-40">
      <div className="container-section">
        <div className="max-w-3xl">
          <h1 className="press-hero-animate heading-section -tracking-[0.08em] text-foreground">
            Press &amp; Media
          </h1>
          <p className="press-hero-animate mt-4 font-sans text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-relaxed">
            The latest news, milestones, and moments from the Elite Eats team.
          </p>
        </div>

        <hr className="press-hero-animate mt-8 border-stone/20" />
      </div>
    </section>
  );
}
