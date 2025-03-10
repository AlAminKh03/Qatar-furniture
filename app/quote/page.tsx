import { Metadata } from "next";
import QuotePage from "./quote";

export const metadata: Metadata = {
  title: "Get a Free Quote for Furniture & Decor Services in Qatar",
  description:
    "Request a personalized quote for premium furniture and decor services in Qatar. Custom sofas, upholstery, curtains, and interior design solutions.",
  openGraph: {
    title: "Get a Free Quote for Furniture & Decor Services in Qatar",
    description:
      "Request a personalized quote for premium furniture and decor services in Qatar. Custom sofas, upholstery, curtains, and interior design solutions.",
    images: [
      {
        url: "https://qatarfurnituredecor.com/social.jpg",
        width: 1200,
        height: 630,
        alt: "Qatar Furniture & Decor Services Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Quote | Qatar Furniture & Decor",
    description:
      "Request a free quote for our furniture and decor services in Qatar. We offer sofa making, upholstery, wallpaper installation, and more.",
  },
};

const page = () => {
  return <QuotePage />;
};

export default page;
