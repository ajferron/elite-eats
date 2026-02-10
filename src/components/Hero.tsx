"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    headline: "Fueling wins,",
    headlineAccent: "not logistics.",
    categoryLabel: "Pro Team Catering",
    cardTitle: "Precision & Performance",
    cardDescription:
      "Unlock your athletes' potential with vetted nutrition partners and world-class catering.",
  },
  {
    id: 2,
    headline: "Trusted by the",
    headlineAccent: "Best in Sports",
    categoryLabel: "150+ Pro Teams",
    cardTitle: "Nationwide Coverage",
    cardDescription:
      "From coast to coast, access elite fueling partners in 65 cities across 8 major leagues.",
  },
  {
    id: 3,
    headline: "Nutrition Excellence,",
    headlineAccent: "Delivered Daily",
    categoryLabel: "760+ Partners",
    cardTitle: "Vetted & Verified",
    cardDescription:
      "Every fueling partner understands the unique nutritional demands of professional athletes.",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="px-6 pt-8 lg:px-8 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        {/* Hero Container - lighter approach */}
        <div className="relative min-h-[600px] overflow-hidden rounded-2xl bg-cream lg:min-h-[680px]">
          {/* Background Image with softer treatment */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/hero-1_2560.jpg"
              alt="Professional athlete nutrition"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 2560px"
              className="object-cover"
            />
            {/* Softer gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex h-full min-h-[600px] flex-col justify-between p-8 lg:min-h-[680px] lg:p-12">
            {/* Top Section */}
            <div className="flex items-start justify-between">
              {/* Headline - Top Left */}
              <div className="max-w-xl">
                <p className="mb-4 font-[family-name:var(--font-radnika)] text-sm tracking-wide text-white/70">
                  {slides[activeSlide].categoryLabel}
                </p>
                <h1 className="font-[family-name:var(--font-radnika)] text-4xl font-medium leading-[1.1] -tracking-[0.04em] text-white sm:text-5xl lg:text-6xl">
                  {slides[activeSlide].headline}
                  <br />
                  {slides[activeSlide].headlineAccent}
                </h1>
                <p className="mt-6 max-w-md font-[family-name:var(--font-radnika)] text-base leading-relaxed text-white/80 lg:text-lg">
                  {slides[activeSlide].cardDescription}
                </p>

                {/* CTA Button - yellow-green accent */}
                <div className="mt-10 flex items-center gap-4">
                  <a
                    href="#"
                    className="inline-block rounded-full bg-yellow-green px-7 py-3.5 font-[family-name:var(--font-radnika)] text-sm text-charcoal transition-all hover:bg-yellow-green/90"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="inline-block font-[family-name:var(--font-radnika)] text-sm text-white/90 transition-colors hover:text-white"
                  >
                    Learn More →
                  </a>
                </div>
              </div>

              {/* Carousel Dots - Top Right */}
              <div className="hidden items-center gap-2 sm:flex">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      activeSlide === index
                        ? "w-6 bg-white"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  >
                    <span className="sr-only">Go to slide {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Section - minimal */}
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="font-[family-name:var(--font-radnika)] text-3xl font-medium text-white lg:text-4xl">150+</p>
                  <p className="mt-1 font-[family-name:var(--font-radnika)] text-xs text-white/60">Pro Teams</p>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="text-center">
                  <p className="font-[family-name:var(--font-radnika)] text-3xl font-medium text-white lg:text-4xl">760</p>
                  <p className="mt-1 font-[family-name:var(--font-radnika)] text-xs text-white/60">Fueling Partners</p>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="text-center">
                  <p className="font-[family-name:var(--font-radnika)] text-3xl font-medium text-white lg:text-4xl">65</p>
                  <p className="mt-1 font-[family-name:var(--font-radnika)] text-xs text-white/60">Cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
