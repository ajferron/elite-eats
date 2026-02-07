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
      "From coast to coast, access elite fueling partners in 65 cities across 8 professional leagues.",
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
    <section className="px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Container with rounded corners */}
        <div className="relative h-[600px] overflow-hidden rounded-3xl bg-dark-azure lg:h-[700px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/hero-1_2560.jpg"
              alt="Professional athlete nutrition"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 2560px"
              className="object-cover"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-dark-azure/30" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-12">
            {/* Top Section */}
            <div className="flex items-start justify-between">
              {/* Headline - Top Left */}
              <div className="max-w-lg">
                <h1 className="font-[family-name:var(--font-radnika)] text-4xl font-medium leading-[1.1] -tracking-[0.08em] text-white sm:text-5xl lg:text-6xl">
                  {slides[activeSlide].headline}
                  <br />
                  {slides[activeSlide].headlineAccent}
                </h1>

                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-block rounded-full bg-light-orange px-6 py-3 font-[family-name:var(--font-radnika)] text-sm font-medium text-text-primary transition-colors hover:bg-white"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Carousel Dots - Top Right */}
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className={`h-3 w-3 rounded-full transition-all ${
                      activeSlide === index
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    <span className="sr-only">Go to slide {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-end justify-between">
              {/* Category Label - Bottom Left */}
              <div>
                <h2 className="font-[family-name:var(--font-radnika)] text-5xl font-medium -tracking-[0.08em] text-white sm:text-6xl lg:text-8xl">
                  {slides[activeSlide].categoryLabel}
                </h2>
              </div>

              {/* Info Card - Bottom Right */}
              {/* <div className="hidden max-w-xs rounded-2xl bg-azure/20 p-4 backdrop-blur-md sm:block lg:max-w-sm lg:p-6">
                <div className="mb-4 h-24 overflow-hidden rounded-xl bg-azure/30 lg:h-32">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-[family-name:var(--font-radnika)] text-xs text-white/50">
                      Card Image
                    </span>
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-radnika)] text-sm font-semibold text-white lg:text-base">
                  {slides[activeSlide].cardTitle}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-radnika)] text-xs leading-relaxed text-white/70 lg:text-sm">
                  {slides[activeSlide].cardDescription}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
