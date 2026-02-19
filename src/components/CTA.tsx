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
        <h2 className="heading-section mx-auto max-w-2xl text-white">
          Have questions?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90 lg:text-lg">
          We&apos;d love to hear from you.
        </p>
        <div className="mt-10">
          <a href="#" className="btn-primary px-8">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
