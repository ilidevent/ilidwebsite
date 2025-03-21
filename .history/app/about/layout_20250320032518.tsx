import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ILID 2025 - Innovation Lab for Infrastructure Development",
  description: "Learn our story, why not to miss our event premiere, and be part of the movement building resilient communities through innovative action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
