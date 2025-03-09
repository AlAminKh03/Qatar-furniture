import { Metadata } from "next";
import QuotePage from "./quote";

export const metadata: Metadata = {
  title: "Get a Free Quote | Qatar Furniture & Decor",
  description:
    "Request a free quote for our furniture and decor services in Qatar. We offer sofa making, upholstery, wallpaper installation, and more.",
  openGraph: {
    title: "Get a Free Quote | Qatar Furniture & Decor",
    description:
      "Request a free quote for our furniture and decor services in Qatar. We offer sofa making, upholstery, wallpaper installation, and more.",
    type: "website",
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
