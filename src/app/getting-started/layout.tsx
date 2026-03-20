import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Join Elite Eats as a professional sports team or fueling partner. Discover why 150+ teams and 870+ vendors trust our marketplace for athlete catering.",
  alternates: { canonical: "/getting-started" },
  openGraph: {
    title: "Get Started with Elite Eats",
    description:
      "Register your team or become a fueling partner on the leading sports nutrition catering marketplace.",
    url: "/getting-started",
  },
};

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
