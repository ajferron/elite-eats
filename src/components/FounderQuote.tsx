import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

interface FounderQuoteProps {
  readonly dark?: boolean;
  readonly hideSectionHeader?: boolean;
}

export function FounderQuote({ dark = false, hideSectionHeader = false }: FounderQuoteProps) {
  return (
    <section className={dark ? "bg-charcoal py-20 lg:py-28" : "bg-cream py-20 lg:py-28"}>
      <div className="container-section">
        <div className="grid items-center gap-24 lg:grid-cols-[1fr_auto] lg:gap-32">
          {/* Founder Image — desktop only (in grid) */}
          <div className="hidden lg:order-last lg:flex lg:justify-end">
            <div className="relative aspect-square h-81 w-81 overflow-hidden rounded-2xl">
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
            {!hideSectionHeader && (
              <SectionHeader
                label="Who We Are"
                heading="Established by an Expert"
                headingColor={dark ? "text-white" : "text-text-primary"}
                labelColor={dark ? "text-white/70" : "text-text-tertiary"}
              />
            )}

            {/* Founder Image — mobile only (between header and quote) */}
            <div
              className={`relative aspect-[4/3] max-h-80 w-full overflow-hidden rounded-2xl lg:hidden ${
                hideSectionHeader ? "mt-0" : "mt-8"
              }`}
            >
              <Image
                src="/images/founder-quote.jpg"
                alt="Jennifer Gibson, Co-founder and CEO of Elite Eats"
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>

            <blockquote
              className={`font-sans text-lg leading-relaxed lg:text-xl lg:leading-relaxed ${
                hideSectionHeader ? "mt-8 lg:mt-0" : "mt-8"
              } ${dark ? "text-white/90" : "text-text-secondary"}`}
            >
              &ldquo;Coordinating athlete catering was a frustrating aspect of my
              job. I spent hours researching vendors and dealing with inefficient
              communication and ordering. I needed trusted fueling partners to
              execute at an elite level while meeting my team&rsquo;s nutritional
              needs. With many colleagues experiencing the same issues, the idea
              of creating Elite Eats Inc. was born!&rdquo;
            </blockquote>

            <div className="mt-8">
              <p
                className={`font-display text-2xl lg:text-3xl ${
                  dark ? "text-white" : "text-text-primary"
                }`}
              >
                Jennifer Gibson MS, RD, CSSD
              </p>
              <p
                className={`mt-1 font-sans text-base ${
                  dark ? "text-white/80" : "text-text-secondary"
                }`}
              >
                Co-founder and CEO
              </p>
              <p className={`font-sans text-base ${dark ? "text-white/80" : "text-text-secondary"}`}>
                Performance Dietitian, 20 Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
