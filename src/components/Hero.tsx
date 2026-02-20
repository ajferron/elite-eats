"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    headline: "Your team's nutrition,",
    headlineAccent: "handled.",
    categoryLabel: "Pro Team Catering",
    cardDescription:
      "Unlock your athletes' potential with vetted nutrition partners and world-class catering.",
  },
  {
    id: 2,
    headline: "Trusted by the",
    headlineAccent: "Best in Sports",
    categoryLabel: "150+ Pro Teams",
    cardDescription:
      "From coast to coast, access elite fueling partners in 65 cities across 8 major leagues.",
  },
  {
    id: 3,
    headline: "Nutrition Excellence,",
    headlineAccent: "Delivered Daily",
    categoryLabel: "760+ Partners",
    cardDescription:
      "Every fueling partner understands the unique nutritional demands of professional athletes.",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative h-[90vh] w-full">
      {/* Background Image - full viewport */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-2_2560.jpg"
          alt="Professional athlete nutrition"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-charcoal/20" />
      </div>

      {/* Content Overlay */}
      <div className="container-section relative z-10 flex h-full flex-col justify-between pb-12 pt-32 mt-18 lg:pb-16">
        {/* Top Section */}
        <div className="flex items-start justify-between">
          {/* Headline - Top Left */}
          <div className="max-w-3xl">
            <p className="mb-4 font-sans text-md tracking-wide text-white/85">
              {slides[activeSlide].categoryLabel}
            </p>
            <h1 className="font-sans text-7xl font-medium leading-[1] -tracking-[0.08em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {slides[activeSlide].headline}
              <br />
              {slides[activeSlide].headlineAccent}
            </h1>
            <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-white/80 lg:text-lg">
              {slides[activeSlide].cardDescription}
            </p>

            {/* CTA Button - yellow-green accent */}
            <div className="mt-10 flex items-center gap-4">
              <a href="#" className="btn-primary inline-block">
                Get Started
              </a>
              <a
                href="#"
                className="inline-block font-sans text-md text-white/90 transition-colors hover:text-white"
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

        {/* Bottom Section - stats */}
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="font-sans text-3xl font-medium text-white lg:text-4xl">
                150+
              </p>
              <p className="mt-1 mr-1 font-sans text-sm text-white/80">
                Pro Teams
              </p>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center">
              <p className="font-sans text-3xl font-medium text-white lg:text-4xl">
                760
              </p>
              <p className="mt-1 font-sans text-sm text-white/80">
                Fueling Partners
              </p>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center">
              <p className="font-sans text-3xl font-medium text-white lg:text-4xl">
                65
              </p>
              <p className="mt-1 font-sans text-sm text-white/80">
                Cities
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden items-center gap-2 text-white/80 lg:flex">
            <span className="font-sans text-xs uppercase tracking-wider">
              Scroll
            </span>
            <svg
              className="h-4 w-4 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
