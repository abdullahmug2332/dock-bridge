"use client";

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[]; // multiple images
  weights: number[];
  rating: number; // 0–5 star rating
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Fresh Salmon",
    description:
      "Experience the rich, buttery taste of our freshly caught salmon, sustainably sourced from the cold waters of the North Atlantic. Perfect for grilling, baking, or pan-searing, this premium salmon is rich in omega-3 fatty acids and protein, making it both delicious and nutritious. Each fillet is carefully inspected for quality and freshness, ensuring a melt-in-your-mouth experience with every bite. Ideal for family dinners, special occasions, or gourmet recipes at home.",
    price: 25.99,
    images: ["/seafood.jpg", "/seafood.jpg", "/seafood.jpg", "/seafood.jpg"],
    weights: [1, 2, 3, 5],
    rating: 4.2,
  },
  {
    id: 2,
    name: "King Crab",
    description:
      "Indulge in the succulent taste of our premium king crab legs, hand-selected for their size, flavor, and freshness. Perfect for steaming, boiling, or grilling, these crab legs offer a sweet, delicate meat that is both tender and satisfying. Rich in protein and low in fat, king crab is a luxurious choice for seafood lovers seeking a gourmet experience. Serve with melted butter, lemon, and your favorite sides for an unforgettable dining experience.",
    price: 45.5,
    images: ["/seafood.png", "/seafood.png", "/seafood.png", "/seafood.png"],
    weights: [1, 2, 4],
    rating: 4.8,
  },
];

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const product = PRODUCTS.find((p) => p.id === productId);

  const [selectedWeight, setSelectedWeight] = useState(
    product?.weights[0] || 1,
  );
  const [quantity, setQuantity] = useState(1);

  // Not found
  if (!product) {
    return <div className="text-center mt-20 text-xl">Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log(
      `Added ${product.name} (${selectedWeight} lbs x ${quantity}) to cart`,
    );
  };

  // Create stars array
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500">
        <Link to="/" className="hover:text-gray-700">
          Home
        </Link>{" "}
        /{" "}
        <span className="text-gray-700 font-medium color">{product.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Image gallery */}
        <div className="md:w-1/2 space-y-4">
          {/* Main carousel */}
          <Carousel className="relative">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index} className="aspect-square">
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2">
              <ChevronLeft />
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2">
              <ChevronRight />
            </CarouselNext>
          </Carousel>

          {/* Thumbnails grid */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb ${index + 1}`}
                className="w-full aspect-square object-cover rounded-md border"
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="md:w-1/2 flex flex-col  space-y-4">
          <div>
            {/* Product Title */}
            <h1 className="text-3xl font-bold">{product.name}</h1>

            {/* Stars rating */}
            <div className="flex items-center space-x-1 mt-2">
              {stars.map((n) => (
                <svg
                  key={n}
                  className={`w-5 h-5 ${
                    n <= Math.round(product.rating) ? "color2" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.944a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.287 3.944c.3.921-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.175 0L5.25 17.88c-.784.57-1.839-.197-1.54-1.118l1.287-3.944a1 1 0 00-.364-1.118L1.266 9.37c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.944z" />
                </svg>
              ))}
              <span className="text-sm text-gray-600">
                {product.rating.toFixed(1)}
              </span>
            </div>

            <p className="text-gray-700 mt-4">{product.description}</p>
            <p className="text-2xl font-semibold mt-4">
              Price: ${product.price.toFixed(2)}
            </p>

            {/* Weight select */}
            <div className="mt-4 flex items-center">
              <label className="block mb-1 font-medium">Weight (lbs):</label>
              <select
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(Number(e.target.value))}
                className="border rounded px-5   py-1 ring-0!"
              >
                {product.weights.map((w) => (
                  <option key={w} value={w}>
                    {w} lbs
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Actions: quantity + add to cart */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2"
              >
                +
              </button>
            </div>

            <button onClick={handleAddToCart} className="btn w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
