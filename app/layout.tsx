import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#060608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} — ${siteConfig.identity}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.bio,
  authors: [{ name: siteConfig.fullName, url: "https://github.com/Rhushabhkhartade" }],
  creator: siteConfig.fullName,
  keywords: [
    "Rhushabh Khartade",
    "Rhushabh Kishor Khartade",
    "UI Designer",
    "Cyber Security Student",
    "Figma",
    "Design Systems",
    "Portfolio",
    "Web Design",
    "Nagpur",
    "India",
  ],
  metadataBase: new URL("https://rhushabh-portfolio.local"),
  openGraph: {
    title: `${siteConfig.fullName} — ${siteConfig.identity}`,
    description: siteConfig.bio,
    siteName: siteConfig.fullName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — ${siteConfig.identity}`,
    description: siteConfig.bio,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#060608] text-[#f5f5f7]">{children}</body>
    </html>
  );
}
