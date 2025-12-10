import type { Metadata } from "next";
import { Geist, Micro_5 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import localFont from "next/font/local";

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
  title: "Mohd Ahsan Raza Khan | Portfolio",
  description:
    "Welcome to the portfolio of Mohd Ahsan Raza Khan - Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore projects, experience, and skills.",
  openGraph: {
    title: "Mohd Ahsan Raza Khan | Portfolio",
    description: "Explore my work, skills, and projects.",
    url: "https://www.mohdahsanrazakhan.com",
    siteName: "Mohd Ahsan Raza Khan",
    images: [
      {
        url: "https://www.mohdahsanrazakhan.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Ahsan Raza Khan | Portfolio",
    description: "Explore my work, skills, and projects.",
    images: ["https://www.mohdahsanrazakhan.com/og-image.png"],
  },
};

export { microFont, bytesizedFont };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
