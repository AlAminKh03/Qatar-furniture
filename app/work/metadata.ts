import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Interior Solutions Portfolio",
  description:
    "Explore our portfolio of custom furniture, curtains, and interior solutions in Qatar. View our completed projects including wardrobes, TV tables, carpets, curtains, sofas, and majlis designs.",
  keywords:
    "interior design portfolio, furniture projects, Qatar interior work, custom furniture, curtain installation, sofa reupholstery, wardrobe design, carpet installation, majlis design",
  openGraph: {
    title: "Our Work | Interior Solutions Portfolio",
    description:
      "Explore our portfolio of custom furniture, curtains, and interior solutions in Qatar.",
    images: [
      {
        url: "/social.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Solutions Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Interior Solutions Portfolio",
    description:
      "Explore our portfolio of custom furniture, curtains, and interior solutions in Qatar.",
    images: ["/social.jpg"],
  },
};
