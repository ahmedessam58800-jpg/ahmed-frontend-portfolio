import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-frontend-portfolio.vercel.app"),
  title: {
    default: "Ahmed Essam | Frontend Developer",
    template: "%s | Ahmed Essam",
  },
  description:
    "Portfolio of Ahmed Essam, an Information Systems student and frontend developer building responsive, accessible React interfaces.",
  keywords: [
    "Ahmed Essam",
    "frontend developer",
    "React",
    "Next.js",
    "portfolio",
    "internship",
  ],
  authors: [{ name: "Ahmed Essam" }],
  openGraph: {
    title: "Ahmed Essam | Frontend Developer",
    description:
      "I build responsive and accessible React interfaces using tested AI-assisted workflows.",
    type: "website",
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:not-sr-only focus:rounded-md focus:bg-surface focus:px-4 focus:py-3 focus:font-semibold focus:text-accent focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <div
          id="main-content"
          tabIndex={-1}
          className="flex flex-1 flex-col outline-none"
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
