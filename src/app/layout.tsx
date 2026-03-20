import type { Metadata } from "next";
import { bostonAngel, haveHeartTwo, radnikaNext } from "@/fonts";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/jsonld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elite-eats.com"),
  title: {
    default: "Elite Eats | Sports Nutrition Catering Marketplace",
    template: "%s | Elite Eats",
  },
  description:
    "Elite Eats connects 150+ professional sports teams across 8 leagues with 870+ vetted fueling partners. The catering marketplace built for athlete nutrition.",
  keywords: [
    "sports nutrition catering",
    "athlete catering",
    "professional sports catering",
    "team catering marketplace",
    "fueling partners",
    "sports dietitian",
    "athlete meal prep",
    "team nutrition",
  ],
  openGraph: {
    type: "website",
    siteName: "Elite Eats",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bostonAngel.variable} ${haveHeartTwo.variable} ${radnikaNext.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              getOrganizationSchema(),
              getWebSiteSchema(),
            ]),
          }}
        />
      </body>
    </html>
  );
}
