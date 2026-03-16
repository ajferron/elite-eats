"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LOGIN_LINK = "https://eliteeatsinc.com/";
const SIGNUP_LINK = "https://eliteeatsinc.com/";

const NAV_LINKS = [
  { label: "Getting Started", href: "/getting-started" },
  { label: "About Us", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Our Partners", target: '_blank', href: "https://www.canva.com/design/DAG-bMhgxvo/-w_KamgpTQ1V1dAm0TD0Ng/view?utm_content=DAG-bMhgxvo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc82324a515" },
  { label: "Contact", href: "/contact" },
];

const linkColor = "text-text-secondary hover:text-text-primary";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-stone/20">
      <div className="container-section relative">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Elite Eats"
              width={32}
              height={40}
              priority
              className="logo-adaptive"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex md:items-center md:gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.target}
                className={`font-sans text-md transition-colors ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="hidden lg:flex md:items-center md:gap-6">
            <Link
              href={LOGIN_LINK}
              target="_blank"
              className={`font-sans text-md transition-colors ${linkColor}`}
            >
              Log In
            </Link>
            <Link
              href={SIGNUP_LINK}
              target="_blank"
              className="rounded-full px-6 py-2.5 font-sans text-md transition-all bg-charcoal text-white hover:bg-dark-azure/90"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-text-secondary"
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
          <div className="lg:hidden py-6 border-t border-stone/20 bg-background/90 backdrop-blur-md -mx-6 px-6">
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
              <div className="flex flex-col gap-4 pt-5 border-t border-stone/20">
                <Link
                  href={LOGIN_LINK}
                  target="_blank"
                  className={`font-sans text-base ${linkColor}`}
                >
                  Log In
                </Link>
                <Link
                  href={SIGNUP_LINK}
                  target="_blank"
                  className="rounded-full px-5 py-2.5 text-center font-sans text-sm bg-dark-azure text-white"
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
