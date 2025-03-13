import { ContactButtons } from "@/components/ContactButtons";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import GoogleAnalytics from "./_components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://qatarfurnituredecor.com"),
  title: {
    default: "Qatar Furniture & Decor Services | Luxury Furniture in Qatar",
    template: "%s | Qatar Furniture & Decor",
  },
  description:
    "Premium furniture and home decor in Qatar. Explore our collection of luxury furniture, modern decorations, and interior design services in Doha, Qatar.",
  keywords:
    "Qatar Furniture Decor, qatarfurnituredecor, qatar furniture, furniture in qatar, home decor qatar, luxury furniture doha, majlish, premium furniture, sofa, interior design qatar, furniture store qatar, أثاث قطر, ديكور منزلي قطر, متجر أثاث في قطر, أثاث فاخر الدوحة, furniture al waab, furniture the pearl qatar, furniture lusail, اثاث الدوحة, اثاث اللؤلؤة قطر, اثاث لوسيل, custom furniture qatar, modern furniture qatar, office furniture qatar, bedroom furniture qatar, living room furniture qatar, dining room sets qatar, outdoor furniture qatar",
  category: "furniture, home decor, interior design, qatar business",
  verification: {
    google: "wuWIEoRpkPuTjhHF6OVoAPH5lxltE5qq5qeKfgC-7fs",
  },
  other: {
    "geo.region": "QA",
    "geo.placename": "Doha",
    "geo.position": "25.2854;51.5310",
    ICBM: "25.2854, 51.5310",
    "property:fb:app_id": "1234567890",
  },
  alternates: {
    canonical: "https://qatarfurnituredecor.com",
    languages: {
      "en-US": "https://qatarfurnituredecor.com",
      "ar-QA": "https://qatarfurnituredecor.com/ar",
    },
  },
  openGraph: {
    type: "website",
    title: "Qatar Furniture & Decor Services | Luxury Furniture in Qatar",
    description:
      "Premium furniture and home decor in Qatar. Explore our collection of luxury furniture, modern decorations, and interior design services in Doha, Qatar.",
    url: "https://qatarfurnituredecor.com",
    siteName: "Qatar Furniture & Decor",
    images: [
      {
        url: "https://qatarfurnituredecor.com/social.jpg",
        width: 1200,
        height: 630,
        alt: "Qatar Furniture & Decor Services",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qatar Furniture & Decor | Luxury Furniture in Qatar",
    description:
      "Premium furniture and home decor in Qatar. Explore our collection of luxury furniture, modern decorations, and interior design services.",
    images: ["/social.jpg"],
    creator: "@qatarfurniture",
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
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  applicationName: "Qatar Furniture Decor",
  authors: [{ name: "Qatar Furniture Decor" }],
  generator: "Next.js",
  publisher: "Qatar Furniture Decor",
  formatDetection: {
    telephone: true,
    address: true,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-934R2JYRD8" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <SocialLinks />
          <ContactButtons />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://qatarfurnituredecor.com",
              name: "Qatar Furniture Decor",
              image: {
                "@type": "ImageObject",
                url: "https://qatarfurnituredecor.com/social.jpg",
                width: 1200,
                height: 630,
              },
              description:
                "Premium furniture and home decor store in Qatar offering luxury furniture and interior design services.",
              url: "https://qatarfurnituredecor.com",
              telephone: "+97466631317",
              priceRange: "$$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Mansoura",
                addressLocality: "Doha",
                addressRegion: "Qatar",
                addressCountry: "QA",
                postalCode: "24242",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.2692576,
                longitude: 51.5294645,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/qatarfurnituredecor",
                "https://www.instagram.com/qatarfurnituredecor",
              ],
              hasMap:
                "https://www.google.com/maps/place/Al+Mansoura,+Doha,+Qatar/@25.2688726,51.5238892,1966m/",
              areaServed: {
                "@type": "State",
                name: "Qatar",
                containsPlace: [
                  {
                    "@type": "City",
                    name: "Doha",
                  },
                  {
                    "@type": "City",
                    name: "Al Wakrah",
                  },
                  {
                    "@type": "City",
                    name: "Al Rayyan",
                  },
                  {
                    "@type": "City",
                    name: "Al Khor",
                  },
                  {
                    "@type": "City",
                    name: "Lusail",
                  },
                  {
                    "@type": "City",
                    name: "The Pearl",
                  },
                ],
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Furniture Making",
                    description: "Bespoke furniture design and manufacturing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Upholstery Services",
                    description:
                      "Professional furniture upholstery and reupholstery",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Interior Design",
                    description:
                      "Complete interior design and decoration services",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
