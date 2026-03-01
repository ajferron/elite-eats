import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { Fragment } from "react/jsx-runtime";

const features = [
  {
    id: 1,
    number: "01",
    headline: "The Problem",
    subheadline: [
      'Trusted fueling partners with athlete catering experience are hard to locate & evaluate.',
      'Placing athlete catering orders is complicated & time intensive.',
      'No online marketplace exclusively for the unique needs of athlete catering.',
    ],
    image: "/images/ee-advantage-A_1280.jpg",
  },
  {
    id: 1,
    number: "02",
    headline: "Our Solution",
    subheadline: [
      'Only vetted & team recommended fueling partners with athlete catering experience are invited to join the platform.',
      'Our platform streamlines and organizes your ordering, expenses & communication.',
      'Created by a Sport RD.  Platform is specifically designed for athlete catering.',
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
            <h3 className="mt-10 font-sans text-3xl font-medium -tracking-[0.02em] text-white lg:text-4xl">
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
