"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Award,
  HandshakeIcon,
  HeartHandshake,
  History,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const companyFeatures = [
    {
      icon: <History className="h-8 w-8 text-primary" />,
      title: "Established 2008",
      description:
        "Over 15 years of excellence in furniture and decor services in Qatar",
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Premium Quality",
      description:
        "Using only the finest materials and expert craftsmanship for lasting quality",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description:
        "Skilled professionals with years of experience in furniture making and design",
    },
    {
      icon: <HandshakeIcon className="h-8 w-8 text-primary" />,
      title: "Customer First",
      description:
        "Dedicated to providing exceptional service and complete customer satisfaction",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Custom Solutions",
      description:
        "Tailored furniture and decor solutions to match your unique style",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality Assured",
      description:
        "Committed to maintaining the highest standards in every project",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold mb-6">
            About Qatar Furniture Decor
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Qatar Furniture Decor is a premier furniture and interior solutions
            provider in Qatar. With over 15 years of experience, we specialize
            in custom furniture, upholstery, curtains, and comprehensive
            interior decoration services.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground">
                    To provide exceptional furniture and decor solutions that
                    transform spaces and exceed customer expectations through
                    quality craftsmanship, innovative design, and outstanding
                    service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <HeartHandshake className="h-6 w-6 text-primary" />
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground">
                    To be Qatar&apos;s leading furniture and decor solution
                    provider, known for our commitment to excellence, innovative
                    designs, and customer satisfaction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Company Features */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your furniture and decor needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg">Get Free Quote</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
