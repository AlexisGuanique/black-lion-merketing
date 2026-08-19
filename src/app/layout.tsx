import type { Metadata, Viewport } from "next";
import { Merriweather, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site.config";
import { getActiveThemeVariables } from "@/config/theme.config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const newsreader = Newsreader({
  variable: "--font-wordmark",
  subsets: ["latin"],
  weight: ["200"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.brand,
  openGraph: {
    type: "website",
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeVariables = getActiveThemeVariables();

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${merriweather.variable} ${newsreader.variable} h-full`}
      style={themeVariables}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
