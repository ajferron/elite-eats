import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import type { ReactNode } from "react";

const features = [
  {
    id: 1,
    number: "01",
    headline: "The Problem",
    bullets: [
      <>Trusted fueling partners with athlete catering experience are <strong>hard to find and evaluate</strong>.</>,
      <>Placing athlete catering orders is <strong>complicated and time-intensive</strong>.</>,
      <>No online marketplace exists exclusively for the <strong>unique needs of athlete catering</strong>.</>,
    ],
    image: "/images/problem.jpg",
  },
  {
    id: 2,
    number: "02",
    headline: "Our Solution",
    bullets: [
      <><strong>Only vetted &amp; team recommended</strong> fueling partners with athlete catering experience are invited to join the platform.</>,
      <>Our platform <strong>streamlines and organizes</strong> your <strong>ordering, expenses &amp; communication</strong>.</>,
      <><strong>Created by a Sport RD.</strong> Platform is specifically designed for athlete catering.</>,
    ],
    image: "/images/solution.jpg",
  },
];

function LargeFeatureCard({
  feature,
  flipped = false
}: {
  feature: { number: string; headline: string; bullets: ReactNode[]; image: string };
  flipped?: boolean;
}) {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl bg-darker-azure">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-between items-start p-6 lg:p-8">
          <span className="badge-accent px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-charcoal"></span>
            {feature.number}
          </span>
          <div>
            <h3 className="mt-10 font-sans text-3xl font-medium -tracking-[0.08em] text-white lg:text-4xl">
              {feature.headline}
            </h3>
            <ul className="mt-4 space-y-3 text-lg text-white/85">
              {feature.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`relative min-h-[320px] lg:min-h-[400px]${!flipped ? " lg:order-first" : ""}`}>
          <Image
            src={feature.image}
            alt={feature.headline}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function ValueProposition() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-section mb-12 lg:mb-16">
        <SectionHeader
          label="Why Elite Eats"
          heading="The Elite Eats Advantage"
        />
      </div>

      <div className="container-section">
        {/* Feature 1 - Hero Card with dark-azure anchor */}
        <LargeFeatureCard feature={features[0]} flipped/>
        <LargeFeatureCard feature={features[1]} />

        {/* Features 2 & 3 - Two-column cards */}
        {/* <div className="grid gap-6 lg:grid-cols-2">
          <FeatureCard feature={features[2]} />
          <FeatureCard feature={features[3]} />
        </div> */}
      </div>
    </section>
  );
}
