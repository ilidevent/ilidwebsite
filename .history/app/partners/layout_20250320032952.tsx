import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ILID 2025 Partners | Innovation Lab for Infrastructure Development",
  description: "From strategy to design, we craft brands that elevate visibility, build trust, and drive industry success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
