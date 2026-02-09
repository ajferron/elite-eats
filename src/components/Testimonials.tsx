"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    quote:
      "Every order feels special—the vendors are outstanding, and the platform truly makes our job easier.",
    logo: "/images/trust-bar/nfl-1.webp",
  },
  {
    id: 2,
    name: "Marcus Chen",
    quote:
      "Elite Eats completely changed our workflow. I'm more confident in our catering than ever before.",
    logo: "/images/trust-bar/mlb-1.svg",
  },
  {
    id: 3,
    name: "Rachel Torres",
    quote:
      "The platform here completely reshaped our operations—my team, focus, and confidence have never been better.",
    logo: "/images/trust-bar/nfl-2.webp",
  },
  {
    id: 4,
    name: "David Williams",
    quote:
      "Every meal feels like more than just catering, with vetted vendors and a network that makes you feel supported.",
    logo: "/images/trust-bar/mlb-2.svg",
  },
  {
    id: 5,
    name: "Jennifer Park",
    quote:
      "The vendor matching was a highlight of my transition—well-organized, efficient, and filled with great partners.",
    logo: "/images/trust-bar/nfl-3.webp",
  },
  {
    id: 6,
    name: "Michael Brooks",
    quote:
      "Joining Elite Eats has given me more than great vendors—it's given me lasting partnerships and peace of mind.",
    logo: "/images/trust-bar/mlb-3.svg",
  },
  {
    id: 7,
    name: "Amanda Foster",
    quote:
      "From premium vendors to seamless ordering, everything about this platform feels first-class yet inviting.",
    logo: "/images/trust-bar/nfl-4.webp",
  },
  {
    id: 8,
    name: "Chris Johnson",
    quote:
      "This platform blends top-notch service with a true sense of community—it's where nutrition meets trust.",
    logo: "/images/trust-bar/mlb-4.svg",
  },
];

function TestimonialSlide({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="relative flex flex-col items-center px-2 pb-4 pt-8">
      {/* Tilted Logo - Badge style */}
      <div className="relative z-0 mb-[-80px] h-58 w-58 flex-shrink-0 rotate-[-10deg] transform">
        <Image
          src={testimonial.logo}
          alt="Team logo"
          width={224}
          height={224}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Frosted Glass Card */}
      <div className="relative z-10 w-64 rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-md">
        <p className="font-[family-name:var(--font-radnika)] text-sm font-medium text-text-primary">
          {testimonial.name}
        </p>
        <p className="mt-4 font-[family-name:var(--font-radnika)] text-sm leading-relaxed text-text-secondary">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-14 lg:pt-10 lg:pb-20">
      {/* Section Header */}
      <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between px-6 lg:mb-16 lg:px-8">
        <div>
          <p className="mb-3 font-[family-name:var(--font-radnika)] text-sm tracking-wide text-text-tertiary">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.02em] text-text-primary sm:text-4xl lg:text-5xl">
            What Teams Say
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            className="swiper-button-prev-custom flex h-12 w-12 items-center justify-center rounded-full border border-stone/30 text-text-secondary transition-colors hover:border-stone/50 hover:text-text-primary"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="swiper-button-next-custom flex h-12 w-12 items-center justify-center rounded-full border border-stone/30 text-text-secondary transition-colors hover:border-stone/50 hover:text-text-primary"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          spaceBetween={8}
          slidesPerView={1.3}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          className="overflow-visible"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialSlide testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
