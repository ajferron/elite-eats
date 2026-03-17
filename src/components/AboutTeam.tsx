"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Avery Ferron",
    title: "Marketing and Operations Manager",
    bio: "Canadian-born and now living in Toronto, Avery graduated from Mount St. Mary's University with a BA in Communication and competed as a Division I track athlete. Her experience as an athlete fuels her passion for working in the sports world, while her creativity drives her love for marketing.",
    imageSrc: "/images/avery.avif",
  },
  {
    name: "Jeff Cummings",
    title: "Senior Software Developer",
    bio: "With Elite Eats since day one, Jeff oversees all software development and engineering. He brings more than 35 years of experience, with a specialization in sports technology platforms, including work with Kinduct and United States Soccer Federation. When Jeff isn't writing code, you can find him cruising the streets of Halifax on his motorbike.",
    imageSrc: "/images/jeff.avif",
  },
  {
    name: "Chris A. Meeks",
    title: "Legal Counsel",
    bio: "Chris is a native of New Orleans and a graduate of the Paul M. Hebert Law Center at Louisiana State University, where he earned his Juris Doctor and a Graduate Diploma in Comparative Law. He is an experienced attorney in commercial and construction litigation and, through his marriage to a sport dietitian, has a strong understanding of the sport catering landscape.",
    imageSrc: "/images/chris.avif",
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
          {team.map((member, index) => (
            <article key={member.name} className="team-card">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-dark-azure/10">
                <Image
                  src={member.imageSrc}
                  alt={`Photo of ${member.name}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
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
