import { IoCart } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Button } from "../ui/button";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

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
  { name: "Blue Crabs", price: "$32.99", unit: "/ dozen", image: "/crabs.png" },
  { name: "Crawfish", price: "$24.99", unit: "/ lb", image: "/crabs.png" },
  { name: "Shrimp", price: "$19.99", unit: "/ lb", image: "/crabs.png" },
];

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
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-white p-3 rounded-[30px] relative shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="w-full overflow-hidden rounded-[20px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="mt-4 flex justify-between items-center">
                  <div className="w-[70%]">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-[400] text-gray-900 salsify">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base flex gap-2 items-end">
                      <span className="text-black text-[18px] sm:text-[20px]">
                        {product.price}
                      </span>{" "}
                      {product.unit}
                    </p>
                  </div>

                  <button className="text-white bg-teal-500 p-3.5 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-teal-600 transition-colors">
                    <IoCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
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
            <Button
              onClick={() => console.log("Prev page")}
            >
              <MdArrowBackIos/>Previous
            </Button>
            <Button
              onClick={() => console.log("Next page")}
            > 
              Next<MdArrowForwardIos/>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
