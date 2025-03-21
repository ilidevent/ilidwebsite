import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ILID 2025 Team | Innovation Lab for Infrastructure Development",
  description: "Get to know the team working collaboratively behind the scenes to help overcome infrastructure problems and foster sustainable progress for our communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
