import Image from "next/image";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-8 py-20 lg:px-16 lg:py-28">
      {/* Background logo - blown up and angled */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* <div className="pointer-events-none absolute right-[15%] inset-y-0 flex items-center"> */}
        <Image
          src="/logo-icon_lg.svg"
          alt=""
          width={512}
          height={751}
          className="h-[140%] w-auto rotate-0 opacity-[0.04] brightness-0 invert"
          aria-hidden="true"
        />
      </div>

      <div className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.02em] text-white sm:text-4xl lg:text-5xl">
          Have questions?
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-radnika)] text-base leading-relaxed text-white/90 lg:text-lg">
          We&apos;d love to hear from you.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="rounded-full bg-yellow-green px-8 py-3.5 font-[family-name:var(--font-radnika)] text-sm font-medium text-charcoal transition-all hover:bg-yellow-green/90 hover:shadow-lg hover:shadow-yellow-green/25"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
