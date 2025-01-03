"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

const allTestimonials = [
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

export default function AboutPage() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const hasMoreTestimonials = visibleTestimonials < allTestimonials.length;

  const loadMore = () => {
    setVisibleTestimonials((prev) =>
      Math.min(prev + 3, allTestimonials.length)
    );
  };

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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With years of experience in crafting custom furniture and providing
            exceptional carpentry services, we take pride in transforming spaces
            with our expertise and attention to detail.
          </p>
        </motion.div>

        {/* Testimonials Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read what our clients have to say about their experience working
              with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials
              .slice(0, visibleTestimonials)
              .map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      {testimonial.projectImages && (
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
                            <ImageGallery images={testimonial.projectImages} />
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
                className="min-w-[200px]"
              >
                Load More Reviews
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
