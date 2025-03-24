import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";


const regular = localFont({
  src: "./fonts/SF-Pro-Display-Regular.ttf",
  variable: "--regular-font",
});

const medium = localFont({
  src: "./fonts/SF-Pro-Display-Medium.ttf",
  variable: "--medium-font",
});

const semibold = localFont({
  src: "./fonts/SF-Pro-Display-Semibold.ttf",
  variable: "--semibold-font",
});

const heavy = localFont({
  src: "./fonts/SF-Pro-Display-Heavy.ttf",
  variable: "--heavy-font",
});

const script = localFont({
  src: "./fonts/VT323-Regular.ttf",
  variable: "--script-font",
});

export const metadata: Metadata = {
  title: "ILID 2025 - Innovation Lab for Infrastructure Development.",
  description:
    "ILID (Innovation Lab for Infrastructure Development) is a transformative four-day event empowering STEM students to tackle Cameroon’s critical infrastructure challenges. Drawing on expert summits, hands-on innovation labs, and competitive pitch contests, ILID drives sustainable solutions in housing, transportation, energy, and sanitation to build resilient communities.",
  twitter: {
    card: "summary_large_image",
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
        className={`${regular.variable} ${medium.variable} ${semibold.variable} ${heavy.variable} ${script.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
