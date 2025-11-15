import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mic Mitr - Professional Audio & Video Production Services ",
  description:
    "Create your business audio starting at Rs 299. Professional audio and video production, advertising solutions. Get 2-day plans from Rs 999 with ad budget included. Available in Marathi, Hindi, English.",
  generator: "v0.app",
  keywords: [
    "audio production",
    "video production",
    "professional audio",
    "Mic Mitr",
    "advertising",
    "business audio",
    "audio editing",
    "professional voiceover",
    "background music",
    "affordable audio production",
    "ऑडिओ प्रोडक्शन",
    "व्हिडिओ प्रोडक्शन",
    "माइक मित्र",
    "जाहिरातीचे समाधान",
    "ऑडियो प्रोडक्शन",
    "वीडियो प्रोडक्शन",
    "माइक मित्र",
    "विज्ञापन समाधान",
  ],
  authors: [{ name: "Mic Mitr" }],
  creator: "Mic Mitr",
  publisher: "Mic Mitr",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN", "mr_IN"],
    url: "https://micmitr.in",
    siteName: "Mic Mitr - Professional Audio & Video Production",
    title: "Mic Mitr - Create Your Business Audio Starting at Rs 299",
    description:
      "Professional audio and video production services. 2-day plans from Rs 999 including ad budget. Multi-language support in Marathi, Hindi, English.",
    images: [
      {
        url: "/professional-audio-production.jpg",
        width: 1200,
        height: 630,
        alt: "Mic Mitr Professional Audio Production",
        type: "image/svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mic Mitr - Professional Audio & Video Production",
    description:
      "Create your business audio starting at Rs 299. Professional production services.",
    images: ["/professional-audio-production.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  category: "Business",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://micmitr.com" />

        {/* ✅ Favicon Added */}
        <link rel="icon" href="/logo.png" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#fbbf24" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Mic Mitr" />
      </head>

      <body
        className={`font-sans ${inter.variable} ${notoSansDevanagari.variable} ${jetbrainsMono.variable}`}
      >
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}

