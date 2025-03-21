import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ILID 2025 Partners | Innovation Lab for Infrastructure Development",
  description: "Join our network of visionary partners and sponsors at ILID 2025. Discover how your support can empower STEM students, drive innovative solutions for Cameroon’s infrastructure challenges, and foster sustainable community development. Partner with us to shape a resilient future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
