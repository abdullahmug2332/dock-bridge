import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiLock, FiRotateCcw, FiZap } from "react-icons/fi";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  { id: 1, name: "Fresh Salmon", price: 25.99, quantity: 2 },
  { id: 2, name: "King Crab", price: 45.5, quantity: 1 },
];

const inputStyle = {
  border: "1px solid #d3d3d3",
  background: "#fafafa",
};

const inputClass =
  "w-full px-3.5 py-2.5 rounded-lg text-[14px] text-gray-800 placeholder:text-gray-300 outline-none transition-all duration-200";

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClass}
        style={inputStyle}
        onFocus={(e) => {
          e.target.style.borderColor = "#1ca7a6";
          e.target.style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#d3d3d3";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  const handleOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen" style={{ background: "#f7f9f9" }}>
      {/* Top accent bar */}
      <div
        className="h-1"
        style={{
          background: "linear-gradient(to right, #1ca7a6, #23c9c8, #FF6B5A)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <p
            className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-1"
            style={{ color: "#1ca7a6" }}
          >
            Final Step
          </p>
          <h1 className="salsify text-[42px] md:text-[52px] text-gray-800 leading-none">
            Checkout
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* ── LEFT SIDE ── */}
          <div className="md:col-span-2 space-y-6">
            {/* Billing Details */}
            <div
              className="bg-white rounded-2xl p-7 shadow-sm"
              style={{ border: "1px solid #ececec" }}
            >
              {/* Section header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[13px] font-bold shadow-sm flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#1ca7a6,#23c9c8)",
                  }}
                >
                  1
                </div>
                <h2 className="text-[17px] font-semibold text-gray-700 tracking-tight">
                  Billing Details
                </h2>
                <div
                  className="h-px flex-1"
                  style={{
                    background:
                      "linear-gradient(to right, #e0e0e0, transparent)",
                  }}
                />
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="First Name" placeholder="John" />
                  <Field label="Last Name" placeholder="Doe" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                  />
                  <Field label="Phone" placeholder="+1 234 567 890" />
                </div>
                <Field label="Street Address" placeholder="123 Street Name" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="City" placeholder="New York" />
                  <Field label="Postal Code" placeholder="10001" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div
              className="bg-white rounded-2xl p-7 shadow-sm"
              style={{ border: "1px solid #ececec" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[13px] font-bold shadow-sm flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#FF6B5A,#ff8a7a)",
                  }}
                >
                  2
                </div>
                <h2 className="text-[17px] font-semibold text-gray-700 tracking-tight">
                  Payment Method
                </h2>
                <div
                  className="h-px flex-1"
                  style={{
                    background:
                      "linear-gradient(to right, #e0e0e0, transparent)",
                  }}
                />
              </div>

              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-3"
              >
                {/* Card option */}
                <label
                  htmlFor="card"
                  className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200"
                  style={{
                    border:
                      paymentMethod === "card"
                        ? "1.5px solid #1ca7a6"
                        : "1.5px solid #e5e5e5",
                    background:
                      paymentMethod === "card"
                        ? "rgba(28,167,166,0.04)"
                        : "#fafafa",
                  }}
                >
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="accent-[#1ca7a6]"
                  />
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(28,167,166,0.1)" }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1ca7a6"
                        strokeWidth="1.8"
                      >
                        <rect
                          x="1"
                          y="4"
                          width="22"
                          height="16"
                          rx="2"
                          ry="2"
                        />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-gray-700">
                        Credit / Debit Card
                      </p>
                      <p className="text-[11px] text-gray-400">
                        Visa, Mastercard, Amex
                      </p>
                    </div>
                  </div>
                </label>

                {/* COD option */}
                <label
                  htmlFor="cod"
                  className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200"
                  style={{
                    border:
                      paymentMethod === "cod"
                        ? "1.5px solid #1ca7a6"
                        : "1.5px solid #e5e5e5",
                    background:
                      paymentMethod === "cod"
                        ? "rgba(28,167,166,0.04)"
                        : "#fafafa",
                  }}
                >
                  <RadioGroupItem value="cod" id="cod" />
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(255,107,90,0.1)" }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FF6B5A"
                        strokeWidth="1.8"
                      >
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-gray-700">
                        Cash on Delivery
                      </p>
                      <p className="text-[11px] text-gray-400">
                        Pay when your order arrives
                      </p>
                    </div>
                  </div>
                </label>
              </RadioGroup>

              {/* Card fields */}
              {paymentMethod === "card" && (
                <div
                  className="mt-5 space-y-4 p-5 rounded-xl"
                  style={{
                    background: "#f7f9f9",
                    border: "1px dashed #c8e8e8",
                  }}
                >
                  <Field
                    label="Card Number"
                    placeholder="1234 5678 9012 3456"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Expiry Date" placeholder="MM / YY" />
                    <Field label="CVC" placeholder="123" />
                  </div>

                  {/* Card brand icons */}
                  <div className="flex items-center gap-2 pt-1">
                    {["VISA", "MC", "AMEX"].map((brand) => (
                      <span
                        key={brand}
                        className="text-[10px] font-bold px-2 py-1 rounded"
                        style={{
                          background: "#e8f5f5",
                          color: "#1ca7a6",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {brand}
                      </span>
                    ))}
                    <span className="text-[11px] text-gray-300 ml-1">
                      Secured & encrypted
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── ORDER SUMMARY ── */}
          <div className="space-y-4 sticky top-6">
            <div
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1px solid #ececec" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[13px] font-bold shadow-sm flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#1ca7a6,#FF6B5A)",
                  }}
                >
                  ✓
                </div>
                <h2 className="text-[17px] font-semibold text-gray-700 tracking-tight">
                  Order Summary
                </h2>
              </div>

              {/* Items */}
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-2.5 px-3 rounded-lg"
                    style={{ background: "#f7f9f9" }}
                  >
                    <div>
                      <p className="text-[13px] font-semibold text-gray-700">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-[14px] font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
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
                    className="text-[24px] font-semibold"
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

              {/* Place Order button */}
              <button
                onClick={handleOrder}
                className="btn2 w-full mt-4 py-3 rounded-md text-[13px] tracking-[0.15em] uppercase font-semibold transition-all duration-300"
              >
                Place Order
              </button>

              {/* Trust badges */}
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
                    <span className="text-[25px] color2">{badge.icon}</span>
                    <span className="text-[10px] text-gray-700 tracking-wide">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
