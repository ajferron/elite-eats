"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Avery Ferron",
    title: "Marketing and Operations Manager",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Jeff Cummings",
    title: "Senior Software Developer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Chris A. Meeks",
    title: "Legal Counsel",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export function AboutTeam() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".team-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-surface-sage py-20 lg:py-28">
      <div className="container-section">
        <SectionHeader label="Our Team" heading="The People Behind Elite Eats" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              {/* Placeholder photo — replace with real image */}
              <div
                className="aspect-square w-full rounded-2xl bg-dark-azure/10"
                role="img"
                aria-label={`Photo of ${member.name} — coming soon`}
              />
              <div className="mt-5">
                <h3 className="font-display text-xl text-text-primary lg:text-2xl">
                  {member.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-text-secondary">
                  {member.title}
                </p>
                <p className="mt-3 font-sans text-base leading-relaxed text-text-secondary">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
