import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Innovation Lab for Infrastructure Development",
  description: "Learn the  our story, connect with top professionals, and be part of the movement building resilient communities through innovative action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
