"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-hero-animate", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-dark-azure pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="container-section">
        <p className="about-hero-animate label-section text-white/50">About Us</p>
        <h1 className="about-hero-animate mt-4 max-w-4xl heading-section text-white">
          Who We Are
        </h1>
        <p className="about-hero-animate mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/70 lg:text-xl lg:leading-relaxed">
        Elite Eats Inc. is the first online catering marketplace purpose-built for professional sports teams. Our exclusive, invite-only platform connects teams with vetted fueling partners who specialize in athlete-specific catering, ensuring consistent quality, nutritional precision, and operational reliability. Unlike high volume platforms, we focus on quality, partnering only with elite, athlete experienced caterers. Our mix includes top local providers and national restaurant partners; all vetted for performance and reliability.
        </p>
      </div>
    </section>
  );
}
