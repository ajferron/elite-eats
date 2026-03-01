"use client";

import { USMap } from "./USMap";

export function TeamMap() {
  return (
    <section className="overflow-hidden bg-dark-azure py-14 lg:py-8">
      <div className="container-section">
        <div className="grid items-center gap-8 lg:grid-cols-4 lg:gap-0">
          {/* Text Content */}
          <div>
            <p className="mb-3 label-section text-white/80">Coverage</p>
            <h2 className="font-sans text-5xl font-medium -tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
              Nationwide<br />Fueling<br />Partners
            </h2>

            <div className="mt-10">
              <a href="#" className="btn-primary px-8">
                See Our Partners
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative w-[112vw] ml-[calc(50%-56vw)] lg:col-span-3 lg:-my-12 lg:-mr-8 lg:ml-0 lg:w-auto">
            <USMap id="section" />
          </div>
        </div>
      </div>
    </section>
  );
}
