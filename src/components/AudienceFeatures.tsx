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
  ctaLabel: string;
  ctaHref: string;
  features: FeatureCard[];
}

export function AudienceFeatures({
  label,
  headingBefore,
  headingAccent,
  headingAfter,
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
              <span className="text-yellow-green">{headingAccent}</span>{" "}
              {headingAfter}
            </h2>
          </div>

          <Link
            href={ctaHref}
            className="hidden shrink-0 items-center gap-2 rounded-full border border-yellow-green px-5 py-2.5 font-sans text-sm font-medium text-yellow-green transition-all hover:bg-yellow-green hover:text-charcoal sm:flex"
          >
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 sm:hidden">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-green px-5 py-2.5 font-sans text-sm font-medium text-yellow-green transition-all hover:bg-yellow-green hover:text-charcoal"
          >
            {ctaLabel}
            <span aria-hidden="true">→</span>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-sans text-2xl font-medium leading-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-snug text-white/75">
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
