import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Head Dietitian",
    quote:
      "Every order feels special—the vendors are outstanding, and the platform truly makes our job easier.",
    logo: "/images/trust-bar/nfl-1.webp",
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Nutrition Coordinator",
    quote:
      "Elite Eats completely changed our workflow. I'm more confident in our catering than ever before.",
    logo: "/images/trust-bar/mlb-1.svg",
  },
  {
    id: 3,
    name: "Rachel Torres",
    role: "Team Dietitian",
    quote:
      "The platform completely reshaped our operations—my team, focus, and confidence have never been better.",
    logo: "/images/trust-bar/nfl-2.webp",
  },
  {
    id: 4,
    name: "David Williams",
    role: "Director of Player Nutrition",
    quote:
      "Every meal feels like more than just catering, with vetted vendors and a network that makes you feel supported.",
    logo: "/images/trust-bar/mlb-2.svg",
  },
  {
    id: 5,
    name: "Jennifer Park",
    role: "Sports Dietitian",
    quote:
      "The vendor matching was a highlight of my transition—well-organized, efficient, and filled with great partners.",
    logo: "/images/trust-bar/nfl-3.webp",
  },
  {
    id: 6,
    name: "Michael Brooks",
    role: "Performance Nutritionist",
    quote:
      "Joining Elite Eats has given me more than great vendors—it's given me lasting partnerships and peace of mind.",
    logo: "/images/trust-bar/mlb-3.svg",
  },
];

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.4 24H7.2C7.2 17.376 12.576 12 19.2 12V16.8C15.168 16.8 12 19.968 12 24V24.6C12 26.52 13.68 28.2 15.6 28.2H19.2C21.12 28.2 22.8 29.88 22.8 31.8V34.2C22.8 36.12 21.12 37.8 19.2 37.8H15.6C11.472 37.8 8.4 34.728 8.4 30.6V24H14.4ZM38.4 24H31.2C31.2 17.376 36.576 12 43.2 12V16.8C39.168 16.8 36 19.968 36 24V24.6C36 26.52 37.68 28.2 39.6 28.2H43.2C45.12 28.2 46.8 29.88 46.8 31.8V34.2C46.8 36.12 45.12 37.8 43.2 37.8H39.6C35.472 37.8 32.4 34.728 32.4 30.6V24H38.4Z" />
    </svg>
  );
}

function FeaturedTestimonial({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-azure p-8 sm:p-10 lg:col-span-2 lg:p-12">
      {/* Decorative quote mark */}
      <QuoteMark className="absolute -top-2 left-6 h-24 w-24 text-white/5 sm:left-8 sm:h-32 sm:w-32 lg:left-10" />

      <div className="relative flex h-full flex-col justify-between">
        {/* Quote */}
        <blockquote className="mb-8 font-[family-name:var(--font-radnika)] text-xl leading-relaxed font-medium text-white/95 sm:text-2xl sm:leading-relaxed lg:text-3xl lg:leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-white/10 sm:h-14 sm:w-14">
              <Image
                src={testimonial.logo}
                alt="Team logo"
                width={56}
                height={56}
                className="h-full w-full object-contain p-1"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-radnika)] text-base font-medium text-white sm:text-lg">
                {testimonial.name}
              </p>
              <p className="font-[family-name:var(--font-radnika)] text-sm text-white/60">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="group relative flex h-full flex-col justify-between rounded-2xl bg-cream p-6 transition-all hover:bg-cream-dark sm:p-8">
      {/* Quote mark */}
      <QuoteMark className="absolute mb-[-12px] -top-1 left-4 h-12 w-12 text-dark-azure/5 sm:left-6" />

      {/* Quote */}
      <blockquote className="relative mb-6 font-[family-name:var(--font-radnika)] text-base leading-relaxed text-text-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-surface-sage">
          <Image
            src={testimonial.logo}
            alt="Team logo"
            width={40}
            height={40}
            className="h-full w-full object-contain p-0.5"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate font-[family-name:var(--font-radnika)] text-sm font-medium text-text-primary">
            {testimonial.name}
          </p>
          <p className="truncate font-[family-name:var(--font-radnika)] text-xs text-text-tertiary">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const others = testimonials.filter((t) => !t.featured);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-14">
          <p className="mb-3 font-[family-name:var(--font-radnika)] text-sm tracking-wide text-text-tertiary">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.02em] text-text-primary sm:text-4xl lg:text-5xl">
            Trusted by the Best
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Featured testimonial - spans 2 columns on large screens */}
          {featured && <FeaturedTestimonial testimonial={featured} />}

          {/* First card on featured row */}
          {others[0] && <TestimonialCard testimonial={others[0]} />}

          {/* Remaining cards */}
          {others.slice(1).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
