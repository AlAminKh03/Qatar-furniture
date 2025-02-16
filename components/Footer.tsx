import { Hammer, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Hammer className="h-6 w-6" />
              <span className="font-bold text-lg">Qatar Furniture Decor</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Quality craftsmanship for your home and business since 1990.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-sm hover:underline">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-sm hover:underline">
                  Our Work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Custom Furniture Making</li>
              <li className="text-sm">Furniture Repair & Upholstery</li>
              <li className="text-sm">Curtain & Blind Installation</li>
              <li className="text-sm">Cabinet & TV Stand Installation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@mastercarpentry.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  123 Woodwork Lane, Carpenter City
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Qatar Furniture Decor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
