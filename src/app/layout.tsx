import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "FontAura",
  description: "Find the font that matches your aura",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;700&family=Kablammo&family=Allura&family=Almendra&family=Bokor&family=Biorhyme&family=Bungee&family=Alkalami&family=Big+Shoulders+Display&family=Arbutus&family=racingsansone&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
