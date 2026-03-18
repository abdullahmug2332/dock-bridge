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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  if (!product) {
    return <div className="text-center mt-20 text-xl">Product not found</div>;
  }

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const handleAddToCart = () => {
    console.log(
      `Added ${product.name} (${selectedWeight} lbs x ${quantity}) to cart`,
    );
    setOpen(true);
  };

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const calculatedPrice = product.price * selectedWeight;

  

  return (
    <div className="min-h-screen" style={{ background: "#f7f9f9" }}>
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-400 flex items-center gap-1.5">
          <Link to="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link
            to="/products"
            className="hover:text-gray-600 transition-colors"
          >
            Products
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium color">{product.name}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-10">
          {/* ── LEFT: Image Gallery ── */}
          <div className="md:w-1/2 space-y-3">
            {/* Main carousel */}
            <div
              className="relative overflow-hidden rounded-2xl bg-white shadow-sm"
              ref={emblaRef}
              style={{ border: "1px solid #ececec" }}
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

              {/* Arrows */}
              <button
                onClick={scrollPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 shadow-md p-2 rounded-full transition-all duration-200"
                style={{ border: "1px solid #ececec" }}
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 shadow-md p-2 rounded-full transition-all duration-200"
                style={{ border: "1px solid #ececec" }}
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: selectedIndex === i ? "20px" : "7px",
                      height: "7px",
                      background:
                        selectedIndex === i
                          ? "#1ca7a6"
                          : "rgba(255,255,255,0.7)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto slim-scrollbar pb-1">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => scrollTo(index)}
                  alt={`thumb-${index}`}
                  className="w-[23%] aspect-square object-cover rounded-xl cursor-pointer transition-all duration-200 flex-shrink-0"
                  style={{
                    border:
                      selectedIndex === index
                        ? "2px solid #1ca7a6"
                        : "2px solid transparent",
                    boxShadow:
                      selectedIndex === index
                        ? "0 0 0 3px rgba(28,167,166,0.15)"
                        : "none",
                    outline: "1px solid #ececec",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div className="md:w-1/2 flex flex-col space-y-5">
            {/* Title + Rating */}
            <div>
              <h1 className="text-[32px] font-bold text-gray-800 leading-tight salsify">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-0.5">
                  {stars.map((n) => (
                    <svg
                      key={n}
                      className={`w-4 h-4 ${n <= Math.round(product.rating) ? "color2" : "text-gray-200"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.944a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.287 3.944c.3.921-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.175 0L5.25 17.88c-.784.57-1.839-.197-1.54-1.118l1.287-3.944a1 1 0 00-.364-1.118L1.266 9.37c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.944z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] text-gray-400 font-medium">
                  {product.rating.toFixed(1)} rating
                </span>
              </div>
            </div>

            {/* Price */}
            <div
              className="inline-flex items-baseline gap-1 px-4 py-2.5 rounded-xl w-fit"
              style={{ background: "#f0fafa", border: "1px solid #c8e8e8" }}
            >
              <span className="text-[13px] text-gray-400 font-medium">
                Price
              </span>
              <span className="text-[28px] font-bold color ml-1">
                ${calculatedPrice.toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-[14px] text-gray-500 leading-relaxed">
              {product.description}
            </p>

            {/* Divider */}
            <div className="h-px w-full" style={{ background: "#ececec" }} />

            {/* Weight selector */}
            <div className="space-x-2">
              <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
                Weight (lbs)
              </label>

              <select
                value={selectedWeight || ""}
                onChange={(e) => setSelectedWeight(Number(e.target.value))}
                onClick={(e) => {
                  e.stopPropagation(); // prevent card navigation
                  e.preventDefault();
                }}
                className="w-fit px-3 py-2 rounded-lg text-[13px] font-semibold text-gray-600 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
              >
                <option value="" disabled>
                  Select weight
                </option>

                {product.weights.map((w) => (
                  <option key={w} value={w}>
                    {w} lbs
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-3">
              {/* Qty stepper */}
              <div
                className="flex items-center rounded-lg overflow-hidden"
                style={{ border: "1.5px solid #e5e5e5" }}
              >
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3.5 py-2.5 text-gray-500 hover:bg-gray-50 transition-colors text-lg font-medium cursor-pointer"
                >
                  −
                </button>
                <span
                  className="px-4 py-2.5 text-[15px] font-semibold text-gray-800 min-w-[40px] text-center"
                  style={{
                    borderLeft: "1.5px solid #e5e5e5",
                    borderRight: "1.5px solid #e5e5e5",
                  }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3.5 py-2.5 text-gray-500 hover:bg-gray-50 transition-colors text-lg font-medium cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn flex-1 text-center"
              >
                Add to Cart
              </button>
            </div>

            {/* Divider */}
            <div className="h-px w-full" style={{ background: "#ececec" }} />

            {/* Info rows */}
            <div className="space-y-2.5 text-[13px] text-gray-500">
              <p className="text-gray-400 italic">
                Shipping calculated at checkout.
              </p>

              <div className="flex items-center gap-2.5">
                <Package size={15} className="color flex-shrink-0" />
                <span>Orders over $50 ship free</span>
              </div>

              <div className="flex items-center gap-2.5">
                <DollarSign size={15} className="color flex-shrink-0" />
                <span>15-day hassle-free returns</span>
              </div>

              <div className="flex items-center gap-2.5">
                <HelpCircle size={15} className="color flex-shrink-0" />
                <span className="cursor-pointer hover:underline underline-offset-2 transition-colors">
                  Ask a question
                </span>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-[12px] uppercase tracking-[0.12em] font-semibold text-gray-400">
                Share
              </span>
              <div className="h-px w-4" style={{ background: "#e5e5e5" }} />
              {[Facebook, Twitter, Linkedin, Send].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                  style={{ border: "1.5px solid #e5e5e5", background: "white" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#1ca7a6";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#f0fafa";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#e5e5e5";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "white";
                  }}
                >
                  <Icon size={14} className="color" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Add to Cart Modal ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md border-0 p-0 overflow-hidden bg-white shadow-2xl rounded-2xl">
          <div
            className="h-1.5 w-full"
            style={{
              background:
                "linear-gradient(to right, #1ca7a6, #23c9c8, #FF6B5A)",
            }}
          />

          <div className="px-8 py-8 flex flex-col items-center text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm"
              style={{ background: "#f0fafa", border: "2px solid #1ca7a6" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1ca7a6"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2 className="salsify text-[28px] text-gray-800 leading-tight">
              Added to Cart!
            </h2>
            <p className="text-[13px] text-gray-400 mt-1 tracking-wide">
              Your item is waiting in your cart.
            </p>

            <div
              className="w-full h-px my-6"
              style={{
                background:
                  "linear-gradient(to right, transparent, #d3d3d3, transparent)",
              }}
            />

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={() => navigate("/cart")}
                className="btn flex-1 text-center"
              >
                View Cart
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="btn2 flex-1 text-center"
              >
                Check Out
              </button>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 text-[13px] text-gray-400 hover:text-gray-600 tracking-wide transition-colors duration-200 underline underline-offset-2 cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DetailPage;
