"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share your team's dietary requirements, schedule, and preferences. Our platform captures everything—from allergy protocols to game-day timing.",
    tags: ["Dietary specs", "Scheduling", "Preferences"],
    image: "/images/how-it-works/step-1.jpg",
  },
  {
    number: "02",
    title: "Get Matched with Vetted Partners",
    description:
      "We connect you with fueling partners who understand professional athletics. Every vendor is credentialed, experienced, and team-approved.",
    tags: ["Curated vendors", "Performance-focused", "Quality assured"],
    image: "/images/how-it-works/step-2.jpg",
  },
  {
    number: "03",
    title: "Order, Track, Repeat",
    description:
      "Place orders, manage expenses, and communicate—all in one place. No more scattered emails or lost invoices. Just streamlined athlete nutrition.",
    tags: ["One platform", "Expense tracking", "Seamless reorders"],
    image: "/images/how-it-works/step-3.jpg",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = -rect.top;
      const navbarHeight = 80; // h-20 = 5rem = 80px
      const sectionHeight =
        sectionRef.current.offsetHeight - window.innerHeight + navbarHeight;
      const progress = Math.max(0, Math.min(1, sectionTop / sectionHeight));
      const slideIndex = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );

      setActiveIndex(slideIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-center py-6 sm:py-12 lg:py-16">
        {/* Section Header */}
        <div className="container-section mb-4 sm:mb-8 lg:mb-12">
          <SectionHeader
            label="How It Works"
            heading="Simple. Streamlined. Scalable."
          >
            <button className="btn-primary hidden flex-shrink-0 md:block">
              Get Started
            </button>
          </SectionHeader>
        </div>

        {/* Card Container */}
        <div className="container-section grid w-full flex-1 grid-cols-1 gap-4 overflow-hidden lg:gap-6 lg:grid-cols-2">
          {/* Image Side - hidden on mobile to give more room for content */}
          <div className="relative hidden overflow-hidden rounded-2xl bg-cream lg:block">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Placeholder - replace with actual image */}
                <div className="flex h-full w-full items-center justify-center bg-cream-dark">
                  <span className="font-sans text-sm text-stone">
                    Step {step.number} Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Content Side */}
          <div className="relative flex min-h-[380px] flex-col justify-center overflow-hidden rounded-2xl bg-cream p-6 sm:p-8 lg:min-h-0 lg:p-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute inset-0 flex flex-col justify-between p-6 transition-all duration-500 sm:p-8 lg:p-12 ${
                  index === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0 pointer-events-none"
                }`}
              >
                {/* Step Counter */}
                <span className="font-sans text-sm font-medium text-text-tertiary">
                  {step.number}/{String(steps.length).padStart(2, "0")}
                </span>

                {/* Main Content */}
                <div>
                  {/* Title */}
                  <h3 className="mb-4 font-sans text-xl font-medium -tracking-[0.02em] text-text-primary sm:mb-6 sm:text-2xl lg:text-3xl">
                    {step.title}
                  </h3>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2 sm:mb-6">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-azure"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-dark-azure"></span>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mb-4 font-sans text-sm leading-relaxed text-text-tertiary sm:mb-6 sm:text-base lg:text-lg">
                    {step.description}
                  </p>

                  {/* CTA Button */}
                  <button className="btn-secondary w-full">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        {/* <div className="mx-auto mt-4 flex max-w-7xl justify-center gap-2 px-6 sm:mt-8 lg:px-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-7 bg-dark-azure"
                  : "w-2 bg-dark-azure/20"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
