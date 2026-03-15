import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { Fragment } from "react/jsx-runtime";

const features = [
  {
    id: 1,
    number: "01",
    headline: "The Problem",
    subheadline: [
      'Finding trusted athlete catering partners is difficult, and evaluating their experience takes time. Placing team meal orders is complex, involves multiple steps, and can be a major drain on performance staff. On top of that, there is no centralized marketplace built specifically to meet the unique needs of athlete catering, leaving teams to manage a fragmented and inefficient process.',
    ],
    image: "/images/ee-advantage-A_1280.jpg",
  },
  {
    id: 1,
    number: "02",
    headline: "Our Solution",
    subheadline: [
      'Elite Eats connects teams with only vetted, team-recommended fueling partners who have proven experience in athlete catering. Our platform streamlines and organizes orders, expenses, and communication, making the process simple and efficient. Built by a sport dietitian, it’s designed specifically to meet the unique demands of athlete catering.',
    ],
    image: "/images/ee-advantage-B_720.jpg",
  },
];

function LargeFeatureCard({
  feature,
  flipped = false
}: {
  feature: (typeof features)[0] | (typeof features)[1];
  flipped?: boolean;
}) {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl bg-darker-azure">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-between items-start p-6 lg:p-8">
          <span className="badge-accent px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-charcoal"></span>
            {feature.number}
          </span>
          <div>
            <h3 className="mt-10 font-sans text-3xl font-medium -tracking-[0.08em] text-white lg:text-4xl">
              {feature.headline}
            </h3>
            <div className="mt-4 text-lg text-white/85">
              {feature.subheadline.map((line, index) => (
                <Fragment key={index}>
                  <p className="mb-2 leading-relaxed">{line}</p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className={`relative min-h-[320px] lg:min-h-[400px]${!flipped ? " lg:order-first" : ""}`}>
          <Image
            src={feature.image}
            alt={feature.headline}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
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
        <LargeFeatureCard feature={features[0]} flipped/>
        <LargeFeatureCard feature={features[1]} />

        {/* Features 2 & 3 - Two-column cards */}
        {/* <div className="grid gap-6 lg:grid-cols-2">
          <FeatureCard feature={features[2]} />
          <FeatureCard feature={features[3]} />
        </div> */}
      </div>
    </section>
  );
}
