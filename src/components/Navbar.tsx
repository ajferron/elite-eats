"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PLATFORM_LOGIN, PLATFORM_SIGNUP, PARTNERS_PAGE } from "@/lib/urls";

const LOGIN_LINK = PLATFORM_LOGIN;
const SIGNUP_LINK = PLATFORM_SIGNUP;

const NAV_LINKS = [
  { label: "Getting Started", href: "/getting-started" },
  { label: "About Us", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Our Partners", target: '_blank', href: PARTNERS_PAGE },
  { label: "Contact", href: "/contact" },
];

const linkColor = "text-text-secondary hover:text-text-primary";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!menuRef.current || !menuItemsRef.current) return;

    const items = menuItemsRef.current.children;

    if (mobileMenuOpen) {
      // Kill any existing timeline
      tlRef.current?.kill();

      const tl = gsap.timeline();
      tlRef.current = tl;

      // Show container, then animate it open
      gsap.set(menuRef.current, { display: "block" });
      tl.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      // Stagger in the menu items
      tl.fromTo(
        items,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out" },
        "-=0.2"
      );
    } else {
      // Animate close
      tlRef.current?.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          if (menuRef.current) {
            gsap.set(menuRef.current, { display: "none" });
          }
        },
      });
      tlRef.current = tl;

      tl.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-stone/20">
      <div className="container-section relative">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Elite Eats"
              width={150}
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
        <div
          ref={menuRef}
          className="lg:hidden overflow-hidden border-t border-stone/20 bg-background/90 backdrop-blur-md -mx-6 px-6"
          style={{ display: "none" }}
        >
          <div ref={menuItemsRef} className="flex flex-col gap-5 py-6">
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
      </div>
    </nav>
  );
}
