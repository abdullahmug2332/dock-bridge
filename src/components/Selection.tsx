"use client";

import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoCart } from "react-icons/io5";

interface Product {
  name: string;
  price: string;
  unit?: string;
  image: string;
}

const products: Product[] = [
  { name: "Blue Crabs", price: "$32.99", unit: "/ dozen", image: "/seafood.jpg" },
  { name: "Crawfish", price: "$24.99", unit: "/ lb", image: "/seafood.jpg" },
  { name: "Shrimp", price: "$19.99", unit: "/ lb", image: "/seafood.jpg" },
  { name: "Blue Crabs", price: "$32.99", unit: "/ dozen", image: "/seafood.jpg" },
  { name: "Crawfish", price: "$24.99", unit: "/ lb", image: "/seafood.jpg" },
  { name: "Shrimp", price: "$19.99", unit: "/ lb", image: "/seafood.jpg" },
];

export default function FromTide() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector(
          '[data-carousel-next]'
        ) as HTMLElement;
        nextButton?.click();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100/30">
      <div className="container py-16 ">
        <div className="text-center mb-12">
          <h4 className="color font-medium mb-2 angello text-3xl">Featured Products</h4>
          <h2 className="text-4xl md:text-5xl  font-bold mb-2 salsify">Our Fresh Selection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore a curated range of high-quality fish and seafood,
            responsibly sourced and carefully handled for peak freshness.
          </p>
        </div>

        <div className="relative">
          <Carousel ref={carouselRef} className="gap-6" opts={{ loop: true }}>
            <CarouselContent className="gap-4 px-2 sm:px-5">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="
                    flex flex-col bg-white rounded-xl shadow-lg overflow-hidden 
                    basis-[90%] sm:basis-[45%] md:basis-1/3 lg:basis-1/3 pl-0
                  "
                >
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-lg md:text-2xl  lg:text-3xl font-bold text-gray-900 salsify">
                        {product.name}
                      </h3>
                      <IoCart className="text-white bg-teal-500 p-2 rounded-lg w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {product.price} {product.unit}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel navigation buttons */}
            <CarouselPrevious className="absolute -left-4 xl:-left-15 top-1/2 -translate-y-1/2 bg2 border2 text-white rounded-md shadow-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer z-10">
              &lt;
            </CarouselPrevious>
            <CarouselNext className="absolute -right-4 xl:-right-15 top-1/2 -translate-y-1/2 bg2 border2 text-white rounded-md shadow-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer z-10">
              &gt;
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
}