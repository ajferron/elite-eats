import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const features = [
  {
    id: 1,
    number: "01",
    headline: "Vetted Vendors",
    subheadline: "Every partner is credentialed, experienced, and team-recommended",
    stats: [
      { value: "760+", label: "Fueling Partners" },
      { value: "100%", label: "Vetted & Verified" },
    ],
    tags: ["Credentialed", "Experienced", "Team-Approved"],
    image: "/images/value-props/feature-1.jpg",
  },
  {
    id: 2,
    number: "02",
    headline: "One Platform, Zero Chaos",
    description:
      "Orders, dietary specs, schedules—managed in one place. No more spreadsheets, email chains, or miscommunication.",
    tags: ["Orders", "Dietary Specs", "Schedules"],
    image: "/images/value-props/feature-2.jpg",
  },
  {
    id: 3,
    number: "03",
    headline: "Built by a Sports RD",
    description:
      "Designed around how performance nutrition actually works. Created by dietitians who've spent 18+ years feeding elite athletes.",
    tags: ["Performance Focus", "Athlete-First"],
    image: "/images/value-props/feature-3.jpg",
    founder: {
      name: "Jennifer Gibson MS, RD, CSSD",
      title: "Co-founder and CEO",
      experience: "18 Years Performance Dietitian",
    },
  },
];

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[1] | (typeof features)[2];
}) {
  const founder = "founder" in feature ? feature.founder : undefined;

  return (
    <div className="group overflow-hidden rounded-3xl">
      <div className="relative h-56 overflow-hidden lg:h-64">
        <Image
          src={feature.image}
          alt={feature.headline}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <span className="badge-accent">{feature.number}</span>
          {founder && (
            <div className="rounded-lg bg-white/95 px-4 py-2.5 text-right backdrop-blur-sm">
              <p className="text-xs font-medium text-text-primary">
                {founder.name}
              </p>
              <p className="text-[11px] text-text-secondary">
                {founder.experience}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-b-3xl border border-stone/30 p-6 lg:p-8">
        <h3 className="font-sans text-2xl font-medium -tracking-[0.02em] text-text-primary">
          {feature.headline}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-text-tertiary">
          {feature.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {feature.tags.map((tag) => (
            <span key={tag} className="tag-azure">
              <span className="h-1 w-1 rounded-full bg-dark-azure"></span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ValueProposition() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-section mb-12 lg:mb-16">
        <SectionHeader
          label="Why Elite Eats"
          heading="The Elite Eats Advantage"
        />
      </div>

      <div className="container-section">
        {/* Feature 1 - Hero Card with dark-azure anchor */}
        <div className="mb-6 overflow-hidden rounded-3xl bg-dark-azure">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-between p-6 lg:p-8">
              <div>
                <span className="badge-accent px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-charcoal"></span>
                  {features[0].number}
                </span>
                <h3 className="mt-6 font-sans text-3xl font-medium -tracking-[0.02em] text-white lg:text-4xl">
                  {features[0].headline}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
                  {features[0].subheadline}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {features[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-12 flex gap-12">
                {features[0].stats?.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-sans text-4xl font-medium text-yellow-green lg:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-[480px]">
              <Image
                src={features[0].image}
                alt={features[0].headline}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features 2 & 3 - Two-column cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          <FeatureCard feature={features[1]} />
          <FeatureCard feature={features[2]} />
        </div>
      </div>
    </section>
  );
}
