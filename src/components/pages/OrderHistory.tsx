// components/pages/OrderHistory.jsx
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function OrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Example past orders data
  const orders = [
    {
      id: 95,
      date: "2026-03-01",
      status: "Delivered",
      items: [
        { name: "Salmon Fillet", qty: 2, price: "$15.00" },
        { name: "Lobster Tail", qty: 1, price: "$25.00" },
      ],
      total: "$55.00",
      shipping: "123 Ocean Ave, Miami, FL",
    },
    {
      id: 87,
      date: "2026-02-15",
      status: "Delivered",
      items: [
        { name: "Shrimp Pack", qty: 3, price: "$30.00" },
        { name: "Crab Legs", qty: 2, price: "$40.00" },
      ],
      total: "$100.00",
      shipping: "456 Sea St, Miami, FL",
    },
    {
      id: 88,
      date: "2026-02-10",
      status: "Cancelled",
      items: [
        { name: "Tuna Steak", qty: 2, price: "$20.00" },
        { name: "Clams Pack", qty: 1, price: "$15.00" },
      ],
      total: "$55.00",
      shipping: "789 Bay Rd, Miami, FL",
    },
  ];

  return (
    <div className="container py-10 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 salsify">
        Order History
      </h1>

      {orders.length === 0 ? (
        <p>No past orders.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>#{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.items.length}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedOrder(order)}
                        className="btn2"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg bg-white border-0 ring-0 py-10">
                      <DialogHeader>
                        <DialogTitle className="salsify text-3xl color font-[600]">
                          Order Details
                        </DialogTitle>
                        <DialogDescription className="mt-2 font text-xl">
                          Order #{selectedOrder?.id}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-2">
                        <p>
                          <span className="font-semibold">Status:</span>{" "}
                          {selectedOrder?.status}
                        </p>
                        <p>
                          <span className="font-semibold">Date:</span>{" "}
                          {selectedOrder?.date}
                        </p>
                        <p>
                          <span className="font-semibold">Shipping:</span>{" "}
                          {selectedOrder?.shipping}
                        </p>
                        <div className="mt-2">
                          <p className="font-semibold mb-1">Items:</p>
                          <ul className="space-y-1">
                            {selectedOrder?.items.map((item, idx) => (
                              <li key={idx}>
                                {item.name} — Qty: {item.qty} — Price:{" "}
                                {item.price}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="font-semibold mt-2">
                          Total: {selectedOrder?.total}
                        </p>
                      </div>
                      <DialogFooter>
                        <DialogClose>
                          <Button>Close</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}