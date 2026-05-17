import type { Metadata } from "next";
import { Geist, Libre_Caslon_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const libreCaslonText = Libre_Caslon_Text({
  weight: ["400", "700"],
  variable: "--font-libre-caslon-text",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JG University | Cyber-Academic Editorial",
  description: "JG University empowers its students to explore and gain wisdom beyond the pages of books. Discover premium MBA, B.Tech, BBA programs in Ahmedabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${libreCaslonText.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
