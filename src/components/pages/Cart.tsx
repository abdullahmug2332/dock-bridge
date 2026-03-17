import { useState } from "react";
import { Trash2, Minus, Plus, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { FiLock, FiRotateCcw, FiZap } from "react-icons/fi";
type CartItem = {
  id: number;
  name: string;
  image: string;
  weight: number;
  price: number;
  quantity: number;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Fresh Salmon",
    image: "/seafood.jpg",
    weight: 2,
    price: 25.99,
    quantity: 1,
  },
  {
    id: 2,
    name: "King Crab",
    image: "/product1.png",
    weight: 1,
    price: 45.5,
    quantity: 1,
  },
];

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const increaseQty = (id: number) =>
    setCart((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );

  const decreaseQty = (id: number) =>
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );

  const removeItem = (id: number) =>
    setCart((items) => items.filter((item) => item.id !== id));

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen" style={{ background: "#f7f9f9" }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <p
            className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-1"
            style={{ color: "#1ca7a6" }}
          >
            Review Items
          </p>
          <h1 className="salsify text-[42px] md:text-[52px] text-gray-800 leading-none">
            Your Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: "#f0fafa", border: "2px solid #c8e8e8" }}
            >
              <ShoppingCart size={32} style={{ color: "#1ca7a6" }} />
            </div>
            <p className="text-[18px] font-semibold text-gray-600 salsify">
              Your cart is empty
            </p>
            <p className="text-[13px] text-gray-400">
              Add some items to get started!
            </p>
            <Link to="/products" className="btn mt-2">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* ── Cart Items ── */}
            <div className="md:col-span-2 space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-5 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200"
                  style={{ border: "1px solid #ececec" }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                    style={{ border: "1px solid #ececec" }}
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-[16px] text-gray-800 truncate">
                      {item.name}
                    </h2>
                    <p className="text-[12px] text-gray-400 mt-0.5">
                      {item.weight} lbs
                    </p>
                    <p
                      className="text-[17px] font-bold mt-1"
                      style={{ color: "#1ca7a6" }}
                    >
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Qty stepper + remove */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div
                      className="flex items-center rounded-lg overflow-hidden"
                      style={{ border: "1.5px solid #e5e5e5" }}
                    >
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-2 text-gray-400 hover:bg-gray-50 transition-colors cursor-pointer"
                        style={{ borderRight: "1.5px solid #e5e5e5" }}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 text-[14px] font-semibold text-gray-800 min-w-[36px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-2 text-gray-400 hover:bg-gray-50 transition-colors cursor-pointer"
                        style={{ borderLeft: "1.5px solid #e5e5e5" }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Line total */}
                    <span className="text-[14px] font-semibold text-gray-700 min-w-[56px] text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer flex-shrink-0"
                      style={{
                        border: "1.5px solid #fde8e8",
                        background: "#fff5f5",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "#fee2e2";
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.borderColor = "#fca5a5";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "#fff5f5";
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.borderColor = "#fde8e8";
                      }}
                    >
                      <Trash2 size={14} className="text-red-400" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Continue shopping */}
              <div className="pt-2">
                <Link
                  to="/products"
                  className="text-[13px] font-medium transition-colors underline underline-offset-2"
                  style={{ color: "#1ca7a6" }}
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* ── Order Summary ── */}
            <div
              className="bg-white rounded-2xl p-6 shadow-sm sticky top-24"
              style={{ border: "1px solid #ececec" }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[13px] font-bold shadow-sm flex-shrink-0"
                  style={{ background: "#1ca7a6" }}
                >
                  ✓
                </div>
                <h2 className="text-[17px] font-semibold text-gray-700 tracking-tight">
                  Order Summary
                </h2>
              </div>
              {/* Item count pill */}
              <div
                className="flex items-center justify-between px-3 py-2 rounded-lg mb-4 text-[12px] font-medium"
                style={{
                  background: "#f0fafa",
                  border: "1px solid #c8e8e8",
                  color: "#1ca7a6",
                }}
              >
                <span>
                  {cart.length} item{cart.length !== 1 ? "s" : ""} in cart
                </span>
                <span>{cart.reduce((a, i) => a + i.quantity, 0)} units</span>
              </div>
              {/* Totals */}
              <div
                className="rounded-xl p-4 space-y-2.5"
                style={{ background: "#f7f9f9", border: "1px solid #ececec" }}
              >
                <div className="flex justify-between text-[13px] text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-700">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-[13px] text-gray-500">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span
                      className="font-semibold"
                      style={{ color: "#1ca7a6" }}
                    >
                      Free
                    </span>
                  ) : (
                    <span className="font-medium text-gray-700">
                      ${shipping.toFixed(2)}
                    </span>
                  )}
                </div>
                <div
                  className="h-px"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, #d3d3d3, transparent)",
                  }}
                />
                <div className="flex justify-between items-center pt-0.5">
                  <span className="text-[15px] font-bold text-gray-800">
                    Total
                  </span>
                  <span
                    className="text-[24px] font-semibold "
                    style={{ color: "#1ca7a6" }}
                  >
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
              {/* Free shipping nudge */}
              {shipping > 0 && (
                <p
                  className="text-[11px] text-center mt-3"
                  style={{ color: "#FF6B5A" }}
                >
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
              {/* Checkout button */}
              <Link to="/checkout">
                <button className="btn2 w-full mt-5 py-3 text-center rounded-md text-[13px] tracking-[0.1em] uppercase font-semibold">
                  Proceed to Checkout
                </button>
              </Link>

              {/* Trust badges */ }
              <div className="flex justify-center gap-4 mt-6">
                {[
                  { icon: <FiLock />, label: "Secure" },
                  { icon: <FiRotateCcw />, label: "Easy Returns" },
                  { icon: <FiZap />, label: "Fast Delivery" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex flex-col items-center gap-2 w-1/4"
                  >
                    <span className="text-[25px] color2">
                      {badge.icon}
                    </span>
                    <span className="text-[10px] text-gray-700 tracking-wide">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
