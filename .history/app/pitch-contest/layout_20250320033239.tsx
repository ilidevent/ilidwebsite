import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ILID 2025 Pitch Contest | Innovation Lab for Infrastructure Development",
  description: "Showcase your breakthrough ideas at the ILID 2025 Pitch Contest. Compete before industry experts, investors, and visionary leaders for seed funding, mentorship, and the chance to transform Cameroon’s infrastructure landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
