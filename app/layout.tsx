import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

const title = "Giselle Garcia | Environmental Compliance & Stormwater Management";
const description =
  "Environmental compliance and stormwater management specialist in California. Experienced in CGP and Caltrans inspections, SWPPP development, water quality monitoring, and SMARTS regulatory reporting.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: "%s | Giselle Garcia",
  },
  description,
  keywords: [
    "Giselle Garcia",
    "Environmental Compliance Specialist",
    "Stormwater Management",
    "SWPPP",
    "Construction General Permit",
    "CGP Inspector",
    "Caltrans Standard Specifications Section 13",
    "SMARTS",
    "QSP",
    "Water Quality Monitoring",
    "Environmental Inspector California",
  ],
  authors: [{ name: "Giselle Garcia", url: baseUrl }],
  creator: "Giselle Garcia",
  publisher: "Giselle Garcia",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title,
    description,
    url: baseUrl,
    siteName: "Giselle Garcia",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
