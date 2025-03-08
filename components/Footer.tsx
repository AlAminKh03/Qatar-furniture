import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              {/* <Hammer className="h-6 w-6" /> */}
              <Image
                src="/images/logo.png"
                alt="Qatar Furniture Decor"
                width={50}
                height={50}
              />
              <span className="font-bold text-lg">Qatar Furniture Decor</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Quality craftsmanship for your home and business since 2020.
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
              <li className="text-sm">TV Table Installation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+974 66631317</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">qatarfurnituredecor@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Al Mansoura,Doha-Qatar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Qatar Furniture Decor. All rights
            reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/alaminkhan03/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block font-bold hover:text-primary transition-colors group "
            >
              Crafter
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary shadow-[0_0_10px_#000] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_15px_rgba(var(--primary))]"></span>
              <span className="absolute -right-4 top-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ✨
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
