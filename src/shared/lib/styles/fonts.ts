import localFont from "next/font/local";

export const Jaro = localFont({
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: false,
  src: [
    {
      path: "../../../../public/fonts/Jaro/Jaro-Regular.woff2",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-jaro",
});

export const GrenzeGotisch = localFont({
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: false,
  src: [
    {
      path: "../../../../public/fonts/GrenzeGotisch/GrenzeGotisch_VariableFont.woff2",
    },
  ],
  variable: "--font-grenze-gotisch",
});

export const Fondamento = localFont({
  display: "swap",
  fallback: ["serif"],
  preload: false,
  src: [
    {
      path: "../../../../public/fonts/Fondamento/Fondamento-Regular.woff2",
    },
  ],
  variable: "--font-fondamento",
});
