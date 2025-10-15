import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "FontAura: Discover the Font That Matches Your Aura",
  description:
    "Type your name and see the font that matches your energy. FontAura is a interactive tool for designers and all internet users to explore for fun",
  keywords: [
    "font personality",
    "font aura",
    "font generator",
    "font quiz",
    "font matcher",
    "typography",
    "typeface finder",
    "creative design",
    "aesthetic fonts",
    "google fonts",
  ],
  authors: [{ name: "FontAura", url: "https://fontaura.xyz" }],
  creator: "Emilia Hernandez",
  publisher: "Emilia Hernandez",
  metadataBase: new URL("https://fontaura.xyz"),
  openGraph: {
    title: "FontAura: Discover the Font That Matches Your Aura",
    description:
      "Discover your unique font aura by typing in your name and see which Google Font matches your energy.",
    url: "https://fontaura.xyz",
    siteName: "FontAura",
    images: [
      {
        url: "https://fontaura.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "FontAura – Find the font that matches your aura",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FontAura: Find the Font That Matches Your Aura",
    description:
      "Discover your unique font aura by typing in your name and see which Google Font matches your energy.",
    images: ["https://fontaura.xyz/og-image.png"],
    creator: "@fontaura_xyz",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://fontaura.xyz",
  },
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
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;700&family=Kablammo&family=Allura&family=Almendra&family=Bokor&family=Biorhyme&family=Bungee&family=Alkalami&family=Big+Shoulders+Display&family=Voltaire&family=racingsansone&display=swap"
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
