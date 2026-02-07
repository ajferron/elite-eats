import Image from "next/image";

const features = [
  {
    id: 1,
    number: "/001",
    headline: "Vetted Vendors",
    tags: ["Credentialed", "Experienced", "Team-Approved"],
    description:
      "Every partner is credentialed, experienced, and team-recommended.",
    image: "/images/value-props/feature-1.jpg",
  },
  {
    id: 2,
    number: "/002",
    headline: "One Platform, Zero Chaos",
    tags: ["Orders", "Dietary Specs", "Schedules"],
    description: "Orders, dietary specs, schedules—managed in one place.",
    image: "/images/value-props/feature-2.jpg",
  },
  {
    id: 3,
    number: "/003",
    headline: "Built by a Sports RD",
    tags: ["Performance Focus", "Athlete-First"],
    description:
      "Designed around how performance nutrition actually works.",
    image: "/images/value-props/feature-3.jpg",
  },
];

export function ValueProposition() {
  return (
    <section className="py-20 lg:py-28">
      {/* Section Header */}
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:mb-16 lg:px-8">
        <p className="mb-3 font-[family-name:var(--font-radnika)] text-sm tracking-wide text-text-tertiary">
          Why Elite Eats
        </p>
        <h2 className="font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.02em] text-text-primary sm:text-4xl lg:text-5xl">
          The Elite Eats Advantage
        </h2>
      </div>

      {/* Features Container - cream surface */}
      <div className="bg-cream">
        <div className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            {/* Feature Cards */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`grid gap-6 ${
                    index % 2 === 0
                      ? "lg:grid-cols-[6fr_4fr]"
                      : "lg:grid-cols-[4fr_6fr]"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex flex-col justify-between rounded-2xl bg-background p-8 lg:p-10 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div>
                      <h3 className="font-[family-name:var(--font-radnika)] text-2xl font-medium -tracking-[0.02em] text-text-primary lg:text-3xl">
                        {feature.headline}
                      </h3>

                      {/* Tags - with azure accent */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {feature.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-full bg-azure/10 px-3 py-1.5 font-[family-name:var(--font-radnika)] text-xs text-text-secondary"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-azure"></span>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="font-[family-name:var(--font-radnika)] text-base leading-relaxed text-text-tertiary lg:text-lg">
                        {feature.description}
                      </p>
                      <a
                        href="#"
                        className="mt-6 inline-block font-[family-name:var(--font-radnika)] text-sm text-text-primary underline underline-offset-4 transition-colors hover:text-text-secondary"
                      >
                        Learn more →
                      </a>
                    </div>
                  </div>

                  {/* Image Card */}
                  <div className={`relative flex flex-col rounded-2xl bg-background p-5 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="relative h-64 w-full overflow-hidden rounded-xl bg-cream-dark lg:h-72">
                      <Image
                        src={feature.image}
                        alt={feature.headline}
                        fill
                        className="object-cover"
                      />
                      {/* Founder overlay for "Built by a Sports RD" */}
                      {feature.id === 3 && (
                        <div className="absolute bottom-3 right-3 rounded-lg border border-stone/20 bg-cream/50 px-4 py-3 text-right shadow-sm backdrop-blur-lg">
                          <p className="font-[family-name:var(--font-radnika)] text-xs font-medium text-text-primary">
                            Jennifer Gibson MS, RD, CSSD
                          </p>
                          <p className="font-[family-name:var(--font-radnika)] text-[11px] text-text-secondary">
                            Co-founder and CEO
                          </p>
                          <p className="font-[family-name:var(--font-radnika)] text-[11px] text-text-secondary">
                            Performance Dietitian, 18 Years Experience
                          </p>
                        </div>
                      )}
                    </div>
                    <p className="mt-auto pt-8 font-[family-name:var(--font-radnika)] text-xs tracking-wider text-stone">
                      {feature.number}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rounded bottom corners overlay */}
      {/* <div className="h-6 bg-[#f0ebe5]">
        <div className="h-full border-t border-text-secondary/20 w-full rounded-b-3xl bg-background"></div>
      </div> */}
    </section>
  );
}
