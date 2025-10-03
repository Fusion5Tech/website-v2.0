import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Fusion Five Tech | Software Development & Digital Solutions",
  description:
    "Fusion Five Tech is a passionate team of developers creating scalable, user-focused software solutions. We specialize in web development, mobile apps, cloud solutions, and technical consulting for businesses and startups.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "cloud solutions",
    "full-stack development",
    "Fusion Five Tech",
    "digital solutions",
    "Zimbabwe developers",
    "website development",
    "app development",
    "tech consulting",
  ],
  authors: [{ name: "Malvin", url: "https://sehmaluva.me/portfolio" }, { name: "Nigel", url: "https://github.com/nijel4550", }, { name: "Junior", url: "https://github.com/JunieYounger" }, { name: "Venon", url: "https://github.com/venontn" }],
  creator: "Fusion Five Tech",
  publisher: "Fusion Five Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fusionfive.com",
    title: "Fusion Five Tech | Software Development & Digital Solutions",
    description:
      "Crafting tomorrow's digital solutions today. Expert software development team specializing in web, mobile, and cloud solutions.",
    siteName: "Fusion Five Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion Five Tech | Software Development & Digital Solutions",
    description: "Crafting tomorrow's digital solutions today. Expert software development team.",
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
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
