"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutQuote() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-quote-animate", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-cream py-20 lg:py-28">
      <div className="container-section mx-auto max-w-4xl text-center">
        {/* Decorative opening quote */}
        <div className="about-quote-animate font-accent text-8xl leading-none text-dark-azure/20 lg:text-9xl">
          &ldquo;
        </div>

        <blockquote className="about-quote-animate -mt-6 font-sans text-xl leading-relaxed text-text-primary lg:text-2xl lg:leading-relaxed">
          Coordinating athlete catering was a frustrating aspect of my job. I
          spent hours researching vendors and dealing with inefficient
          communication and ordering. I needed trusted fueling partners to
          execute at an elite level while meeting my team&rsquo;s nutritional
          needs. With many colleagues experiencing the same issues, the idea of
          creating Elite Eats Inc. was born!
        </blockquote>

        {/* Attribution */}
        <div className="about-quote-animate mt-10 flex flex-col items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image
              src="/images/founder-quote.jpg"
              alt="Jennifer Gibson, Co-founder and CEO of Elite Eats"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-xl text-text-primary lg:text-2xl">
              Jennifer Gibson MS, RD, CSSD
            </p>
            <p className="mt-1 font-sans text-base text-text-secondary">
              Co-founder &amp; CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
