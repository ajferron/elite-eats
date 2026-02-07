"use client";

import { useEffect, useRef, useState } from "react";

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
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-center px-6 py-12 lg:px-8 lg:py-16">
        {/* Section Header */}
        <div className="mx-auto mb-8 flex w-full max-w-7xl items-start justify-between lg:mb-12">
          <div>
            <p className="mb-3 font-[family-name:var(--font-radnika)] text-sm tracking-wide text-text-tertiary">
              How It Works
            </p>
            <h2 className="font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.02em] text-text-primary sm:text-4xl lg:text-5xl">
              Simple. Streamlined. Scalable.
            </h2>
          </div>
          <button className="hidden flex-shrink-0 rounded-full border border-text-primary px-6 py-3 font-[family-name:var(--font-radnika)] text-sm font-medium text-text-primary transition-colors hover:bg-text-primary hover:text-background md:block">
            Get Started
          </button>
        </div>

        {/* Card Container */}
        <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-6 overflow-hidden lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-cream lg:min-h-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Placeholder - replace with actual image */}
                <div className="flex h-full w-full items-center justify-center bg-cream-dark">
                  <span className="font-[family-name:var(--font-radnika)] text-sm text-stone">
                    Step {step.number} Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Content Side */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-cream p-8 lg:p-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute inset-0 flex flex-col justify-between p-8 transition-all duration-500 lg:p-12 ${
                  index === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0 pointer-events-none"
                }`}
              >
                {/* Step Counter */}
                <span className="font-[family-name:var(--font-radnika)] text-sm font-medium text-text-tertiary">
                  {step.number}/{String(steps.length).padStart(2, "0")}
                </span>

                {/* Main Content */}
                <div>
                  {/* Title */}
                  <h3 className="mb-6 font-[family-name:var(--font-radnika)] text-2xl font-medium -tracking-[0.02em] text-text-primary lg:text-3xl">
                    {step.title}
                  </h3>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full bg-azure/10 px-3 py-1.5 font-[family-name:var(--font-radnika)] text-xs text-text-secondary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-azure"></span>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mb-6 font-[family-name:var(--font-radnika)] text-base leading-relaxed text-text-tertiary lg:text-lg">
                    {step.description}
                  </p>

                  {/* CTA Button */}
                  <button className="w-full rounded-full bg-dark-azure px-6 py-2.5 font-[family-name:var(--font-radnika)] text-sm font-medium text-white transition-colors hover:bg-dark-azure/90">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="mx-auto mt-8 flex justify-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-7 bg-text-primary"
                  : "w-2 bg-text-secondary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
