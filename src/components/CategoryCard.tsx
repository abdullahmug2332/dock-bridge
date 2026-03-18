"use client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
  productCount: number;
};

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      to={`/products?category=${category.id}`}
      className="flex flex-col bg-white shadow-lg hover:shadow-xl transition relative"
    >
      {/* Category Image */}
      <div className="w-full">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover aspect-square"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 items-center text-center">
        <h3 className="text-lg md:text-xl lg:text-2xl font-[600] text-gray-700 salsify">
          {category.name}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2">
          {category.description}
        </p>

        {/* Product Count */}
        <p className="text-sm text-gray-500 font-medium">
          {category.productCount} Products
        </p>

        {/* Button */}
        <Button className="btn w-full py-4! rounded-none! mt-2">
          View Category
        </Button>
      </div>
    </Link>
  );
}