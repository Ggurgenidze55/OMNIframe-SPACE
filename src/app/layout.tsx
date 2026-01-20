import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grand Animation Landing",
  description: "Experience the magic of animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
