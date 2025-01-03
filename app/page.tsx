"use client";
import { HeroSlider } from "@/components/home/HeroSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Hammer,
  PencilRuler,
  Shield,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ImageGallery = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="aspect-video relative overflow-hidden rounded-lg">
        <Image
          src={images[currentImageIndex]}
          alt="Project image"
          fill
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const services = [
    {
      icon: <PencilRuler className="h-12 w-12 mb-4 text-primary" />,
      title: "Custom Furniture",
      description:
        "Bespoke furniture pieces crafted to your exact specifications. From dining tables to wardrobes, we bring your vision to life.",
      features: [
        "Custom design consultation",
        "Premium materials",
        "Perfect fit guarantee",
      ],
    },
    {
      icon: <Hammer className="h-12 w-12 mb-4 text-primary" />,
      title: "Kitchen Cabinets",
      description:
        "Transform your kitchen with custom-built cabinets that maximize space and match your style perfectly.",
      features: ["Custom measurements", "Quality hardware", "Various finishes"],
    },
    {
      icon: <Shield className="h-12 w-12 mb-4 text-primary" />,
      title: "Built-in Storage",
      description:
        "Maximize your space with custom built-in shelving, wardrobes, and storage solutions designed for your home.",
      features: [
        "Space optimization",
        "Custom organization",
        "Seamless integration",
      ],
    },
    {
      icon: <Clock className="h-12 w-12 mb-4 text-primary" />,
      title: "Restoration",
      description:
        "Expert restoration of antique furniture and woodwork, preserving the beauty and integrity of cherished pieces.",
      features: [
        "Careful assessment",
        "Period-accurate work",
        "Long-lasting results",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Mohammed Al Naimi",
      role: "Villa Owner",
      content:
        "ممتاز! The craftsmanship of their custom furniture is exceptional. They transformed our majlis with beautiful pieces that perfectly match our style.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/majlis-1.jpg",
        "/majlis-2.jpg",
        "/majlis-3.jpg",
        "/majlis-4.jpg",
      ],
    },
    {
      name: "Hussein Al Emadi",
      role: "Business Owner",
      content:
        "Outstanding service! They designed and built custom office furniture for our entire corporate space. The quality and attention to detail is remarkable.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: ["/office-1.jpg", "/office-2.jpg", "/office-3.jpg"],
    },
    {
      name: "Sheikh Al Mansour",
      role: "Property Developer",
      content:
        "Exceptional work on our luxury apartment projects. Their team delivered high-end custom furniture that exceeded our expectations.",
      image:
        "https://images.unsplash.com/photo-1578674473215-9e07966d2b5f?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: ["/luxury-1.jpg", "/luxury-2.jpg"],
    },
    {
      name: "Nuha M. Hassan",
      role: "Interior Designer",
      content:
        "As an interior designer, I highly recommend their services. They bring creative designs to life with perfect execution and professionalism.",
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: ["/design-1.jpg", "/design-2.jpg"],
    },
    {
      name: "Khalid Al Hedaifi",
      role: "Restaurant Owner",
      content:
        "They created beautiful custom furniture for our restaurant. The quality and design perfectly capture the essence of modern Arabic hospitality.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/restaurant-1.jpg",
        "/restaurant-2.jpg",
        "/restaurant-3.jpg",
      ],
    },
    {
      name: "Al Anoud",
      role: "Home Owner",
      content:
        "Absolutely delighted with my custom walk-in closet. The attention to detail and quality of work is outstanding. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: ["/closet-1.jpg", "/closet-2.jpg", "/closet-3.jpg"],
    },
  ];

  const projects = [
    {
      title: "Custom Kitchen Cabinets",
      image:
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?auto=format&fit=crop&q=80",
      category: "Kitchen",
    },
    {
      title: "Built-in Bookshelf",
      image:
        "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80",
      category: "Storage",
    },
    {
      title: "Dining Table Set",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80",
      category: "Furniture",
    },
    {
      title: "Walk-in Closet",
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80",
      category: "Storage",
    },
  ];

  const features = [
    {
      icon: <Trophy className="h-12 w-12 text-primary" />,
      title: "25+ Years Experience",
      description: "Decades of expertise in custom woodworking and carpentry.",
    },
    {
      icon: <CheckCircle2 className="h-12 w-12 text-primary" />,
      title: "Licensed & Insured",
      description: "Fully certified professionals you can trust.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Expert Team",
      description: "Skilled craftsmen with attention to detail.",
    },
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const hasMoreTestimonials = visibleTestimonials < testimonials.length;

  const loadMore = () => {
    setVisibleTestimonials((prev) => Math.min(prev + 3, testimonials.length));
  };

  return (
    <div>
      <HeroSlider />

      {/* Updated Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a comprehensive range of carpentry services to meet all
              your woodworking needs.
            </motion.p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex justify-center"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-center mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With decades of experience and a commitment to excellence, we
              deliver outstanding results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent custom woodworking projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-lg font-semibold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {testimonials
              .slice(0, visibleTestimonials)
              .map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative ${
                    index >= 3 && hasMoreTestimonials
                      ? "blur-overlay before:absolute before:inset-0 before:z-10"
                      : ""
                  }`}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-muted-foreground">
                        {testimonial.content}
                      </p>
                      {testimonial.projectImages &&
                        testimonial.projectImages.length > 0 && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="mb-6 cursor-pointer">
                                <div className="aspect-video relative overflow-hidden rounded-lg">
                                  <Image
                                    src={testimonial.projectImages[0]}
                                    alt="Project preview"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform"
                                  />
                                  {testimonial.projectImages.length > 1 && (
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                      <p className="text-white font-medium">
                                        View {testimonial.projectImages.length}{" "}
                                        Photos
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <ImageGallery
                                images={testimonial.projectImages}
                              />
                            </DialogContent>
                          </Dialog>
                        )}
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {hasMoreTestimonials && (
            <div className="mt-12 text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                size="lg"
                className="min-w-[200px] text-lg font-semibold hover:bg-primary hover:text-primary-foreground relative z-20"
              >
                View All Reviews
              </Button>
            </div>
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Contact us today for a free consultation and quote. Let&apos;s bring
            your vision to life with our expert craftsmanship.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="text-lg">
              Get Free Quote
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
