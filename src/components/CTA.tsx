export function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl bg-cream px-8 py-16 text-center lg:px-16 lg:py-20">
          <p className="mb-3 font-[family-name:var(--font-radnika)] text-sm tracking-wide text-text-tertiary">
            Ready to elevate your team&apos;s nutrition?
          </p>
          <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.02em] text-text-primary sm:text-4xl lg:text-5xl">
            Start fueling wins today
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-radnika)] text-base leading-relaxed text-text-tertiary lg:text-lg">
            Join 150+ professional teams already using Elite Eats to streamline their athlete catering.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-charcoal px-8 py-3.5 font-[family-name:var(--font-radnika)] text-sm text-white transition-colors hover:bg-text-primary"
            >
              Get Started
            </a>
            <a
              href="#"
              className="rounded-full border border-stone/30 px-8 py-3.5 font-[family-name:var(--font-radnika)] text-sm text-text-secondary transition-colors hover:border-stone/50 hover:text-text-primary"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
