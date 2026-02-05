import localFont from "next/font/local";

export const bostonAngel = localFont({
  src: [
    { path: "./BostonAngel-Light.woff2", weight: "300", style: "normal" },
    { path: "./BostonAngel-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-boston-angel",
  display: "swap",
});

export const haveHeartTwo = localFont({
  src: "./HaveHeartTwo.woff2",
  variable: "--font-have-heart",
  display: "swap",
});

export const radnikaNext = localFont({
  src: [
    { path: "./RadnikaNext-Light.woff2", weight: "300", style: "normal" },
    { path: "./RadnikaNext-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./RadnikaNext-Regular.woff2", weight: "400", style: "normal" },
    { path: "./RadnikaNext-Italic.woff2", weight: "400", style: "italic" },
    { path: "./RadnikaNext-Medium.woff2", weight: "500", style: "normal" },
    { path: "./RadnikaNext-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./RadnikaNext-Bold.woff2", weight: "700", style: "normal" },
    { path: "./RadnikaNext-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./RadnikaNext-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./RadnikaNext-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "./RadnikaNext-Black.woff2", weight: "900", style: "normal" },
    { path: "./RadnikaNext-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-radnika",
  display: "swap",
});
