"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-background transition-all duration-300 ${isScrolled ? "border-b border-stone/20 shadow-sm" : "border-b border-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Elite Eats"
              width={160}
              height={40}
              priority
              className="logo-adaptive"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:gap-10">
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Getting Started
            </Link>
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Press
            </Link>
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="#"
              className="font-[family-name:var(--font-radnika)] text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Log In
            </Link>
            <Link
              href="#"
              className="rounded-full bg-dark-azure px-6 py-2.5 font-[family-name:var(--font-radnika)] text-sm text-white transition-colors hover:bg-dark-azure/90"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-text-secondary"
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
          <div className="md:hidden border-t border-stone/20 py-6">
            <div className="flex flex-col gap-5">
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base text-text-secondary hover:text-text-primary"
              >
                Getting Started
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base text-text-secondary hover:text-text-primary"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base text-text-secondary hover:text-text-primary"
              >
                Press
              </Link>
              <Link
                href="#"
                className="font-[family-name:var(--font-radnika)] text-base text-text-secondary hover:text-text-primary"
              >
                Contact
              </Link>
              <div className="flex flex-col gap-4 pt-5 border-t border-stone/20">
                <Link
                  href="#"
                  className="font-[family-name:var(--font-radnika)] text-base text-text-secondary hover:text-text-primary"
                >
                  Log In
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-dark-azure px-5 py-2.5 text-center font-[family-name:var(--font-radnika)] text-sm text-white"
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
