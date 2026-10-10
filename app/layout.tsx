
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MK Floral | Wedding Florals & Luxury Proposal Styling",
  description:
    "Independent website concept for MK Floral, offering custom wedding floral designs and luxury proposal styling.",
  robots: {
    index: false,
    follow: false,
  },
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
