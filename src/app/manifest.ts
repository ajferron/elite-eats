import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elite Eats",
    short_name: "Elite Eats",
    description:
      "Sports nutrition catering marketplace for professional sports teams",
    start_url: "/",
    display: "browser",
    background_color: "#F5F3EE",
    theme_color: "#084664",
    icons: [
      { src: "/icon.png", sizes: "140x153", type: "image/png" },
    ],
  };
}
