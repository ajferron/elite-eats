import Image from "next/image";
import Link from "next/link";

export function GettingStartedHero() {
  return (
    <section className="relative min-h-[50vh] w-full pt-20">
      {/* Background image */}
      <Image
        src="/images/getting-started/getting-started_1920.png"
        alt="Professional sports stadium"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/30" />

      {/* Content */}
      <div className="container-section relative z-10 flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
        <h1 className="font-sans text-5xl font-medium -tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
          Getting Started
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#"
            className="rounded-full border border-white/60 px-6 py-3 font-sans text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/90 sm:text-base"
          >
            I&apos;m a Team
          </Link>
          <Link
            href="#"
            className="rounded-full border border-white/60 px-6 py-3 font-sans text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/90 sm:text-base"
          >
            I&apos;m a Fueling Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
