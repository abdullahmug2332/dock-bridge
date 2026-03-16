import { IoCart } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Button } from "../ui/button";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { products } from "@/lib/products";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";

const categories = [
  "Fresh Fish",
  "Shellfish",
  "Lobster",
  "Caviar",
  "Quality Meat",
  "Lobster Tails",
  "Prepared",
  "Shrimp",
  "Dumplings",
  "Trifecta",
];

export default function Products() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#FBFBFC] min-h-screen py-10">
      <div
        className={`container mx-auto flex flex-col lg:flex-row ${toggle ? "gap-10" : "gap-0 lg:gap-10"} items-start`}
      >
        {/* Sidebar Categories */}
        <div
          className={`w-full lg:w-1/4 bg-white rounded-xl py-6 px-3 shadow-md block lg:sticky top-25 transition-all duration-500 ${toggle ? "max-h-[600px] opacity-100" : "max-h-[0px] py-0! lg:py-6! opacity-0 lg:opacity-100 lg:max-h-[600px] overflow-hidden "}`}
        >
          <h2 className=" text-xl mb-4 font-[700] salsify px-3">SHOP ALL</h2>
          <ul className="">
            {categories.map((category, index) => (
              <li
                key={index}
                className="flex justify-between items-center cursor-pointer hover:text-white transition-colors hover:bg-[var(--secondary)] px-3 py-1.5 rounded-sm"
              >
                {category}
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid */}
        <section className="flex-1 ">
          {/* Page Header / Sorting */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold salsify order-2 lg:order-1 mr-auto">
              Shrimp with Shell
            </h1>
            <div className="flex items-center gap-1 order-1 lg:order-2 ml-auto">
              <Button
                className="flex lg:hidden"
                onClick={() => setToggle(!toggle)}
              >
                Filter
                <FaFilter />
              </Button>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span>Sort by:</span>
                <select className="border rounded p-1 text-sm ring-0!">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="basis-[90%] sm:basis-[45%] md:basis-1/3 lg:basis-[32.8%] relative left-2 sm:left-3 md:left-1"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* ... your existing code above ... */}

          {/* Showing count */}
          <p className="text-center text-gray-500 text-sm mt-10">
            Showing {products.length} products
          </p>

          {/* Pagination Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button onClick={() => console.log("Prev page")}>
              <MdArrowBackIos />
              Previous
            </Button>
            <Button onClick={() => console.log("Next page")}>
              Next
              <MdArrowForwardIos />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
