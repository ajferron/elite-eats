"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Getting Started
            </Link>
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Press
            </Link>
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Log In
            </Link>
            <Link
              href="#"
              className="rounded-full bg-zinc-900 px-6 py-2.5 font-[family-name:var(--font-radnika)] text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Sign Up
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
                className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600 hover:text-zinc-900"
              >
                Getting Started
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600 hover:text-zinc-900"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600 hover:text-zinc-900"
              >
                Press
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600 hover:text-zinc-900"
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-zinc-100">
                <Link
                  href="#"
                  className="font-[family-name:var(--font-radnika)] text-base font-medium text-zinc-600 hover:text-zinc-900"
                >
                  Log In
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-zinc-900 px-5 py-2.5 text-center font-[family-name:var(--font-radnika)] text-sm font-medium text-white"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
