import Image from "next/image";

const logos = [
  { src: "/images/trust-bar/partner-logo-1.svg", alt: "Partner 1" },
  { src: "/images/trust-bar/partner-logo-2.svg", alt: "Partner 2" },
  { src: "/images/trust-bar/partner-logo-3.svg", alt: "Partner 3" },
  { src: "/images/trust-bar/partner-logo-4.svg", alt: "Partner 4" },
  { src: "/images/trust-bar/partner-logo-5.svg", alt: "Partner 5" },
  { src: "/images/trust-bar/partner-logo-6.svg", alt: "Partner 6" },
  { src: "/images/trust-bar/partner-logo-7.svg", alt: "Partner 7" },
  { src: "/images/trust-bar/partner-logo-8.svg", alt: "Partner 8" },
];

export function TrustBar() {
  return (
    <section className="w-full overflow-hidden bg-background py-8">
      <div className="flex animate-scroll">
        {/* Render logos twice for seamless infinite loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-6 flex h-8 w-24 flex-shrink-0 items-center justify-center grayscale opacity-60 transition-all hover:opacity-100 hover:grayscale-0 lg:mx-10 lg:h-10 lg:w-32"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={64}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
