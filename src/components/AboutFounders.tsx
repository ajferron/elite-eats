"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "Jennifer Gibson, MS, RD, CSSD",
    title: "Co-Founder & CEO",
    image: "/images/jennifer-gibson.avif",
    credential: "20 Years in Elite Sport",
    summary: (
      <span>
        Jennifer Gibson is an internationally recognized sport
        dietitian with <strong>20 years of experience</strong> in elite sport.
        Currently, Jenn is the Head of Performance Nutrition for the{" "}
        <strong>Chicago Blackhawks</strong>. Prior to this, Jenn spent 7
        seasons as the lead sport dietitian and sport science coordinator for
        the <strong>Chicago Bears Football Club</strong>. Between 2006-2015 she
        was a senior sport dietitian and applied physiologist with the{" "}
        <strong>United States Olympic Committee</strong> and within the{" "}
        <strong>Canadian Olympic</strong> sport system.
      </span>
    ),
    bio: [
      <p>
        Her consulting work has included the{" "}
        <strong>
          New Orleans Saints, Colorado Rapids MLS, Vancouver Whitecaps MLS,
          Women’s Tennis Association Pro Tour
        </strong>{" "}
        and within the <strong>NBA</strong>. She has traveled to over 20
        countries to service her athletes including 2 Olympic Games (2010,
        2012), 2 Pan American Games (2007, 2011), 1 Canada Winter Games (2007),
        6 world championships, and hundreds of professional tournaments/games.
      </p>,
      <p>
        Gibson serves as an associate teaching professor for the{" "}
        <strong>University of Colorado – Colorado Springs</strong>, and is
        active in research, having published 9 peer reviewed scientific papers
        and 7 book contributions.
      </p>,
      <p>
        Gibson completed her{" "}
        <strong>Bachelors of Science degree in Nutrition</strong> at Toronto
        Metropolitain University and her{" "}
        <strong>dietetic education</strong> at the University Health Network in
        Canada. Her masters in Exercise Science was completed at the University
        of Victoria. She is a distinguished graduate of the{" "}
        <strong>International Olympic Committee Diploma in Sport Nutrition</strong> and a{" "}
        <strong>Level III certified anthropometrist (ISAK)</strong>. Jennifer is
        also a{" "}
        <strong>Board Certified Specialist in Sport Dietetics (CSSD)</strong>{" "}
        with the American Academy of Dietetics and Nutrition.
      </p>,
    ],
  },
  {
    name: "Stephanie Pace, BS",
    title: "Co-Founder & COO",
    image: "/images/stephanie-pace.avif",
    credential: "16 Years in Sales & Marketing",
    summary: (
      <span>
        Stephanie Pace has spent 16 years in sales and
        marketing in the medical device industry and brings her extensive
        business background and acumen to the Elite Eats Inc. team. She spent
        the bulk of her career working for{" "}
        <strong>W. L. Gore and Associates</strong> as a{" "}
        <strong>Cardiac and Vascular Clinical Sales Specialist</strong> where
        she worked directly with Cardiologists and Surgeons in the operating
        rooms.
      </span>
    ),
    bio: [
      <p>
        In addition to her territory responsibilities, Stephanie also spent
        multiple years as a <strong>Field Sales Trainer</strong> and helped to
        train new sales representatives on both clinical and sales techniques.
        The <strong>Gulf Coast Vascular Conference</strong> and the{" "}
        <strong>LSU Surgical Vascular Bootcamp</strong> are a few of the
        medical meetings that Stephanie took the lead on coordinating and
        marketing alongside industry representatives. Stephanie has won{" "}
        <strong>numerous sales achievement awards</strong> throughout her
        career with both start up and Fortune 500 companies. They have
        included:
      </p>,
      <ul className="list-disc pl-5">
        <li>
          <strong>Sigma Diagnostics</strong> Top Capital Equipment Sales Award
        </li>
        <li>
          <strong>Diomed Inc</strong> Two year- Top Sales Rep Award, Two year-
          Presidents Club Award, Top Laser Sales, and Multiple Quarterly Contest
          Award Winner
        </li>
        <li>
          <strong>W. L. Gore and Associates</strong> Summit Club Award for
          Stroke and Cardiac Interventions and Sales Excellence Award
        </li>
      </ul>,
      <p>
        Stephanie received her <strong>Bachelors of Science Degree in Chemistry</strong> with a
        <strong>Minor in Business</strong> from <strong>Eastern Illinois University</strong>. In her spare time,
        she is an <strong>avid equestrian athlete</strong> competing in the sport of Dressage
        with her horse Totoro.
      </p>,
    ],
  },
];

function FounderCard({
  founder,
  index,
}: {
  founder: (typeof founders)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`founder-card`}>
      {/* Photo */}
      <div className="relative aspect-[3/4] w-full max-h-[480px] overflow-hidden rounded-2xl">
        <Image
          src={founder.image}
          alt={`${founder.name}, ${founder.title} of Elite Eats`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 40vw"
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-6">
        <span className="badge-accent">{founder.credential}</span>
        <h3 className="mt-4 font-display text-2xl text-text-primary lg:text-3xl">
          {founder.name}
        </h3>
        <p className="mt-1 font-sans text-base text-text-secondary">
          {founder.title}
        </p>

        <p className="mt-4 font-sans text-base leading-relaxed text-text-secondary">
          {founder.summary}
        </p>

        {/* Expandable bio */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            expanded
              ? "mt-4 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-3">
              {founder.bio.map((content, i) => (
                <div
                  key={i}
                  className="font-sans text-base leading-relaxed text-text-secondary"
                >
                  {content}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 font-sans text-sm font-medium text-dark-azure transition-colors hover:text-azure"
        >
          {expanded ? "Show Less" : "Read Full Bio"}
        </button>
      </div>
    </article>
  );
}

export function AboutFounders() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".founder-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
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
    <section ref={sectionRef} className="bg-background py-20 lg:py-28">
      <div className="container-section">
        <SectionHeader label="Leadership" heading="Meet Our Founders" />

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:mt-16 lg:gap-16">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
