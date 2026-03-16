"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InstagramProfile from "./InstagramProfile";

gsap.registerPlugin(ScrollTrigger);

// Mock data — will be replaced with Wix CMS fetch
const pressReleases: PressRelease[] = [
  {
    id: "1",
    title: "Partnership with sweetgreen",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2026-01-09",
    image: "/images/getting-started/team-1_trusted-partners.jpg",
    href: "#",
  },
  {
    id: "2",
    title: "Elite Eats in Major League Soccer",
    summary:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2026-01-22",
    image: "/images/getting-started/team-2_efficiency.jpg",
    href: "#",
  },
  {
    id: "3",
    title: "Why Teams Love Our Vendors",
    summary:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.",
    date: "2026-02-03",
    image: "/images/getting-started/team-3_rd-designed.jpg",
    href: "#",
  },
];

interface PressRelease {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  href: string;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PressCard({ release }: { release: PressRelease }) {
  return (
    <article className="press-card flex gap-6">
      <a
        href={release.href}
        className="relative aspect-[4/3] w-40 shrink-0 overflow-hidden rounded-lg sm:w-48"
      >
        <Image
          src={release.image}
          alt={release.title}
          fill
          sizes="(max-width: 640px) 160px, 192px"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </a>
      <div className="flex flex-col justify-center">
        <a href={release.href}>
          <h3 className="font-display text-lg leading-tight text-foreground transition-colors hover:text-dark-azure sm:text-xl">
            {release.title}
          </h3>
        </a>
        <p className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-text-secondary">
          {release.summary}
        </p>
        <time
          dateTime={release.date}
          className="mt-3 font-sans text-xs tracking-wide text-text-tertiary"
        >
          {formatDate(release.date)}
        </time>
      </div>
    </article>
  );
}

export function PressReleases() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".press-card", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".press-instagram", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
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
    <section ref={sectionRef} className="py-12 lg:py-20">
      <div className="container-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Press releases list */}
          <div className="flex flex-col gap-10">
            {pressReleases.map((release) => (
              <PressCard key={release.id} release={release} />
            ))}
          </div>

          {/* Instagram profile embed */}
          <div className="press-instagram flex justify-center lg:justify-end">
            <InstagramProfile />
          </div>
        </div>
      </div>
    </section>
  );
}
