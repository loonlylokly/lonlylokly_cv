import type { Metadata } from "next";
import "@/shared/lib/styles/globals.css";
import { Fondamento } from "@/shared/lib/styles/fonts";

export const metadata: Metadata = {
  title: "My CV",
  description: "Lonlylokly's CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Fondamento.className}>{children}</body>
    </html>
  );
}
