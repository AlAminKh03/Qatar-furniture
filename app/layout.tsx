import { ContactButtons } from "@/components/ContactButtons";
import Footer from "@/components/Footer";
import { GenerateFavicon } from "@/components/GenerateFavicon";

import Navbar from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qatar Furniture Decor | Luxury Furniture & Home Decoration in Qatar",
  description:
    "Premium furniture and home decor in Qatar. Explore our collection of luxury furniture, modern decorations, and interior design services in Doha and across Qatar.",
  keywords:
    "qatar furniture, furniture in qatar, home decor qatar, luxury furniture doha, majlish, premium furniture,  sofa, interior design qatar, furniture store qatar, أثاث قطر, ديكور منزلي قطر, متجر أثاث في قطر, أثاث فاخر الدوحة, furniture al waab, furniture the pearl qatar, furniture lusail, اثاث الدوحة, اثاث اللؤلؤة قطر, اثاث لوسيل",
  metadataBase: new URL("https://qatarfurnituredecor.com"),
  category: "furniture, home decor, interior design, qatar business",
  verification: {
    google: "wuWIEoRpkPuTjhHF6OVoAPH5lxltE5qq5qeKfgC-7fs",
    other: {
      "geo.region": "QA",
      "geo.placename": "Doha",
      "geo.position": "25.2854;51.5310",
      ICBM: "25.2854, 51.5310",
    },
  },
  alternates: {
    canonical: "https://qatarfurnituredecor.com",
    languages: {
      "ar-QA": "/ar",
      "en-QA": "/",
      "en-US": "/",
      ar: "/ar",
    },
  },
  openGraph: {
    title: "Qatar Furniture Decor | Luxury Furniture & Home Decoration",
    description:
      "Premium furniture and home decor in Qatar. Explore our collection of luxury furniture, modern decorations, and interior design services.",
    url: "https://qatarfurnituredecor.com",
    siteName: "Qatar Furniture Decor",
    images: [
      {
        url: "https://qatarfurnituredecor.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_QA",
    alternateLocale: "ar_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qatar Furniture Decor | Luxury Furniture & Home Decoration",
    description:
      "Premium furniture and home decor in Qatar. Explore our collection of luxury furniture, modern decorations, and interior design services.",
    images: ["https://qatarfurnituredecor.com/og-image.jpg"],
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
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GenerateFavicon />
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
              "@type": "FurnitureStore",
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
              name: "Qatar Furniture Decor",
              image: "https://qatarfurnituredecor.com/logo.jpg",
              description:
                "Premium furniture and home decor store in Qatar offering luxury furniture and interior design services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Waab Street",
                addressLocality: "Doha",
                addressRegion: "Qatar",
                postalCode: "24242",
                addressCountry: "QA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "25.2854",
                longitude: "51.5310",
              },
              url: "https://qatarfurnituredecor.com",
              telephone: "+974 5555 5555",
              priceRange: "QAR $$$$",
              hasMap: "https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "09:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "13:00",
                  closes: "22:00",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
