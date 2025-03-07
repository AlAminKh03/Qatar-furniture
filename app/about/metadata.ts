import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Qatar Furniture Decor | #1 Luxury Furniture Store in Doha, Qatar",
  description:
    "Leading furniture store in Al Waab, Doha. Specializing in luxury majlis sets, Arabic style furniture, modern curtains, and custom cabinets. Serving The Pearl, Lusail, and all Qatar.",
  keywords:
    "furniture store doha, majlis qatar الدوحة, اثاث قطر, furniture al waab, curtains qatar, cabinets doha, مجلس عربي قطر, اثاث منزلي الدوحة, furniture pearl qatar, furniture lusail, bedroom sets qatar, sofa sets doha, خزائن قطر, ستائر الدوحة, اثاث اللؤلؤة قطر",
  openGraph: {
    title: "About Qatar Furniture Decor | Premium Furniture Store in Qatar",
    description:
      "Discover our extensive collection of luxury furniture in Qatar. Specializing in majlis sets, curtains, cabinets, and premium home decor solutions.",
    images: [
      {
        url: "https://qatarfurnituredecor.com/about-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  alternates: {
    canonical: "https://qatarfurnituredecor.com/about",
    languages: {
      "ar-QA": "/ar/about",
      "en-QA": "/about",
    },
  },
};
