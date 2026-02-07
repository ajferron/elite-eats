const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    quote:
      "Every order feels special—the vendors are outstanding, and the platform truly makes our job easier.",
  },
  {
    id: 2,
    name: "Marcus Chen",
    quote:
      "Elite Eats completely changed our workflow. I'm more confident in our catering than ever before.",
  },
  {
    id: 3,
    name: "Rachel Torres",
    quote:
      "The platform here completely reshaped our operations—my team, focus, and confidence have never been better.",
  },
  {
    id: 4,
    name: "David Williams",
    quote:
      "Every meal feels like more than just catering, with vetted vendors and a network that makes you feel supported.",
  },
  {
    id: 5,
    name: "Jennifer Park",
    quote:
      "The vendor matching was a highlight of my transition—well-organized, efficient, and filled with great partners.",
  },
  {
    id: 6,
    name: "Michael Brooks",
    quote:
      "Joining Elite Eats has given me more than great vendors—it's given me lasting partnerships and peace of mind.",
  },
  {
    id: 7,
    name: "Amanda Foster",
    quote:
      "From premium vendors to seamless ordering, everything about this platform feels first-class yet inviting.",
  },
  {
    id: 8,
    name: "Chris Johnson",
    quote:
      "This platform blends top-notch service with a true sense of community—it's where nutrition meets trust.",
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
      <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-cream">
        <span className="font-[family-name:var(--font-radnika)] text-sm text-text-secondary">
          {getInitials(testimonial.name)}
        </span>
      </div>
      <h3 className="font-[family-name:var(--font-radnika)] text-lg font-medium text-text-primary">
        {testimonial.name}
      </h3>
      <p className="mt-3 font-[family-name:var(--font-radnika)] text-sm leading-relaxed text-text-tertiary">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}

export function Testimonials() {
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);

  return (
    <section className="py-20 lg:py-28">
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
        <a
          href="#"
          className="hidden rounded-full border border-stone/30 px-6 py-3 font-[family-name:var(--font-radnika)] text-sm text-text-secondary transition-colors hover:border-stone/50 hover:text-text-primary sm:inline-block"
        >
          Get in Touch
        </a>
      </div>

      {/* Testimonials Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* First Row */}
        <div className="relative border-t border-stone/20">
          {/* Vertical divider lines */}
          <div className="absolute bottom-0 left-1/4 top-0 hidden w-px bg-stone/20 lg:block"></div>
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-stone/20 lg:block"></div>
          <div className="absolute bottom-0 left-3/4 top-0 hidden w-px bg-stone/20 lg:block"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {firstRow.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`py-10 ${index > 0 ? "lg:pl-8" : ""} ${index < 3 ? "lg:pr-8" : ""}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative border-t border-stone/20">
          {/* Vertical divider lines */}
          <div className="absolute bottom-0 left-1/4 top-0 hidden w-px bg-stone/20 lg:block"></div>
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-stone/20 lg:block"></div>
          <div className="absolute bottom-0 left-3/4 top-0 hidden w-px bg-stone/20 lg:block"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {secondRow.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`py-10 ${index > 0 ? "lg:pl-8" : ""} ${index < 3 ? "lg:pr-8" : ""}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom border line */}
        <div className="border-t border-stone/20"></div>
      </div>
    </section>
  );
}
