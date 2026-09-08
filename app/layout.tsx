import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akari's Little World",
  description: "A little digital world by Akari.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}