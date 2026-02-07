import Image from "next/image";

const logos = [
  { src: "/images/trust-bar/nfl-1.webp", alt: "NFL Team" },
  { src: "/images/trust-bar/mlb-1.svg", alt: "MLB Team" },
  { src: "/images/trust-bar/mls-1.webp", alt: "MLS Team" },
  { src: "/images/trust-bar/nfl-2.webp", alt: "NFL Team" },
  { src: "/images/trust-bar/mlb-2.svg", alt: "MLB Team" },
  { src: "/images/trust-bar/mls-2.webp", alt: "MLS Team" },
  { src: "/images/trust-bar/nfl-3.webp", alt: "NFL Team" },
  { src: "/images/trust-bar/mlb-3.svg", alt: "MLB Team" },
  { src: "/images/trust-bar/mls-3.webp", alt: "MLS Team" },
  { src: "/images/trust-bar/nfl-4.webp", alt: "NFL Team" },
  { src: "/images/trust-bar/mlb-4.svg", alt: "MLB Team" },
  { src: "/images/trust-bar/mls-4.webp", alt: "MLS Team" },
];

export function TrustBar() {
  return (
    <section className="w-full overflow-hidden py-12 lg:py-16">
      <div className="flex animate-scroll">
        {/* Render logos twice for seamless infinite loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-3 flex h-12 w-32 flex-shrink-0 items-center justify-center opacity-60 grayscale-[90%] transition-all hover:opacity-85 hover:grayscale-0 lg:mx-6 lg:h-14 lg:w-40"
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
