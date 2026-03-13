"use client";

import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AiFillStar } from "react-icons/ai";
import { BiSolidQuoteRight } from "react-icons/bi";
interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Customer",
    message:
      "I've ordered seafood online before, but this was by far the freshest delivery I've received. The fish was perfectly cleaned, neatly packed, and delivered on time. You can truly taste the difference in quality.",
    image: "/user.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Customer",
    message:
      "Super impressed with the hygiene and packaging standards. The prawns were fresh and cooked beautifully. Ordering was simple, and the delivery was smooth. Definitely my go-to seafood store now.",
    image: "/user.jpg",
  },
  {
    name: "Cynthia Griffin",
    role: "Customer",
    message:
      "I've ordered seafood online before, but this was by far the freshest delivery I've received. The fish was perfectly cleaned, neatly packed, and delivered on time. You can truly taste the difference in quality.",
    image: "/user.jpg",
  },
  {
    name: "John Doe",
    role: "Customer",
    message:
      "I've ordered seafood online before, but this was by far the freshest delivery I've received. The fish was perfectly cleaned, neatly packed, and delivered on time. You can truly taste the difference in quality.",
    image: "/user.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Customer",
    message:
      "Super impressed with the hygiene and packaging standards. The prawns were fresh and cooked beautifully. Ordering was simple, and the delivery was smooth. Definitely my go-to seafood store now.",
    image: "/user.jpg",
  },
  {
    name: "Cynthia Griffin",
    role: "Customer",
    message:
      "I've ordered seafood online before, but this was by far the freshest delivery I've received. The fish was perfectly cleaned, neatly packed, and delivered on time. You can truly taste the difference in quality.",
    image: "/user.jpg",
  },
];

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Autoplay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector(
          "[data-carousel-next]",
        ) as HTMLElement;
        nextButton?.click();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" pad container" id="testimonials">
      <div className="relative">
        <Carousel ref={carouselRef} className="gap-6" opts={{ loop: true }}>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-12">
            <div>
              <p className="subtitle mb-2 ">Testimonials</p>
              <h2 className="title">
                What Our Customers Say
              </h2>
            </div>
            <div className="flex items-center gap-2 ml-auto lg:ml-0">
              <CarouselPrevious className="relative top-10 left-0  bg2 border2 text-white rounded-md shadow-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer z-10" />
              <CarouselNext className="relative top-10 left-0 -translate-y-1/2 bg2 border2 text-white rounded-md shadow-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer z-10" />
            </div>
          </div>
          <CarouselContent className="gap-4 px-2 sm:px-7">
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="
                  flex flex-col bg-[#F7F7F8] rounded-xl shadow-lg p-6
                  basis-[90%] md:basis-1/2 lg:basis-1/3 
                "
              >
                <div className="flex items-center mb-4">
                  {/* Star rating */}
                  <div className="flex text-yellow-400 mr-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                  </div>
                  <span className="color ml-auto">
                    <BiSolidQuoteRight className="size-10" />
                  </span>
                </div>
                <p className="p mb-4 flex-1">{t.message}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-md mr-3 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
