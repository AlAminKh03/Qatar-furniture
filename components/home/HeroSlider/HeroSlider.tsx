"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { slides } from "./SlideData";
import { SlideControls } from "./SlideControls";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                {slide.description}
              </p>
              <Button size="lg" className="text-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      ))}

      <SlideControls
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        currentSlide={currentSlide}
        totalSlides={slides.length}
      />
    </div>
  );
}