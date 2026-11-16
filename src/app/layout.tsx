import "./globals.css"
import "@/lib/components/chrome/site-chrome.css"
import Navbar from "@/lib/components/chrome/navbar"
import Footer from "@/lib/components/chrome/footer"
import { LoadingScreen } from "@/lib/components/chrome/loading-screen"
import "@/lib/components/chrome/loading-screen.css"
import { businessInfo } from "@/lib/data/business"
import { Caveat, Figtree, Fraunces } from "next/font/google"
import type { Metadata } from "next"

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT"],
  variable: "--font-fraunces",
  display: "swap",
})

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: businessInfo.name,
    template: `%s | ${businessInfo.shortName}`,
  },
  description: businessInfo.description,
  icons: {
    icon: "/logo/rainbow-paws-dog-mark.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${figtree.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <LoadingScreen />
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
