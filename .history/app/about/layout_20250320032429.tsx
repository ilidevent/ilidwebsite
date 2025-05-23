import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Innovation Lab for Infrastructure Development",
  description: "Learn our story, why not to miss the event premiere, and be part of the movement building resilient communities through innovative action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
