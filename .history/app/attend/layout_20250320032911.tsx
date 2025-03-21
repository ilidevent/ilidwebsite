import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attend ILID 2025 | Innovation Lab for Infrastructure Development",
  description: "Secure your spot at ILID 2025, a transformative four-day event where STEM students and professionals unite to tackle Cameroon’s infrastructure challenges. Join us at the National Advanced School of Public Works to gain hands-on experience, network with industry experts, and become part of a movement building resilient, sustainable communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
