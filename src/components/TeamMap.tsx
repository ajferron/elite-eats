"use client";

import { USMap } from "./USMap";
import { PARTNERS_PAGE } from "@/lib/urls";

export function TeamMap() {
  return (
    <section className="overflow-hidden bg-dark-azure py-14 lg:py-8">
      <div className="container-section">
        <div className="grid items-center gap-8 overflow-hidden lg:grid-cols-4 lg:gap-0">
          {/* Text Content */}
          <div>
            <p className="mb-3 label-section text-white/80">Coverage</p>
            <h2 className="font-sans text-5xl hidden lg:block font-medium -tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
              Nationwide<br />Fueling<br />Partners
            </h2>
            <h2 className="font-sans text-5xl lg:hidden font-medium -tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
              Nationwide Fueling Partners
            </h2>

            <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-white/90 lg:text-lg">
              Our team vetted fueling partners specialize in athlete-specific
              catering, ensuring consistent quality, nutritional precision, and
              operational reliability. We have you covered with over 870 partner
              locations across all major pro team cities.
            </p>

            <div className="mt-10">
              <a target="_blank" href={PARTNERS_PAGE} className="btn-primary px-8">
                See Our Partners
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative -mx-6 lg:col-span-3 lg:-my-12 lg:-mr-8 lg:mx-0">
            <USMap id="section" />
          </div>
        </div>
      </div>
    </section>
  );
}
