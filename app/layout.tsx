import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qatar Furniture & Home Decor | Luxury Furniture Store in Qatar",
  description:
    "Discover luxury furniture and home decor in Qatar. Browse our exclusive collection of modern and traditional furniture, home accessories, and interior decoration items.",
  keywords:
    "qatar furniture, furniture in qatar, home decor qatar, luxury furniture qatar, interior decoration qatar",
  metadataBase: new URL("https://qatarfurnituredecor.com"),
  category: "furniture",
  verification: {
    google: "your-google-verification-code",
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
  return children;
}
