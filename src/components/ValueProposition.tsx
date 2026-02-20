import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const features = [
  {
    id: 1,
    number: "01",
    headline: "The Marketplace for Pro Sports Nutrition",
    subheadline:
      "Elite Eats connects professional sports teams with vetted fueling partners who understand the demands of athlete nutrition. One platform to find, order, and manage catering—built for the way team dietitians actually work.",
    stats: [
      { value: "150+", label: "Pro Teams" },
      { value: "8", label: "Leagues" },
      { value: "760+", label: "Fueling Partners" },
    ],
    tags: ["Credentialed", "Experienced", "Team-Approved"],
    image: "/images/value-props/feature-1.png",
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
    image: "/images/value-props/feature-3.png",
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
    <div className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl lg:min-h-[480px]">
      {/* Full-bleed image */}
      <Image
        src={feature.image}
        alt={feature.headline}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Top area — badge + founder */}
      <div className="relative z-10 flex items-start justify-between p-5 lg:p-6">
        <span className="badge-accent">{feature.number}</span>
        {founder && (
          <div className="rounded-lg bg-white/90 px-4 py-2.5 text-right backdrop-blur-sm">
            <p className="text-xs font-medium text-text-primary">
              {founder.name}
            </p>
            <p className="text-[11px] text-text-secondary">
              {founder.experience}
            </p>
          </div>
        )}
      </div>

      {/* Spacer pushes glass panel to bottom */}
      <div className="flex-1" />

      {/* Glass panel overlay */}
      <div className="relative z-10 rounded-b-3xl border-t border-white/20 bg-white/20 p-6 backdrop-blur-xl lg:p-8">
        <h3 className="font-sans text-2xl font-medium -tracking-[0.02em] text-white">
          {feature.headline}
        </h3>
        <p className="mt-3 text-md leading-relaxed text-white">
          {feature.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {feature.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-charcoal px-3 py-1.5 text-xs text-white"
            >
              <span className="h-1 w-1 rounded-full bg-white/60"></span>
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
        <div className="mb-6 overflow-hidden rounded-3xl bg-darker-azure">
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
                <p className="mt-4 text-lg leading-relaxed text-white/85">
                  {features[0].subheadline}
                </p>
              </div>
              <div className="mt-12 flex gap-8 lg:gap-12">
                <div className="mt-8 flex flex-wrap gap-2">
                  {features[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 px-3 py-2 text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* {features[0].stats?.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-sans text-3xl text-center font-medium text-yellow-green lg:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-white/80 text-center">{stat.label}</p>
                  </div>
                ))} */}
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
