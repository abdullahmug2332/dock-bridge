"use client";

import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Product = {
  id: number;
  name: string;
  price: number;
  unit?: string;
  images: string[];
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent link navigation
    setOpen(true);
  };

  return (
    <>
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col bg-white p-3 rounded-[30px]"
      >
        <div className="w-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        <div className="p-4 pb-2 sm:p-6 flex justify-between">
          <div className="w-[80%]">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-[400] text-gray-900 salsify">
              {product.name}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base flex gap-2 items-end">
              <span className="text-black text-[20px]">${product.price}</span>
              {product.unit}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="text-white bg-teal-500 p-3.5 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-teal-600 transition-colors"
          >
            <IoCart className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </Link>

      {/* ADD TO CART MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl py-10 px-5">
          <DialogHeader>
            <DialogTitle>
              <p className="text-xl text-center">
                Product added to cart successfully!
              </p>
            </DialogTitle>
          </DialogHeader>

          <div className="flex justify-center gap-3 mt-4">
            <Button onClick={() => navigate("/cart")} className="btn2">
              View Cart
            </Button>

            <Button
              variant="secondary"
              onClick={() => navigate("/checkout")}
              className="btn2"
            >
              Check Out
            </Button>

            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="btn2"
            >
              Continue Shopping
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
    </>
  );
}
