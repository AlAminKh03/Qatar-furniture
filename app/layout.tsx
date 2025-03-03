import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

import { ContactButtons } from "@/components/ContactButtons";
import { SocialLinks } from "@/components/SocialLinks";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qatar Furniture Decor | Luxury Furniture & Home Decoration in Qatar",
  description:
    "Premium furniture and home decor in Qatar. Explore our collection of luxury furniture, modern decorations, and interior design services in Doha and across Qatar.",
  keywords:
    "qatar furniture, furniture in qatar, home decor qatar, luxury furniture doha, interior design qatar, furniture store qatar, qatarfurnituredecor",
  metadataBase: new URL("https://qatarfurnituredecor.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "furniture",
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
  alternates: {
    languages: {
      "ar-QA": "/ar",
      "en-US": "/",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
              name: "Qatar Furniture Decor",
              image: "https://qatarfurnituredecor.com/logo.jpg",
              description:
                "Premium furniture and home decor store in Qatar offering luxury furniture and interior design services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "YOUR_STREET_ADDRESS",
                addressLocality: "Doha",
                addressRegion: "Qatar",
                postalCode: "YOUR_POSTAL_CODE",
                addressCountry: "QA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "YOUR_LATITUDE",
                longitude: "YOUR_LONGITUDE",
              },
              url: "https://qatarfurnituredecor.com",
              telephone: "YOUR_PHONE_NUMBER",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "21:00",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
