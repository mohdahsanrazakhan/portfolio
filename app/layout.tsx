import type { Metadata } from "next";
import { Geist, Micro_5 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

const bytesizedFont = localFont({
  src: "../public/fonts/Bytesized.ttf",
  variable: "--font-bytesized",
});

const geistSans = Geist({
  subsets: ["latin"],
});
const microFont = Micro_5({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mohdahsanrazakhan.com"),

  title: "Mohd Ahsan Raza Khan | Portfolio",
  description:
    "Welcome to the portfolio of Mohd Ahsan Raza Khan - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Mohd Ahsan Raza Khan",
    "Ahsan Raza Khan",
    "Mohd Ahsan Raza",
    "Mohd Ahsan",
    "Ahsan Raza",
    "Ahsan Khan",
    "Ahsan developer",
    "Mohd Ahsan developer",
    "Ahsan Raza Khan developer",
    "Next.js developer India",
    "React developer India"
  ],

  openGraph: {
    title: "Mohd Ahsan Raza Khan | Portfolio",
    description: "Explore my work, skills, and projects.",
    url: "/",
    siteName: "Mohd Ahsan Raza Khan",
    images: [
      {
        url: "/og-image.jpg?v=4",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohd Ahsan Raza Khan",
    description: "Explore my work, skills, and projects.",
    images: ["/og-image.jpg?v=4"],
  },

  alternates: {
    canonical: "https://www.mohdahsanrazakhan.com",
  },
};

export { microFont, bytesizedFont };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohd Ahsan Raza Khan",
    alternateName: [
      "Ahsan Raza Khan",
      "Mohd Ahsan",
      "Ahsan Raza",
      "Ahsan Khan"
    ],
    url: "https://www.mohdahsanrazakhan.com",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JJ6H1FDVRV"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JJ6H1FDVRV', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
