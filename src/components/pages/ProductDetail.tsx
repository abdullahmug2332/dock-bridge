import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Package,
  DollarSign,
  Check,
  HelpCircle,
  Facebook,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/products";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

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
    setOpen(true);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  // Create stars array
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
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
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Left: Image gallery */}
            <div className="w-full space-y-4">
              {/* Main carousel */}
              <div
                className="relative overflow-hidden rounded-md"
                ref={emblaRef}
              >
                <div className="flex">
                  {product.images.map((img, index) => (
                    <div key={index} className="flex-[0_0_100%] aspect-square">
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Left Arrow */}
                <button
                  onClick={scrollPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md p-2 rounded-full transition"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={scrollNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md p-2 rounded-full transition"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto slim-scrollbar">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => scrollTo(index)}
                    alt={`thumb-${index}`}
                    className={`w-[24%] aspect-square object-cover rounded-md cursor-pointer border transition
          ${
            selectedIndex === index
              ? "border-blue-500 ring-2 ring-blue-400"
              : "border-gray-200"
          }`}
                  />
                ))}
              </div>
            </div>
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
          <div className="space-y-3 text-sm text-gray-700 mt-6">
            {/* Shipping */}
            <p className="text-gray-500">Shipping Calculated at checkout.</p>

            {/* Shipping free */}
            <div className="flex items-center gap-2">
              <Package size={18} />
              <span>Orders over $50 ship free</span>
            </div>

            {/* Returns */}
            <div className="flex items-center gap-2">
              <DollarSign size={18} />
              <span>15 day returns</span>
            </div>

            {/* Ask Question */}
            <div className="flex items-center gap-2">
              <HelpCircle size={18} />
              <span className="cursor-pointer hover:underline">
                Ask a question
              </span>
            </div>

            {/* Share */}
            <div className="flex items-center gap-2 pt-2">
              <span className="font-semibold">Share:</span>
              <Facebook size={18} className="cursor-pointer hcolor" />
              <Twitter size={18} className="cursor-pointer hcolor" />
              <Linkedin size={18} className="cursor-pointer hcolor" />
              <Send size={18} className="cursor-pointer hcolor" />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
