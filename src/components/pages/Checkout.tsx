import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

const cartItems: CartItem[] = [
  { id: 1, name: "Fresh Salmon", price: 25.99, quantity: 2 },
  { id: 2, name: "King Crab", price: 45.5, quantity: 1 },
]

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const shipping = subtotal > 50 ? 0 : 5
  const total = subtotal + shipping

  const handleOrder = () => {
    alert("Order placed successfully!")
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold salsify mb-8">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-8">

          {/* Billing Details */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <Input placeholder="John" />
              </div>

              <div>
                <Label>Last Name</Label>
                <Input placeholder="Doe" />
              </div>
            </div>

            <div className="mt-4">
              <Label>Email</Label>
              <Input type="email" placeholder="john@example.com" />
            </div>

            <div className="mt-4">
              <Label>Phone</Label>
              <Input placeholder="+1 234 567 890" />
            </div>

            <div className="mt-4">
              <Label>Street Address</Label>
              <Input placeholder="123 Street name" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label>City</Label>
                <Input placeholder="New York" />
              </div>

              <div>
                <Label>Postal Code</Label>
                <Input placeholder="10001" />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit / Debit Card</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod">Cash on Delivery</Label>
              </div>
            </RadioGroup>

            {paymentMethod === "card" && (
              <div className="mt-6 space-y-4">
                <div>
                  <Label>Card Number</Label>
                  <Input placeholder="1234 5678 9012 3456" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Expiry Date</Label>
                    <Input placeholder="MM / YY" />
                  </div>

                  <div>
                    <Label>CVC</Label>
                    <Input placeholder="123" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-3 text-sm">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t my-4"></div>

          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm mt-2">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
          </div>

          <div className="border-t my-4"></div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Button
            onClick={handleOrder}
            className="w-full mt-6"
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  )
}