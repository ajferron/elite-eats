import Image from "next/image";
import Link from "next/link";

const navigation = {
  platform: [
    { name: "Getting Started", href: "#" },
    { name: "For Teams", href: "#" },
    { name: "For Vendors", href: "#" },
    { name: "Pricing", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Logo and tagline */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Elite Eats"
                width={120}
                height={30}
                className="brightness-0 invert"
              />
            </Link>
            <p className="mt-4 font-[family-name:var(--font-radnika)] text-sm leading-relaxed text-white/50">
              The sports nutrition catering marketplace for professional teams.
            </p>
          </div>

          {/* Navigation columns */}
          <div>
            <h3 className="font-[family-name:var(--font-radnika)] text-sm font-medium text-white">
              Platform
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-[family-name:var(--font-radnika)] text-sm text-white/50 transition-colors hover:text-white/80"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-radnika)] text-sm font-medium text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-[family-name:var(--font-radnika)] text-sm text-white/50 transition-colors hover:text-white/80"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-radnika)] text-sm font-medium text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-[family-name:var(--font-radnika)] text-sm text-white/50 transition-colors hover:text-white/80"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-radnika)] text-sm font-medium text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-[family-name:var(--font-radnika)] text-sm text-white/50 transition-colors hover:text-white/80"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="font-[family-name:var(--font-radnika)] text-xs text-white/40">
            &copy; {new Date().getFullYear()} Elite Eats Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
