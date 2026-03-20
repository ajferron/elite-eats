"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InstagramProfile from "./InstagramProfile";

gsap.registerPlugin(ScrollTrigger);

interface PressRelease {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
  image: string;
  imageAlt: string;
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
    <a
      href={release.link}
      target="_blank"
      rel="noopener noreferrer"
      className="press-card flex gap-6"
    >
      <div className="relative aspect-[4/3] w-40 shrink-0 overflow-hidden rounded-lg sm:w-48">
        {release.image && (
          <Image
            src={release.image}
            alt={release.imageAlt || release.title}
            fill
            sizes="(max-width: 640px) 160px, 192px"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-display text-xl leading-tight text-foreground sm:text-2xl">
          {release.title}
        </h3>
        <div
          className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-text-secondary prose prose-sm"
          dangerouslySetInnerHTML={{ __html: release.description }}
        />
        <time
          dateTime={release.date}
          className="mt-3 font-sans text-xs tracking-wide text-text-tertiary"
        >
          {formatDate(release.date)}
        </time>
      </div>
    </a>
  );
}

export function PressReleases() {
  const sectionRef = useRef<HTMLElement>(null);
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPressReleases() {
      try {
        const res = await fetch("/api/press");
        const data = await res.json();
        if (data.success) {
          setPressReleases(data.articles);
        }
      } catch (error) {
        console.error("Failed to fetch press releases:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPressReleases();
  }, []);

  useGSAP(
    () => {
      if (loading) return;

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
    { scope: sectionRef, dependencies: [loading] }
  );

  return (
    <section ref={sectionRef} className="py-12 lg:py-20">
      <div className="container-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Press releases list */}
          <div className="flex flex-col gap-10">
            {loading ? (
              <p className="font-sans text-sm text-text-secondary">
                Loading press releases...
              </p>
            ) : pressReleases.length === 0 ? (
              <p className="font-sans text-sm text-text-secondary">
                No press releases available.
              </p>
            ) : (
              pressReleases.map((release) => (
                <PressCard key={release.id} release={release} />
              ))
            )}
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
