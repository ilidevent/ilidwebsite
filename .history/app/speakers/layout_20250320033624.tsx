import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ILID 2025 Speakers & Facilitators | Innovation Lab for Infrastruc",
  description: "Meet the inspiring speakers and facilitators of ILID 2025—renowned industry experts, thought leaders, and innovators shaping the future of infrastructure. Gain insights, explore solutions, and connect with visionaries driving sustainable development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
