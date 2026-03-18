"use client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Product = {
  id: number;
  name: string;
  price: number;
  category?: string;
  unit?: string;
  weights: number[];
  images: string[];
  isPreorder?: boolean; // NEW: Pre-order flag
  preorderPickupDate?: string; // NEW: Pickup date for pre-order
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
  const [selectedWeight, setSelectedWeight] = useState(
    product?.weights[0] || 1,
  );
  const calculatedPrice = product.price * selectedWeight;

  return (
    <>
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col bg-white shadow-lg "
      >
        {/* Product Image */}
        <div className="w-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        <div className="p-4 pb-2 sm:p-4">
          <div className="w-full flex flex-col gap-2 items-center relative">
            <h3 className="text-lg md:text-xl lg:text-2xl text-center font-[600] text-gray-700 salsify">
              {product.name}
            </h3>

            <p className="text-gray-700 text-[15px] font-medium">
              ${calculatedPrice.toFixed(2)}
            </p>

            {/* Pre-Order Info */}
            {/* Pre-Order Info (fixed height for all cards) */}
            <select
              value={selectedWeight || ""}
              onChange={(e) => setSelectedWeight(Number(e.target.value))}
              onClick={(e) => {
                e.stopPropagation(); // prevent card navigation
                e.preventDefault();
              }}
              className="w-[100px] px-3 py-1 rounded-lg text-[13px] font-semibold text-gray-600 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
            >
            
              {product.weights.map((w) => (
                <option key={w} value={w}>
                  {w} lbs
                </option>
              ))}
            </select>
            <Button className="btn w-full py-4! rounded-none!">
              Add to cart
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={(e) => e.preventDefault()} // stop Link navigation
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <BsInfoCircleFill className="text-gray-700" />
                </div>
              </TooltipTrigger>

              <TooltipContent>
                <p>Pricing is subject to change</p>
              </TooltipContent>
            </Tooltip>
          </div>
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
