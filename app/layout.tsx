import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokkho Academic and IT Institute - Where Knowledge Meets Technology",
  description: "Premier education center in Demra, Dhaka offering academic coaching (Class 6-12) and comprehensive IT training programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
