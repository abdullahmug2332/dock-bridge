import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { categories } from "@/lib/products";
import CategoryCard from "@/components/CategoryCard";

interface Product {
  name: string;
  price: string;
  unit?: string;
  image: string;
}

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
    <div className="bg-gray-100/30" id="products">
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
              {categories.map((category) => (
                <CarouselItem
                  key={category.id}
                  className="basis-[90%] sm:basis-[45%] md:basis-1/3 lg:basis-[32.8%] relative left-2 sm:left-3 md:left-1"
                >
                  <CategoryCard category={category} />
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
