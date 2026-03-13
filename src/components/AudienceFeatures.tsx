"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

interface AudienceFeaturesProps {
  label: string;
  headingBefore: string;
  headingAccent: string;
  headingAfter: string;
  textAccentColor: string;
  bgAccentColor: string;
  ctaLabel: string;
  ctaHref: string;
  features: FeatureCard[];
}

export function AudienceFeatures({
  label,
  headingBefore,
  headingAccent,
  headingAfter,
  textAccentColor,
  bgAccentColor,
  ctaLabel,
  ctaHref,
  features,
}: AudienceFeaturesProps) {
  return (
    <section className="overflow-x-clip bg-cream py-16 lg:py-20">
      {/* Section header — contained */}
      <div className="container-section mb-10 lg:mb-12">
        <div className="flex items-end justify-between gap-x-8">
          <div className="min-w-0">
            <p className="mb-3 label-section">{label}</p>
            <h2 className="heading-section -tracking-[0.08em]">
              {headingBefore}{" "}
              <span className={textAccentColor}>{headingAccent}</span>{" "}
              {headingAfter}
            </h2>
          </div>

          <Link
            href={ctaHref}
            className={`btn-primary hidden md:flex gap-2 py-2.5 px-5 ${bgAccentColor}`}
          >
            {ctaLabel}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 sm:hidden">
          <Link
            href={ctaHref}
            className={`btn-primary inline-flex gap-2 py-2.5 px-5 ${bgAccentColor}`}
          >
            {ctaLabel}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Swiper carousel — full viewport width */}
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        className="features-swiper"
      >
        {features.map((feature) => (
          <SwiperSlide key={feature.title} className="features-slide">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 35vw, 300px"
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" />
              {/* Text overlay */}
              <div className="absolute backdrop-blur-md bg-black/20 bottom-0 left-0 right-0 p-5 min-h-37">
                <h3 className="font-sans text-3xl font-medium -tracking-[0.08em] leading-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-1.5 font-sans text-md leading-snug text-white/80">
                  {feature.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
