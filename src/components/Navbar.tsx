"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-light-orange">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-boston-angel)] text-xl font-bold tracking-tight text-zinc-900">
              Elite Eats
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600"
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              About
            </Link>
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              For Teams
            </Link>
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Partners
            </Link>
            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex items-center gap-1 font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                Pages
                <svg
                  className={`h-4 w-4 transition-transform ${pagesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {pagesOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                  <Link
                    href="#"
                    className="block px-4 py-2 font-[family-name:var(--font-radnika)] text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 font-[family-name:var(--font-radnika)] text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    Services
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 font-[family-name:var(--font-radnika)] text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    Events
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Cart & CTA */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Cart (0)
            </Link>
            <Link
              href="#"
              className="rounded-full bg-zinc-900 px-6 py-2.5 font-[family-name:var(--font-radnika)] text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-zinc-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-100 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-900"
              >
                Home
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600 hover:text-zinc-900"
              >
                About
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600 hover:text-zinc-900"
              >
                For Teams
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600 hover:text-zinc-900"
              >
                Partners
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600 hover:text-zinc-900"
              >
                Blog
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-zinc-100">
                <Link
                  href="#"
                  className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600"
                >
                  Cart (0)
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-zinc-900 px-5 py-2.5 text-center font-[family-name:var(--font-radnika)] text-sm font-medium text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
