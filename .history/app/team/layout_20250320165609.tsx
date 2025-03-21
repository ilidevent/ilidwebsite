import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ILID 2025 Team | Innovation Lab for Infrastructure Development",
  description: "Explore the detailed agenda for ILID 2025 — a transformative four-day event featuring the ILID Summit, hands-on Innovation Lab, and dynamic Pitch Contest. Discover how STEM students and industry experts collaborate to tackle Cameroon’s critical infrastructure challenges with sustainable, actionable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
