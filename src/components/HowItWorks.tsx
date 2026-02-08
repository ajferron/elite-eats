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
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-center py-6 sm:py-12 lg:py-16">
        {/* Section Header */}
        <div className="mx-auto mb-4 flex w-full max-w-7xl items-start justify-between px-6 sm:mb-8 lg:mb-12 lg:px-8">
          <div>
            <p className="mb-2 font-[family-name:var(--font-radnika)] text-xs tracking-wide text-text-tertiary sm:mb-3 sm:text-sm">
              How It Works
            </p>
            <h2 className="font-[family-name:var(--font-radnika)] text-2xl font-medium -tracking-[0.02em] text-text-primary sm:text-3xl md:text-4xl lg:text-5xl">
              Simple. Streamlined. Scalable.
            </h2>
          </div>
          <button className="hidden flex-shrink-0 rounded-full bg-yellow-green px-6 py-3 font-[family-name:var(--font-radnika)] text-sm font-medium text-charcoal transition-colors hover:bg-yellow-green/90 md:block">
            Get Started
          </button>
        </div>

        {/* Card Container */}
        <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-4 overflow-hidden px-6 lg:gap-6 lg:grid-cols-2 lg:px-8">
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
                  <span className="font-[family-name:var(--font-radnika)] text-sm text-stone">
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
                <span className="font-[family-name:var(--font-radnika)] text-sm font-medium text-text-tertiary">
                  {step.number}/{String(steps.length).padStart(2, "0")}
                </span>

                {/* Main Content */}
                <div>
                  {/* Title */}
                  <h3 className="mb-4 font-[family-name:var(--font-radnika)] text-xl font-medium -tracking-[0.02em] text-text-primary sm:mb-6 sm:text-2xl lg:text-3xl">
                    {step.title}
                  </h3>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2 sm:mb-6">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full bg-dark-azure/10 px-3 py-1.5 font-[family-name:var(--font-radnika)] text-xs text-dark-azure"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-dark-azure"></span>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mb-4 font-[family-name:var(--font-radnika)] text-sm leading-relaxed text-text-tertiary sm:mb-6 sm:text-base lg:text-lg">
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
