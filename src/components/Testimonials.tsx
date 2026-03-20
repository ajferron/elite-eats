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
    name: "Petra Rack, MS, RD, CSSD",
    role: "Head Sport Dietitian",
    team: "Chicago Fire FC, MLS",
    teamLogo: "chicago-fire.png",
    image: "/images/testimonials/petra-rack.jpg",
    quote:
      'Elite Eats has been a true saving grace for our team during a demanding travel season. Their reliability and flexibility in catering to multiple locations have been invaluable. This platform is a game changer for professional sports teams, making food service on the road seamless and stress-free. When I introduced it to our performance team, their immediate reaction said it all: "This is brilliant.',
  },
  {
    id: 2,
    name: "Jake Anthony, MS, RD, CSSD",
    role: "Director of Football Performance Nutrition",
    team: "University of Illinois",
    teamLogo: "uofi.png",
    image: "/images/testimonials/jake-anthony.jpg",
    quote:
      "Elite Eats was a game changer for streamlining all of our catering needs during our Bowl Game. ... The platform is intuitive to navigate and does an excellent job of keeping all of your catering details centralized in one place. Most importantly, the Elite Eats team keeps tabs on your orders throughout the process which gives you peace of mind in knowing that nothing will fall between the cracks.",
  },
  {
    id: 3,
    name: "Margaret Hughes, RD",
    role: "Performance Nutritionist",
    team: "Dallas Mavericks, NBA",
    teamLogo: "dallas-mavs.png",
    image: "/images/testimonials/margaret-hughes.jpg",
    quote:
      "Elite Eats exceeds all expectations from start to finish when it comes to setting up catering for my team. From the booking process to the menu and vendor options; Elite Eats provides a seamless experience from start to finish. The platform makes communication simple, and the vendors are responsive, flexible, and genuinely invested in making our event a success.",
  },
  {
    id: 4,
    name: "Christina Jax, MS, RDN, LDN, RYT, CLT",
    role: "Director of Nutrition",
    team: "San Jose Sharks and San Jose Barracuda",
    teamLogo: "san-jose-sharks.png",
    image: "/images/testimonials/christina-jax.jpg",
    quote:
      "Feeding my players on the road is as important, if not more, than when we are at home. Demanding travel schedules and sleep changes require high level attention to nutrition. Elite Eats has been an amazing resource to make this part of my job easy. There are a great variety of catering and delivery options that are vetted and understand the needs of pro athletes. So grateful for this resource!",
  },
  {
    id: 5,
    name: "Kylene Bogden, MS, RDN, CSSD, IFNCP",
    role: "Performance Dietitian",
    team: "Cleveland Cavaliers, NBA",
    teamLogo: "cleveland-cavs.png",
    image: "/images/testimonials/kylene-bogden.jpg",
    quote:
      "Elite Eats is a game-changer! I complete flight catering orders in half the time now, the entire process is more organized, I've discovered new restaurants without spending hours of research, and this platform has made it much easier for our organization to save on food costs.",
  },
  {
    id: 6,
    name: "Abbey Lathrop-Korn, MS, RD, CSSD",
    role: "Head Performance Dietitian",
    team: "Colorado Rapids, MLS",
    teamLogo: "colorado-rapids.png",
    image: "/images/testimonials/abbey-lathrop-korn.jpg",
    quote:
      "Elite Eats is changing the game of pro sport catering. Not all caterers are the same in regards to their professionalism & attention to detail & EE simplifies the process for you by vetting out those that don't make the cut. They provide you with the peace of mind that you're working with a caterer who have the experience of delivering to your specific stadium, arena or airport & understands professional sport expectations.",
  },
  {
    id: 7,
    name: "Maureen Stoecklein, RD",
    role: "Major League Nutrition Coordinator",
    team: "Detroit Tigers, MLB",
    teamLogo: "detroit-tigers.png",
    image: "/images/testimonials/maureen-stoecklein.jpg",
    quote:
      'I appreciate the benefit of all communications in one landing spot, the invoicing is so simple and the reassurance of delivery. I have zero worries when I have order placed via Elite Eats. One of the easiest parts of the platform is sending a message like "here is my budget and what I need to feed - help!"',
  },
  {
    id: 8,
    name: "Hillary Ake, MS, RD, LD, CSSD",
    role: "Performance Dietitian, MLB & College",
    image: "/images/testimonials/hillary-ake.jpg",
    quote:
      'I highly recommend Elite Eats as a time- and stress-saver. My favorite parts are the transparent pricing and amounts. I always know exactly how much protein I will receive and never have to worry about last-minute surprise fees. And the support from Jenn and Stephanie is unmatched!',
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
    <section className="overflow-x-clip bg-dark-azure py-16 lg:py-18">
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
        grabCursor
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
              <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 32vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Quote & Attribution */}
              <div className="flex flex-1 flex-col bg-black/[0.06]">
                <blockquote className="mb-4 flex-1 font-sans text-md p-5 leading-relaxed text-white/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between border-t border-white/10 p-5">
                  <div>
                    <p className="font-display text-xl font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-md text-white/65">
                      {testimonial.role}
                      {testimonial.team && <> &middot; {testimonial.team}</>}
                    </p>
                  </div>
                  {testimonial.teamLogo && testimonial.team && (
                    <Image
                      src={`/images/testimonials/team-logos/${testimonial.teamLogo}`}
                      alt={testimonial.team}
                      width={56}
                      height={56}
                      className="h-12 w-12 flex-shrink-0 object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
