import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export function FounderQuote() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-section">
        <div className="grid items-center gap-24 lg:grid-cols-[1fr_auto] lg:gap-32">
          {/* Founder Image — desktop only (in grid) */}
          <div className="hidden lg:order-last lg:flex lg:justify-end">
            <div className="relative aspect-square h-96 w-96 overflow-hidden rounded-full">
              <Image
                src="/images/founder-quote.jpg"
                alt="Jennifer Gibson, Co-founder and CEO of Elite Eats"
                fill
                sizes="384px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <SectionHeader label="Who We Are" heading="Established by an Expert" />

            {/* Founder Image — mobile only (between header and quote) */}
            <div className="relative mt-8 aspect-[4/3] max-h-80 w-full overflow-hidden rounded-2xl lg:hidden">
              <Image
                src="/images/founder-quote.jpg"
                alt="Jennifer Gibson, Co-founder and CEO of Elite Eats"
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>

            <blockquote className="mt-8 font-sans text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
              &ldquo;Coordinating athlete catering was a frustrating aspect of my
              job. I spent hours researching vendors and dealing with inefficient
              communication and ordering. I needed trusted fueling partners to
              execute at an elite level while meeting my team&rsquo;s nutritional
              needs. With many colleagues experiencing the same issues, the idea
              of creating Elite Eats Inc. was born!&rdquo;
            </blockquote>

            <div className="mt-8">
              <p className="font-display text-2xl text-text-primary lg:text-3xl">
                Jennifer Gibson MS, RD, CSSD
              </p>
              <p className="mt-1 font-sans text-base text-text-secondary">
                Co-founder and CEO
              </p>
              <p className="font-sans text-base text-text-secondary">
                Performance Dietitian, 18 Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
