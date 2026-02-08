export function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-charcoal px-8 py-12 lg:px-16 lg:py-16">
          <div className="text-center">
            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.02em] text-white sm:text-4xl lg:text-5xl">
              Have questions?
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-radnika)] text-base leading-relaxed text-white/70 lg:text-lg">
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
        </div>
      </div>
    </section>
  );
}
