"use client";
import { HeroSlider } from "@/components/home/HeroSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  Hammer,
  HeartHandshake,
  Palette,
  PencilRuler,
  Scissors,
  Sofa,
  Sparkles,
  Star,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
      icon: <Scissors className="h-12 w-12 mb-4 text-primary" />,
      title: "Curtain & Drapery",
      description:
        "Complete curtain solutions from design to installation, enhancing your space with elegant window treatments.",
      features: [
        "Custom curtain design",
        "Professional installation",
        "Wide fabric selection",
      ],
    },
    {
      icon: <Hammer className="h-12 w-12 mb-4 text-primary" />,
      title: "Furniture Repair",
      description:
        "Expert repair services for all types of furniture. From fixing broken chairs and tables to restoring sofas and beds - we repair it all.",
      features: [
        "All furniture types",
        "Professional repairs",
        "Surface refinishing",
        "Hardware replacement",
      ],
    },
    {
      icon: <Sofa className="h-12 w-12 mb-4 text-primary" />,
      title: "Upholstery",
      description:
        "Transform your furniture with our premium upholstery services using high-quality fabrics and materials.",
      features: ["Fabric reupholstery", "Leather work", "Cushion replacement"],
    },
  ];

  const testimonials = [
    {
      name: "Mohammed Al Naimi",
      role: "Villa Owner",
      content:
        "Exceptional work on our majlis and curtains. The team's attention to detail and craftsmanship is outstanding. They transformed our living space completely.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/curtain/curtain1.jpg",
        "/curtain/curtain2.jpg",
        "/curtain/curtain3.jpg",
      ],
    },
    {
      name: "Fatima Al Sayed",
      role: "Home Owner",
      content:
        "Their sofa reupholstery service is amazing. They gave our old sofa a completely new life with premium fabric and excellent workmanship.",
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: ["/sofa/sofa-living-room-3.jpg"],
    },
    {
      name: "Ahmed Al Emadi",
      role: "Business Owner",
      content:
        "Outstanding cabinet and TV unit installation. The quality of work and professional service exceeded our expectations.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/cabinet/tv1.jpg",
        "/cabinet/tv-cabinet2.jpg",
        "/cabinet/tv-cabinet-3.jpg",
      ],
    },
    {
      name: "Maryam Al Thani",
      role: "Interior Designer",
      content:
        "Their carpet installation service is impeccable. The team is highly skilled and professional. The results are always perfect.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/carpet/carpet1.jpg",
        "/carpet/carpet2.jpg",
        "/carpet/carpet3.jpg",
      ],
    },
    {
      name: "Abdullah Al Kuwari",
      role: "Property Developer",
      content:
        "We've used their services for multiple properties. Their custom almira and wardrobe solutions are excellent. Very reliable team.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: ["/almira/almira1.jpg"],
    },
    {
      name: "Sara Al Mansouri",
      role: "Home Owner",
      content:
        "Beautiful curtain work in our entire villa. The fabric selection, design consultation, and installation were all perfect.",
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/curtain/curtain7.jpg",
        "/curtain/curtain8.jpg",
        "/curtain/curtain9.jpg",
      ],
    },
  ];

  const projects = [
    {
      title: "Luxury Curtain Design",
      image: "/curtain/curtain1.jpg",
      category: "Curtains",
    },
    {
      title: "Modern TV Cabinet",
      image: "/cabinet/tv1.jpg",
      category: "Cabinet",
    },
    {
      title: "Custom Almira",
      image: "/almira/almira1.jpg",
      category: "Almira",
    },
    {
      title: "Premium Sofa",
      image: "/sofa/sofa-living-room-3.jpg",
      category: "Sofa",
    },
    {
      title: "Elegant Carpet Installation",
      image: "/carpet/carpet1.jpg",
      category: "Carpet",
    },
    {
      title: "Modern Curtain Design",
      image: "/curtain/curtain4.jpg",
      category: "Curtains",
    },
  ];

  const features = [
    {
      icon: <Trophy className="h-12 w-12 text-primary" />,
      title: "25+ Years Experience",
      description: "Decades of expertise in custom woodworking and carpentry.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Expert Team",
      description: "Skilled craftsmen with attention to detail.",
    },
    {
      icon: <Star className="h-12 w-12 text-primary" />,
      title: "Quality Service",
      description:
        "Satisfaction guaranteed with premium materials and workmanship.",
    },
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const hasMoreTestimonials = visibleTestimonials < testimonials.length;

  const loadMore = () => {
    setVisibleTestimonials((prev) => Math.min(prev + 3, testimonials.length));
  };

  const beforeAfterWork = [
    {
      title: "Sofa Transformation",
      category: "Sofa",
      description: "Complete sofa reupholstery with premium fabric",
      beforeImage: "/work/before-after/sofa/sofa-1-before.jpg",
      afterImage: "/work/before-after/sofa/sofa-1-after.jpg",
      location: "Pearl Qatar",
    },
    // Add 3-4 more showcase items
  ];

  return (
    <div>
      {/* 1. Hero Slider - First impression */}
      <HeroSlider />

      {/* 2. Promotional Banner - Immediate value proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <Card className="overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background border-none">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Expert Furniture Services in Qatar
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-6">
                      Discover our collection of premium furniture that combines
                      style, comfort, and affordability. Transform your space
                      with our expertly crafted pieces.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/quote">
                        <Button size="lg" className="w-full sm:w-auto">
                          Get Quote Now
                        </Button>
                      </Link>
                      <Link href="/work">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full sm:w-auto"
                        >
                          View Our Work
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>

                {/* Image Side */}
                <div className="relative aspect-square md:aspect-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative h-full"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80"
                      alt="Luxury Furniture Showcase"
                      fill
                      className="object-cover rounded-r-lg"
                    />
                    {/* Floating Stats */}
                    <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                      <Card className="bg-background/80 backdrop-blur">
                        <CardContent className="p-4 text-center">
                          <p className="text-2xl font-bold text-primary">
                            500+
                          </p>
                          <p className="text-sm">Happy Clients</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-background/80 backdrop-blur">
                        <CardContent className="p-4 text-center">
                          <p className="text-2xl font-bold text-primary">15+</p>
                          <p className="text-sm">Years Experience</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-background/80 backdrop-blur">
                        <CardContent className="p-4 text-center">
                          <p className="text-2xl font-bold text-primary">
                            100%
                          </p>
                          <p className="text-sm">Satisfaction</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* 3. Why Choose Us Cards - Build trust early */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent">
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
              Experience the perfect blend of traditional craftsmanship and
              modern design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
                  <p className="text-muted-foreground">
                    Quick response time and efficient service delivery. We value
                    your time and ensure timely completion of projects.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Using only the finest materials and expert craftsmanship to
                    ensure lasting quality and beauty.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <HeartHandshake className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Customer Satisfaction
                  </h3>
                  <p className="text-muted-foreground">
                    Dedicated to exceeding expectations with personalized
                    service and attention to detail.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Wrench className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Skilled professionals with years of experience in furniture
                    making and repair.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Palette className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
                  <p className="text-muted-foreground">
                    Tailored solutions to match your style and space
                    requirements perfectly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <BadgeCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Warranty Assured
                  </h3>
                  <p className="text-muted-foreground">
                    Peace of mind with our quality guarantee and after-service
                    support.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. Our Services - Show what you offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive furniture and decor solutions for your space
            </p>
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

      {/* 5. Recent Work - Show proof of quality */}
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
              Browse through our latest work and get inspired
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      {/* 6. Testimonials - Social proof */}
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
              Read testimonials from our satisfied customers across Qatar
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

      {/* 7. Call to Action - Final push for conversion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote.
            Let&apos;s bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
