"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  fadeIn,
  scaleHover,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { motion } from "framer-motion";

const services: {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}[] = [
  // ... your services array ...
];

export default function ServicesPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="container mx-auto py-16 px-4"
    >
      <motion.div className="text-center mb-16" variants={staggerItem}>
        <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-4">
          Our Services
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Discover our comprehensive range of carpentry services
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <motion.div {...scaleHover} className="flex justify-center">
                  {service.icon}
                </motion.div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  {service.description}
                </p>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      variants={staggerItem}
                      className="flex items-center space-x-2"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
