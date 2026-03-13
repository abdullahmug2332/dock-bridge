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
  { name: "Blue Crabs", price: "$32.99", unit: "/ dozen", image: "/crabs.png" },
  { name: "Crawfish", price: "$24.99", unit: "/ lb", image: "/crabs.png" },
  { name: "Shrimp", price: "$19.99", unit: "/ lb", image: "/crabs.png" },
  { name: "Blue Crabs", price: "$32.99", unit: "/ dozen", image: "/crabs.png" },
  { name: "Crawfish", price: "$24.99", unit: "/ lb", image: "/crabs.png" },
  { name: "Shrimp", price: "$19.99", unit: "/ lb", image: "/crabs.png" },
];

export default function FromTide() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector(
          "[data-carousel-next]",
        ) as HTMLElement;
        nextButton?.click();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100/30">
      <div className="container pad ">
        <div className="text-center mb-12">
          <h4 className="mb-1 subtitle">Featured Products</h4>
          <h2 className="title mb-2 ">Our Fresh Selection</h2>
          <p className="p mx-auto w-[90%] max-w-[600px]">
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
                    flex flex-col bg-white
                    basis-[90%] sm:basis-[45%] md:basis-1/3 lg:basis-[32.8%] pl-0 p-3 rounded-[30px]! relative left-2 sm:left-3 md:left-1
                  "
                >
                  <div className="w-full ">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300  rounded-[20px]!"
                    />
                  </div>
                  <div className="p-4 pb-2! sm:p-6 flex  justify-between  ">
                    <div className="w-[80%]">
                      <h3 className="text-lg md:text-2xl  lg:text-3xl font-[400] text-gray-900 salsify">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base flex gap-2 items-end">
                        <span className="text-black text-[20px] ">
                          {product.price}
                        </span>{" "}
                        {product.unit}
                      </p>
                    </div>
                    <IoCart className="text-white bg-teal-500 p-3.5 rounded-xl w-8 h-8 sm:w-10 sm:h-10 size-14!" />
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
