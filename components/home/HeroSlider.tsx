"use client";

import { scaleHover, slideIn } from "@/lib/animations";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const slides = [
  {
    title: "Custom Carpentry & Woodworking",
    description:
      "Bringing your vision to life with expert craftsmanship and attention to detail",
    image:
      "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&q=80", // Carpenter workshop
  },
  {
    title: "Bespoke Furniture Design",
    description: "Unique pieces crafted specifically for your space and style",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80", // Custom furniture
  },
  {
    title: "Professional Installations",
    description:
      "Expert fitting and installation services for all our products",
    image:
      "https://images.unsplash.com/photo-1556185781-a47769abb7ee?auto=format&fit=crop&q=80", // Installation work
  },
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      const index = emblaApi.selectedScrollSnap();
      setCurrentIndex(index);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      const index = emblaApi.selectedScrollSnap();
      setCurrentIndex(index);
    }
  }, [emblaApi]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[600px] overflow-hidden"
    >
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] relative min-w-0">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
              </div>
              <div className="relative z-20 h-full flex items-center justify-center">
                <div className="text-center px-4 text-white">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={currentIndex}
                      variants={slideIn("up")}
                      initial="initial"
                      animate="animate"
                      exit={{ opacity: 0, y: -20 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                      {slide.title}
                    </motion.h1>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      variants={slideIn("up")}
                      initial="initial"
                      animate="animate"
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
                    >
                      {slide.description}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute z-30 inset-y-0 left-0 right-0 flex items-center justify-between px-4">
        <motion.button
          {...scaleHover}
          className="p-2 rounded-full bg-background/80 hover:bg-background/90 transition-colors"
          onClick={scrollPrev}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
        <motion.button
          {...scaleHover}
          className="p-2 rounded-full bg-background/80 hover:bg-background/90 transition-colors"
          onClick={scrollNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30"
      >
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
