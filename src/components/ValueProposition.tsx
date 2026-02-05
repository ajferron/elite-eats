const features = [
  {
    id: 1,
    number: "/001",
    headline: "Vetted Vendors",
    tags: ["Credentialed", "Experienced", "Team-Approved"],
    description:
      "Every partner is credentialed, experienced, and team-recommended.",
    image: "/images/value-prop/feature-1.jpg",
  },
  {
    id: 2,
    number: "/002",
    headline: "One Platform, Zero Chaos",
    tags: ["Orders", "Dietary Specs", "Schedules"],
    description: "Orders, dietary specs, schedules—managed in one place.",
    image: "/images/value-prop/feature-2.jpg",
  },
  {
    id: 3,
    number: "/003",
    headline: "Built by a Sports RD",
    tags: ["18+ Years Experience", "Performance Focus", "Athlete-First"],
    description:
      "Designed around how performance nutrition actually works.",
    image: "/images/value-prop/feature-3.jpg",
  },
];

export function ValueProposition() {
  return (
    <section className="py-16 lg:py-24">
      {/* Section Header */}
      <div className="mx-auto mb-8 max-w-7xl px-6 lg:px-8">
        <p className="mb-4 font-[family-name:var(--font-radnika)] text-sm text-text-secondary">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-dark-azure"></span>
          Why Elite Eats
        </p>
        <h2 className="font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.04em] text-text-primary sm:text-4xl lg:text-5xl">
          The Elite Eats Advantage
        </h2>
      </div>

      {/* Features Container with border */}
      <div className="bg-[#f0ebe5]">
        {/* Full-width border with + symbols */}
        <div className="relative w-full border-t border-text-secondary/20">
          {/* <div className="mx-auto flex max-w-7xl justify-around px-6 lg:px-8">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="-mt-[15px] px-2 font-[family-name:var(--font-radnika)] text-lg text-text-secondary/30"
              >
                +
              </span>
            ))}
          </div> */}
        </div>

        <div className="px-6 pb-6 pt-8 lg:px-8 lg:pb-10 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`grid gap-6 ${
                  index % 2 === 0
                    ? "lg:grid-cols-[2fr_1fr]"
                    : "lg:grid-cols-[1fr_2fr]"
                }`}
              >
                {/* Content Card */}
                <div className={`flex flex-col justify-between rounded-2xl bg-white p-5 lg:p-6 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div>
                    <h3 className="font-display text-2xl font-medium -tracking-[0.02em] text-text-primary lg:text-3xl">
                      {feature.headline}
                    </h3>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full border border-text-secondary/20 px-4 py-2 font-[family-name:var(--font-radnika)] text-sm text-text-secondary"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-green"></span>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-[family-name:var(--font-radnika)] text-base leading-relaxed text-text-secondary/70 lg:text-lg">
                      {feature.description}
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-block rounded-full bg-yellow-green px-6 py-3 font-[family-name:var(--font-radnika)] text-sm font-medium text-text-primary transition-colors hover:bg-yellow-green/80"
                    >
                      More Details
                    </a>
                  </div>
                </div>

                {/* Image Card */}
                <div className={`relative flex flex-col rounded-2xl bg-white p-4 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-dark-azure/10">
                    {/* Placeholder - replace with actual image */}
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-[family-name:var(--font-radnika)] text-sm text-text-secondary/40">
                        Image Placeholder
                      </span>
                    </div>
                    {/* Uncomment when images are available:
                    <Image
                      src={feature.image}
                      alt={feature.headline}
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  <p className="mt-12 font-[family-name:var(--font-radnika)] text-sm text-text-secondary/50">
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
      <div className="h-6 bg-[#f0ebe5]">
        <div className="h-full border-t border-text-secondary/20 w-full rounded-b-3xl bg-background"></div>
      </div>
    </section>
  );
}
