import type { Metadata } from "next";
import { bostonAngel, haveHeartTwo, radnikaNext } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Eats",
  description: "Sports nutrition catering marketplace",
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
      </body>
    </html>
  );
}
