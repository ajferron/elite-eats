const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    quote:
      "Every order feels special—the vendors are outstanding, and the platform truly makes our job easier.",
    date: "Sun, 15 Mar 2025",
  },
  {
    id: 2,
    name: "Marcus Chen",
    quote:
      "Elite Eats completely changed our workflow. I'm more confident in our catering than ever before.",
    date: "Mon, 18 Mar 2025",
  },
  {
    id: 3,
    name: "Rachel Torres",
    quote:
      "The platform here completely reshaped our operations—my team, focus, and confidence have never been better.",
    date: "Wed, 22 Mar 2025",
  },
  {
    id: 4,
    name: "David Williams",
    quote:
      "Every meal feels like more than just catering, with vetted vendors and a network that makes you feel supported.",
    date: "Fri, 26 Mar 2025",
  },
  {
    id: 5,
    name: "Jennifer Park",
    quote:
      "The vendor matching was a highlight of my transition—well-organized, efficient, and filled with great partners.",
    date: "Sun, 15 Mar 2025",
  },
  {
    id: 6,
    name: "Michael Brooks",
    quote:
      "Joining Elite Eats has given me more than great vendors—it's given me lasting partnerships and peace of mind.",
    date: "Mon, 18 Mar 2025",
  },
  {
    id: 7,
    name: "Amanda Foster",
    quote:
      "From premium vendors to seamless ordering, everything about this platform feels first-class yet inviting.",
    date: "Wed, 22 Mar 2025",
  },
  {
    id: 8,
    name: "Chris Johnson",
    quote:
      "This platform blends top-notch service with a true sense of community—it's where nutrition meets trust.",
    date: "Fri, 26 Mar 2025",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex flex-col">
      <h3 className="font-display text-2xl font-semibold text-text-primary">
        {testimonial.name}
      </h3>
      <p className="mt-2 font-[family-name:var(--font-radnika)] text-sm leading-relaxed text-text-secondary/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p className="mt-3 flex items-center font-[family-name:var(--font-radnika)] text-sm text-text-secondary/60">
        <span className="mr-2 inline-block size-1 h-1 min-w-1 rounded-full bg-text-secondary/60"></span>
        {testimonial.date}
      </p>
      <div className="mt-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-dark-azure/10">
        <span className="font-[family-name:var(--font-radnika)] text-sm font-medium text-dark-azure">
          {getInitials(testimonial.name)}
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);

  return (
    <section className="py-16 lg:py-24">
      {/* Section Header */}
      <div className="mx-auto mb-8 flex max-w-7xl items-start justify-between px-6 lg:px-8">
        <div>
          <p className="mb-4 font-[family-name:var(--font-radnika)] text-sm text-dark-azure">
            •  Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.04em] text-text-primary sm:text-4xl lg:text-5xl">
            What Teams Say
          </h2>
        </div>
        <a
          href="#"
          className="mt-6 inline-block rounded-full border border-yellow-green bg-yellow-green px-6 py-3 font-[family-name:var(--font-radnika)] text-sm font-medium text-text-primary transition-colors hover:bg-yellow-green/40"
        >
          Contact Us
        </a>
      </div>

      {/* Testimonials Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* First Row */}
        <div className="relative border-t border-text-secondary/20">
          {/* Vertical divider lines */}
          <div className="absolute bottom-0 left-1/4 top-0 hidden w-px bg-text-secondary/20 lg:block"></div>
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-text-secondary/20 lg:block"></div>
          <div className="absolute bottom-0 left-3/4 top-0 hidden w-px bg-text-secondary/20 lg:block"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {firstRow.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`py-8 ${index > 0 ? "lg:pl-8" : ""} ${index < 3 ? "lg:pr-8" : ""}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative border-t border-text-secondary/20">
          {/* Vertical divider lines */}
          <div className="absolute bottom-0 left-1/4 top-0 hidden w-px bg-text-secondary/20 lg:block"></div>
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-text-secondary/20 lg:block"></div>
          <div className="absolute bottom-0 left-3/4 top-0 hidden w-px bg-text-secondary/20 lg:block"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {secondRow.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`py-8 ${index > 0 ? "lg:pl-8" : ""} ${index < 3 ? "lg:pr-8" : ""}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom border line */}
        <div className="border-t border-text-secondary/20"></div>
      </div>
    </section>
  );
}
