"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    id: 1,
    name: "Margaret Hughes, RD",
    role: "Performance Nutritionist",
    team: "Dallas Mavericks, NBA",
    image: "/images/testimonials/margaret-hughes_dallas-mavs-nba.jpg",
    quote:
      "Elite Eats exceeds all expectations from start to finish when it comes to setting up catering for my team. From the booking process to the menu and vendor options; Elite Eats provides a seamless experience from start to finish. The platform makes communication simple, and the vendors are responsive, flexible, and genuinely invested in making our event a success.",
  },
  {
    id: 2,
    name: "Jake Anthony, MS, RD, CSSD",
    role: "Director of Football Performance Nutrition",
    team: "University of Illinois",
    image: "/images/testimonials/jake-anthony_uofi.jpg",
    quote:
      "Elite Eats was a game changer for streamlining all of our catering needs during our Bowl Game. ... The platform is intuitive to navigate and does an excellent job of keeping all of your catering details centralized in one place. Most importantly, the Elite Eats team keeps tabs on your orders throughout the process which gives you peace of mind in knowing that nothing will fall between the cracks.",
  },
  {
    id: 3,
    name: "Petra Rack, MS, RD, CSSD",
    role: "Head Sport Dietitian",
    team: "Chicago Fire FC, MLS",
    image: "/images/testimonials/petra-rack_chicago-fire-fc-mls.jpg",
    quote:
      'Elite Eats has been a true saving grace for our team during a demanding travel season. Their reliability and flexibility in catering to multiple locations have been invaluable. This platform is a game changer for professional sports teams, making food service on the road seamless and stress-free. When I introduced it to our performance team, their immediate reaction said it all: "This is brilliant."',
  },
  {
    id: 4,
    name: "Abbey Lathrop-Korn, MS, RD, CSSD",
    role: "Head Performance Dietitian",
    team: "Colorado Rapids, MLS",
    image: "/images/testimonials/abbey-lathrop-korn_colorado-rapids-mls.jpg",
    quote:
      "Elite Eats is changing the game of pro sport catering. Not all caterers are the same in regards to their professionalism & attention to detail & EE simplifies the process for you by vetting out those that don't make the cut. They provide you with the peace of mind that you're working with a caterer who have the experience of delivering to your specific stadium, arena or airport & understands professional sport expectations.",
  },
  {
    id: 5,
    name: "Maureen Stoecklein, RD",
    role: "Major League Nutrition Coordinator",
    team: "Detroit Tigers, MLB",
    image: "/images/testimonials/maureen-stoecklein_detroit-tigers-mlb.jpg",
    quote:
      'I appreciate the benefit of all communications in one landing spot, the invoicing is so simple and the reassurance of delivery. I have zero worries when I have order placed via Elite Eats. One of the easiest parts of the platform is sending a message like "here is my budget and what I need to feed - help!"',
  },
];

function ChevronLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.5 15L7.5 10L12.5 5" />
    </svg>
  );
}

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.5 5L12.5 10L7.5 15" />
    </svg>
  );
}

export function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="overflow-x-clip bg-black py-16 lg:py-18">
      {/* Section Header with Navigation — contained */}
      <div className="container-section mb-10 lg:mb-14">
        <SectionHeader
          label="Testimonials"
          heading="Trusted by the Best"
          headingColor="text-white"
          labelColor="text-white/50"
        >
          <div className="flex gap-2">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              disabled={isBeginning}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/50 hover:text-white disabled:cursor-default disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white/60"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              disabled={isEnd}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/50 hover:text-white disabled:cursor-default disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white/60"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </SectionHeader>
      </div>

      {/* Swiper Carousel — full viewport width */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="testimonials-slide">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl">
              {/* Dietitian Photo */}
              <div className="relative aspect-[4/3] w-full flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 32vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Quote & Attribution */}
              <div className="flex flex-1 flex-col bg-white/[0.06]">
                <blockquote className="mb-4 flex-1 font-sans text-md p-5 leading-relaxed text-white/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="border-t border-white/10 p-5">
                  <p className="font-display text-xl font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-sm text-white/45">
                    {testimonial.role} &middot; {testimonial.team}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
