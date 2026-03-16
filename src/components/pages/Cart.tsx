import { useState } from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

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
    image: "/seafood.png",
    weight: 1,
    price: 45.5,
    quantity: 1,
  },
];

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const increaseQty = (id: number) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id: number) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl lg:text-4xl font-bold mb-8 salsify">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border rounded-lg p-3 shadow-sm"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />

              <div className="flex-1 flex flex-col sm:flex-row md:items-center ">
                {/* Info */}
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.weight} lbs</p>
                  <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex justify-between flex-row  gap-2">
                  {/* Quantity */}
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-2"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="px-4">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-2"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border rounded-lg p-6 shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Link to={"/checkout"}>
            <Button className="btn2 w-full mt-4! py-5! border2 ">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
