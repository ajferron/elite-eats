"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BLUR_STEPS = [
  { blur: 2, stop: "100%" },
  { blur: 4, stop: "80%" },
  { blur: 8, stop: "55%" },
  { blur: 16, stop: "30%" },
];

const NAV_LINKS = [
  { label: "Getting Started", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Press", href: "#" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = isScrolled
    ? "text-text-secondary hover:text-text-primary"
    : "text-white/80 hover:text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background border-b border-stone/20" : ""
      }`}
    >
      {/* Progressive blur background — visible only over hero */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 transition-opacity duration-300"
        style={{ height: "10rem", opacity: isScrolled ? 0 : 1 }}
      >
        {BLUR_STEPS.map((step, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${step.blur}px)`,
              WebkitBackdropFilter: `blur(${step.blur}px)`,
              maskImage: `linear-gradient(to bottom, black 0%, transparent ${step.stop})`,
              WebkitMaskImage: `linear-gradient(to bottom, black 0%, transparent ${step.stop})`,
            }}
          />
        ))}
        {/* Dark tint over hero for contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-section relative">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Elite Eats"
              width={160}
              height={40}
              priority
              className={`transition-all duration-300 ${
                isScrolled ? "logo-adaptive" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans text-sm transition-colors ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="#"
              className={`font-sans text-sm transition-colors ${linkColor}`}
            >
              Log In
            </Link>
            <Link
              href="#"
              className={`rounded-full px-6 py-2.5 font-sans text-sm transition-all ${
                isScrolled
                  ? "bg-charcoal text-white hover:bg-dark-azure/90"
                  : "bg-white text-charcoal hover:bg-white/90"
              }`}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-text-secondary" : "text-white"
            }`}
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
          <div
            className={`md:hidden py-6 ${
              isScrolled
                ? "border-t border-stone/20 bg-background/90 backdrop-blur-md -mx-6 px-6"
                : "border-t border-white/20 bg-charcoal/80 backdrop-blur-md -mx-6 px-6"
            }`}
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-base ${linkColor}`}
                >
                  {link.label}
                </Link>
              ))}
              <div
                className={`flex flex-col gap-4 pt-5 ${
                  isScrolled
                    ? "border-t border-stone/20"
                    : "border-t border-white/20"
                }`}
              >
                <Link
                  href="#"
                  className={`font-sans text-base ${linkColor}`}
                >
                  Log In
                </Link>
                <Link
                  href="#"
                  className={`rounded-full px-5 py-2.5 text-center font-sans text-sm ${
                    isScrolled
                      ? "bg-dark-azure text-white"
                      : "bg-white text-charcoal"
                  }`}
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
