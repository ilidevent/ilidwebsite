import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers ILID 2025",
  description: "Meet the inspiring speakers and facilita of ILID 2025—renowned industry experts, thought leaders, and innovators shaping the future of infrastructure. Gain insights, explore solutions, and connect with visionaries driving sustainable development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
