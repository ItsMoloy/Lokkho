import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokkho Academic & IT Institute | Where Knowledge Meets Technology",
  description: "Premier education center in Demra, Dhaka offering quality academic coaching for Class 6-12 and professional IT training.",
  keywords: "Lokkho Institute, Academic Coaching Demra, IT Training Dhaka, Web Development Course Demra, Science Coaching Dhaka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
