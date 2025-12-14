import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Mobility Scooter Insurance UK 2025 | Compare Quotes & Save",
    template: "%s | Mobility Scooter Insurance UK"
  },
  description: "Compare mobility scooter insurance quotes from UK specialist insurers. Get comprehensive cover for your mobility scooter, powerchair, or electric wheelchair. Protect against theft, damage & breakdown from just £4/month.",
  keywords: [
    "mobility scooter insurance",
    "mobility scooter insurance uk",
    "insurance for mobility scooter",
    "do you need insurance for mobility scooter",
    "cheap mobility scooter insurance",
    "best mobility scooter insurance uk",
    "compare mobility scooter insurance",
    "class 3 mobility scooter insurance",
    "mobility scooter insurance and breakdown cover",
    "electric wheelchair insurance"
  ],
  authors: [{ name: "Mobility Scooter Insurance UK" }],
  creator: "Mobility Scooter Insurance UK",
  publisher: "Mobility Scooter Insurance UK",
  metadataBase: new URL("https://mobilityscooterinsurance.quest"),
  alternates: {
    canonical: "https://mobilityscooterinsurance.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mobilityscooterinsurance.quest",
    siteName: "Mobility Scooter Insurance UK",
    title: "Mobility Scooter Insurance UK 2025 | Compare Quotes",
    description: "Compare mobility scooter insurance quotes from UK specialist insurers. Protect your mobility equipment from theft, damage & breakdown.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobility Scooter Insurance UK 2025",
    description: "Compare mobility scooter insurance quotes from UK specialist insurers.",
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
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mobilityscooterinsurance.quest/#website",
  name: "Mobility Scooter Insurance UK",
  url: "https://mobilityscooterinsurance.quest",
  description: "Compare mobility scooter insurance quotes from UK specialist insurers. Find the best cover for mobility scooters, powerchairs, and electric wheelchairs.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    name: "Mobility Scooter Insurance UK",
    url: "https://mobilityscooterinsurance.quest"
  }
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mobilityscooterinsurance.quest/#service",
  name: "Mobility Scooter Insurance Comparison",
  description: "Free comparison service for mobility scooter insurance in the UK. Compare quotes from specialist insurers including Surewise, Age UK, and Mark Bates.",
  provider: {
    "@type": "Organization",
    name: "Mobility Scooter Insurance UK"
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  },
  serviceType: "Insurance Comparison",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free mobility scooter insurance quotes"
  }
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Mobility Scooter Insurance",
      item: "https://mobilityscooterinsurance.quest"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-slate-900 text-white`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
