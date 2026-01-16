import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fatma Nur CABBAR GOK | Indie App Developer",
  description: "Discover beautiful mobile apps crafted with love. Zodiac Flow - Your daily mood tracker with zodiac insights.",
  metadataBase: new URL("https://lnex1.github.io/nurcabbargok"),
  openGraph: {
    title: "Fatma Nur CABBAR GOK - Indie Developer",
    description: "Creating beautiful, thoughtful mobile experiences.",
    url: "https://lnex1.github.io/nurcabbargok",
    siteName: "Fatma Nur CABBAR GOK",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatma Nur CABBAR GOK - Indie Developer",
    description: "Creating beautiful, thoughtful mobile experiences.",
  },
  icons: {
    icon: "/nurcabbargok/brand/favicon.svg",
    apple: "/nurcabbargok/brand/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={outfit.variable}
      style={{ colorScheme: "light" }}
      data-theme="light"
    >
      <body
        className="antialiased"
        style={{
          backgroundColor: "#FDFBFF",
          color: "#171717",
          minHeight: "100vh"
        }}
      >
        {children}
      </body>
    </html>
  );
}
