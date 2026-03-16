"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { USMap } from "./USMap";
import { cn } from "@/lib/utils";
import { InstagramLogo, LinkedInLogo } from "./SocialLogos";

gsap.registerPlugin(useGSAP);

const slides = [
  {
    id: 1,
    headline: "Team Trusted",
    headlineAccent: "Athlete Catering",
    categoryLabel: "Elite Eats Inc",
    background: "/images/hero/hero-A_2560.jpg",
    showStats: true,
    cardDescription:
      "Dietitian Designed Athlete Catering Platform Connecting Professional Teams with Vetted Vendors.",
  },
  {
    id: 2,
    headline: "Trusted by",
    headlineAccent: "the Pros",
    categoryLabel: "Elite Eats Inc",
    background: "/images/hero/hero-B_2560.jpg",
    showStats: false,
    cardDescription:
      '“Elite Eats was a game changer for streamlining all of our catering needs during our Bowl Game. ... The platform is intuitive to navigate and does an excellent job of keeping all of your catering details centralized in one place. Most importantly, the Elite Eats team keeps tabs on your orders throughout the process which gives you peace of mind in knowing that nothing will fall between the cracks.”',
  },
  {
    id: 3,
    headline: "Nationwide",
    headlineAccent: "Fueling Partners",
    categoryLabel: "Elite Eats Inc",
    background: "",
    showStats: true,
    cardDescription:
      "Our team vetted fueling partners specialize in athlete-specific catering, ensuring consistent quality, nutritional precision, and operational reliability. We have you covered with over 700 partner locations across all major pro team cities.",
  },
];

const SLIDE_DURATION = 7;
const TRANSITION_DURATION = 0.8;

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const goToSlideRef = useRef<(index: number) => void>(() => {});

  const setBgRef = useCallback((el: HTMLDivElement | null, i: number) => {
    bgRefs.current[i] = el;
  }, []);
  const setTextRef = useCallback((el: HTMLDivElement | null, i: number) => {
    textRefs.current[i] = el;
  }, []);
  const setDotRef = useCallback(
    (el: HTMLButtonElement | null, i: number) => {
      dotRefs.current[i] = el;
    },
    [],
  );
  const setProgressRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      progressRefs.current[i] = el;
    },
    [],
  );

  useGSAP(
    () => {
      const activeIndex = { value: 0 };
      let autoPlayTween: gsap.core.Tween | null = null;
      let kenBurnsTween: gsap.core.Tween | null = null;

      function startKenBurns(index: number) {
        kenBurnsTween?.kill();

        const bg = bgRefs.current[index];
        if (!bg) return;

        const inner = bg.querySelector("[data-bg-inner]") as HTMLElement | null;
        if (!inner) return;

        gsap.set(inner, { scale: 1 });
        kenBurnsTween = gsap.to(inner, {
          scale: 1.03,
          duration: SLIDE_DURATION + TRANSITION_DURATION,
          ease: "none",
        });
      }

      function startAutoPlay() {
        autoPlayTween?.kill();

        // Reset all progress bars
        progressRefs.current.forEach((bar) => {
          if (bar) gsap.set(bar, { scaleX: 0 });
        });

        // Animate active progress bar
        const activeBar = progressRefs.current[activeIndex.value];
        if (activeBar) {
          gsap.set(activeBar, { scaleX: 0 });
        }

        autoPlayTween = gsap.to(activeBar, {
          scaleX: 1,
          duration: SLIDE_DURATION,
          ease: "none",
          onComplete: () => {
            const next = (activeIndex.value + 1) % slides.length;
            goToSlide(next);
          },
        });
      }

      function goToSlide(nextIndex: number) {
        const currentIndex = activeIndex.value;
        if (nextIndex === currentIndex) return;

        autoPlayTween?.kill();

        const currentBg = bgRefs.current[currentIndex];
        const nextBg = bgRefs.current[nextIndex];
        const currentText = textRefs.current[currentIndex];
        const nextText = textRefs.current[nextIndex];

        if (!currentBg || !nextBg || !currentText || !nextText) return;

        activeIndex.value = nextIndex;

        // Update dot styles
        dotRefs.current.forEach((dot, i) => {
          if (!dot) return;
          if (i === nextIndex) {
            dot.classList.remove("bg-white/30", "hover:bg-white/50", "w-2");
            dot.classList.add("bg-white", "w-6");
          } else {
            dot.classList.remove("bg-white", "w-6");
            dot.classList.add("bg-white/30", "hover:bg-white/50", "w-2");
          }
        });

        const tl = gsap.timeline({
          onComplete: () => {
            startAutoPlay();
          },
        });

        // Fade out current text
        const currentTextEls = currentText.querySelectorAll("[data-animate]");
        tl.to(currentTextEls, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.04,
          ease: "power2.in",
        });

        // Crossfade backgrounds
        tl.to(
          currentBg,
          {
            opacity: 0,
            duration: TRANSITION_DURATION,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(currentBg, { visibility: "hidden" });
            },
          },
          "<",
        );

        gsap.set(nextBg, { visibility: "visible" });
        tl.to(
          nextBg,
          {
            opacity: 1,
            duration: TRANSITION_DURATION,
            ease: "power2.inOut",
          },
          "<",
        );

        // Start Ken Burns on new slide
        tl.call(() => startKenBurns(nextIndex), [], "<");

        // Fade in next text
        gsap.set(nextText, { visibility: "visible", opacity: 1 });
        const nextTextEls = nextText.querySelectorAll("[data-animate]");
        gsap.set(nextTextEls, { y: 30, opacity: 0 });
        tl.to(
          nextTextEls,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3",
        );

        // Hide current text container after fade
        tl.set(currentText, { visibility: "hidden", opacity: 0 });
      }

      // Expose goToSlide for dot click handlers
      goToSlideRef.current = goToSlide;

      // Initialize: first slide visible, rest hidden
      slides.forEach((_, i) => {
        const bg = bgRefs.current[i];
        const text = textRefs.current[i];
        if (!bg || !text) return;

        if (i === 0) {
          gsap.set(bg, { opacity: 1, visibility: "visible" });
          gsap.set(text, { opacity: 1, visibility: "visible" });
          // Stagger in the first slide's text elements
          const textEls = text.querySelectorAll("[data-animate]");
          gsap.fromTo(
            textEls,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: "power2.out",
              delay: 0.2,
            },
          );
        } else {
          gsap.set(bg, { opacity: 0, visibility: "hidden" });
          gsap.set(text, { opacity: 0, visibility: "hidden" });
        }
      });

      // Ken Burns on first slide background
      startKenBurns(0);

      // Start auto-advance
      startAutoPlay();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] w-full overflow-hidden pt-20"
    >
      {/* Slide Backgrounds — all rendered, GSAP-controlled */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => setBgRef(el, index)}
          className="absolute inset-0"
          style={{ visibility: "hidden", opacity: 0 }}
          aria-hidden={index !== 0}
        >
          {slide.background ? (
            <div data-bg-inner className="h-full w-full origin-center">
              <Image
                src={slide.background}
                alt="Professional athlete nutrition"
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-charcoal/20" />
            </div>
          ) : (
            <div
              data-bg-inner
              className="absolute inset-0 origin-center overflow-hidden bg-dark-azure"
            >
              {/* Map — positioned right, vertically centered */}
              <div className="absolute inset-y-0 right-0 flex w-2/3 items-center">
                <USMap id="hero" scale={1000} strokeOpacity={0.3} />
              </div>
              {/* Gradient fade — ensures left-side text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-dark-azure via-dark-azure/60 to-transparent" />
            </div>
          )}
        </div>
      ))}

      {/* Content Overlay */}
      <div className="container-section relative z-10 flex h-full flex-col justify-between py-12 lg:pb-16">
        {/* Top Section */}
        <div className="flex items-start justify-between h-full">
          {/* Per-slide text blocks — all rendered, GSAP-controlled */}
          <div className="relative max-w-4xl h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                ref={(el) => setTextRef(el, index)}
                className={cn("flex flex-col justify-between h-full", index === 0 ? "" : "absolute inset-0")}
                style={{ visibility: "hidden", opacity: 0 }}
              >
                <div className="flex flex-col">
                  <p
                    data-animate
                    className="mb-4 font-sans text-md tracking-wide text-white/85"
                  >
                    {slide.categoryLabel}
                  </p>
                  <h1
                    data-animate
                    className="font-sans text-7xl font-medium leading-[1] -tracking-[0.08em] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                  >
                    {slide.headline}
                    <br />
                    {slide.headlineAccent}
                  </h1>
                  <p
                    data-animate
                    className="mt-4 max-w-lg font-sans text-base leading-relaxed text-white/80 lg:text-lg"
                  >
                    {slide.cardDescription}
                  </p>

                  {slide.id === 2 && (
                    <div data-animate className="mt-6">
                      <p className="font-display text-2xl text-white lg:text-3xl">
                        Jake Anthony, MS, RD, CSSD
                      </p>
                      <p className="mt-1 font-sans text-base text-white/80">
                        Director of Football Performance Nutrition
                      </p>
                      <p className="font-sans text-base text-white/80">
                        University of Illinois
                      </p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div data-animate className="mt-10 flex items-center gap-4">
                    <a href="https://eliteeatsinc.com/" className="btn-primary inline-block">
                      Log In
                    </a>
                    <a
                      href="/getting-started"
                      className="inline-block font-sans text-md text-white/90 transition-colors hover:text-white"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>

                {slide.showStats && (
                  <div data-animate className="flex items-center gap-8">
                    <div className="text-center">
                      <p className="font-sans text-3xl font-medium text-white lg:text-4xl">
                        150
                      </p>
                      <p className="mt-1 font-sans text-sm text-white/80">
                        Pro Teams
                      </p>
                    </div>
                    <div className="h-8 w-px bg-white/20"></div>
                    <div className="text-center">
                      <p className="font-sans text-3xl ml-1 font-medium text-white lg:text-4xl">
                        870+
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
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-end justify-between h-full">
            {/* Carousel Dots with progress bars - Top Right */}
            <div className="hidden items-center gap-2 sm:flex">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  ref={(el) => setDotRef(el, index)}
                  onClick={() => goToSlideRef.current(index)}
                  className={`relative h-2 overflow-hidden rounded-full transition-[width] duration-300 ${
                    index === 0
                      ? "w-6 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                >
                  <div
                    ref={(el) => setProgressRef(el, index)}
                    className="absolute inset-0 origin-left rounded-full bg-white/60"
                    style={{ transform: "scaleX(0)" }}
                  />
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>
            {/* Bottom Section - stats */}
            <div className="flex items-end justify-end">
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
        </div>
      </div>

      {/* Social Icons - attached to hero (right side overlay) */}
      <div className="pointer-events-none absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <div className="pointer-events-auto flex flex-col items-center gap-4 bg-charcoal/10 px-3 py-4 shadow-lg shadow-black/10 backdrop-blur-md">
          <a
            href="https://www.linkedin.com/company/elite-eats-inc/"
            target="_blank"
            rel="noreferrer"
            aria-label="Elite Eats on LinkedIn"
            className="text-white/80 transition hover:text-white"
          >
            <LinkedInLogo />
          </a>
          <a
            href="https://www.instagram.com/eliteeatsinc/"
            target="_blank"
            rel="noreferrer"
            aria-label="Elite Eats on Instagram"
            className="text-white/80 transition hover:text-white"
          >
            <InstagramLogo />
          </a>
        </div>
      </div>
    </section>
  );
}
