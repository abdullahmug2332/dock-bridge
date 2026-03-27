import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FiPackage, FiTruck, FiMapPin, FiCalendar, FiX } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

type OrderItem = { name: string; qty: number; price: string };
type Order = {
  id: number;
  date: string;
  status: "Processing" | "Shipped" | "Delivered";
  items: OrderItem[];
  total: string;
  shipping: string;
};

const orders: Order[] = [
  { id: 101, date: "2026-03-16", status: "Processing", items: [{ name: "Salmon Fillet", qty: 2, price: "$15.00" }, { name: "Lobster Tail", qty: 1, price: "$25.00" }], total: "$55.00", shipping: "123 Ocean Ave, Miami, FL" },
  { id: 102, date: "2026-03-15", status: "Shipped", items: [{ name: "Shrimp Pack", qty: 3, price: "$30.00" }, { name: "Crab Legs", qty: 2, price: "$40.00" }], total: "$100.00", shipping: "456 Sea St, Miami, FL" },
  { id: 103, date: "2026-03-14", status: "Delivered", items: [{ name: "King Crab", qty: 1, price: "$45.00" }, { name: "Tuna Steak", qty: 2, price: "$22.00" }], total: "$89.00", shipping: "789 Bay Rd, Miami, FL" },
  { id: 104, date: "2026-03-13", status: "Shipped", items: [{ name: "Shrimp Pack", qty: 3, price: "$30.00" }, { name: "Crab Legs", qty: 2, price: "$40.00" }], total: "$100.00", shipping: "456 Sea St, Miami, FL" },
  { id: 105, date: "2026-03-12", status: "Processing", items: [{ name: "Salmon Fillet", qty: 2, price: "$15.00" }, { name: "Lobster Tail", qty: 1, price: "$25.00" }], total: "$55.00", shipping: "123 Ocean Ave, Miami, FL" },
  { id: 106, date: "2026-03-11", status: "Delivered", items: [{ name: "Oysters", qty: 12, price: "$36.00" }, { name: "Clam Chowder", qty: 2, price: "$18.00" }], total: "$54.00", shipping: "321 Harbor Dr, Miami, FL" },
  { id: 107, date: "2026-03-10", status: "Processing", items: [{ name: "Salmon Fillet", qty: 2, price: "$15.00" }], total: "$30.00", shipping: "123 Ocean Ave, Miami, FL" },
  { id: 108, date: "2026-03-09", status: "Shipped", items: [{ name: "Crab Legs", qty: 2, price: "$40.00" }], total: "$80.00", shipping: "456 Sea St, Miami, FL" },
];

const statusConfig = {
  Processing: { color: "#FF6B5A", bg: "#fff5f3", border: "#ffd4ce", icon: <FiPackage size={11} /> },
  Shipped:    { color: "#f59e0b", bg: "#fffbeb", border: "#fde68a", icon: <FiTruck size={11} /> },
  Delivered:  { color: "#1ca7a6", bg: "#f0fafa", border: "#c8e8e8", icon: <FiPackage size={11} /> },
};

const steps = ["Processing", "Shipped", "Delivered"];

export default function CurrentOrders() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [open, setOpen] = useState(false);

  const openOrder = (order: Order) => { setSelectedOrder(order); setOpen(true); };
  const stepIndex = selectedOrder ? steps.indexOf(selectedOrder.status) : 0;

  return (
    <div className="min-h-screen" style={{ background: "#f7f9f9" }}>
      <div className="container py-12">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-1" style={{ color: "#1ca7a6" }}>
            Track & Manage
          </p>
          <h1 className="salsify text-[42px] md:text-[52px] text-gray-800 leading-none">
            Current Orders
          </h1>
        </div>

        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#f0fafa", border: "2px solid #c8e8e8" }}>
              <HiOutlineShoppingBag size={32} style={{ color: "#1ca7a6" }} />
            </div>
            <p className="text-[18px] font-semibold text-gray-600 salsify">No current orders</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: "1px solid #ececec" }}>

            {/* Table header */}
            <div
              className="grid grid-cols-6 px-6 py-3.5 text-[11px] tracking-[0.15em] uppercase font-bold text-gray-400"
              style={{ background: "#f7f9f9", borderBottom: "1px solid #ececec" }}
            >
              <span>Order ID</span>
              <span>Date</span>
              <span>Status</span>
              <span>Items</span>
              <span>Total</span>
              <span>Action</span>
            </div>

            {/* Rows */}
            {orders.map((order, i) => {
              const s = statusConfig[order.status];
              return (
                <div
                  key={order.id}
                  className="grid grid-cols-6 px-6 py-4 items-center transition-colors duration-150 hover:bg-[#fafcfc]"
                  style={{ borderBottom: i < orders.length - 1 ? "1px solid #f0f0f0" : "none" }}
                >
                  <span className="text-[14px] font-bold text-gray-700">#{order.id}</span>

                  <span className="text-[13px] text-gray-500 flex items-center gap-1.5">
                    <FiCalendar size={12} className="text-gray-300" />
                    {order.date}
                  </span>

                  <span>
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
                    >
                      {s.icon}
                      {order.status}
                    </span>
                  </span>

                  <span className="text-[13px] text-gray-500">
                    {order.items.length} item{order.items.length !== 1 ? "s" : ""}
                  </span>

                  <span className="text-[15px] font-bold salsify" style={{ color: "#1ca7a6" }}>
                    {order.total}
                  </span>

                  <button
                    onClick={() => openOrder(order)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-semibold transition-all duration-200 cursor-pointer w-fit"
                    style={{ border: "1.5px solid #e5e5e5", background: "white", color: "#6b7280" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#1ca7a6";
                      (e.currentTarget as HTMLButtonElement).style.color = "#1ca7a6";
                      (e.currentTarget as HTMLButtonElement).style.background = "#f0fafa";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e5e5";
                      (e.currentTarget as HTMLButtonElement).style.color = "#6b7280";
                      (e.currentTarget as HTMLButtonElement).style.background = "white";
                    }}
                  >
                    View Details
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Summary bar */}
        <div className="mt-4 flex items-center justify-between px-2">
          <p className="text-[13px] text-gray-400">
            Showing <span className="font-semibold text-gray-600">{orders.length}</span> active orders
          </p>
          <div className="flex items-center gap-4 text-[12px] text-gray-400">
            {Object.entries(statusConfig).map(([status, cfg]) => (
              <span key={status} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: cfg.color }} />
                {orders.filter(o => o.status === status).length} {status}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Order Detail Modal ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] border-0 p-0 overflow-hidden bg-white shadow-2xl rounded-2xl">

          {/* Top accent */}
          <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #1ca7a6, #23c9c8, #FF6B5A)" }} />

          {selectedOrder && (
            <div className="px-7 py-6">
              {/* Modal header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="salsify text-[30px] text-gray-800 leading-none">Order Details</h2>
                  <p className="text-[13px] text-gray-400 mt-1">#{selectedOrder.id} · {selectedOrder.date}</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  style={{ border: "1.5px solid #e5e5e5" }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#f5f5f5"}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "white"}
                >
                  <FiX size={14} className="text-gray-500" />
                </button>
              </div>

              {/* Progress tracker */}
              <div className="mb-6 px-1">
                <div className="flex items-center justify-between relative">
                  {/* Track line */}
                  <div className="absolute top-4 left-0 right-0 h-0.5 z-0" style={{ background: "#ececec" }}>
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        background: "#1ca7a6",
                        width: stepIndex === 0 ? "0%" : stepIndex === 1 ? "50%" : "100%",
                      }}
                    />
                  </div>

                  {steps.map((step, i) => {
                    const done = i <= stepIndex;
                    return (
                      <div key={step} className="flex flex-col items-center z-10 gap-2">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-all"
                          style={{
                            background: done ? "#1ca7a6" : "white",
                            color: done ? "white" : "#d3d3d3",
                            border: done ? "2px solid #1ca7a6" : "2px solid #e5e5e5",
                          }}
                        >
                          {done && i < stepIndex ? (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : (
                            i + 1
                          )}
                        </div>
                        <span className="text-[10px] font-semibold tracking-wide" style={{ color: done ? "#1ca7a6" : "#d3d3d3" }}>
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="px-4 py-3 rounded-xl" style={{ background: "#f7f9f9", border: "1px solid #ececec" }}>
                  <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-gray-400 mb-1">Status</p>
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: statusConfig[selectedOrder.status].bg,
                      color: statusConfig[selectedOrder.status].color,
                      border: `1px solid ${statusConfig[selectedOrder.status].border}`,
                    }}
                  >
                    {statusConfig[selectedOrder.status].icon}
                    {selectedOrder.status}
                  </span>
                </div>
                <div className="px-4 py-3 rounded-xl" style={{ background: "#f7f9f9", border: "1px solid #ececec" }}>
                  <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-gray-400 mb-1.5">Date</p>
                  <p className="text-[13px] font-semibold text-gray-700 flex items-center gap-1.5">
                    <FiCalendar size={12} className="text-gray-400" />
                    {selectedOrder.date}
                  </p>
                </div>
              </div>

              {/* Shipping */}
              <div className="flex items-start gap-3 px-4 py-3 rounded-xl mb-5" style={{ background: "#f0fafa", border: "1px solid #c8e8e8" }}>
                <FiMapPin size={15} style={{ color: "#1ca7a6", marginTop: "2px" }} className="flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] font-bold mb-0.5" style={{ color: "#1ca7a6" }}>Shipping Address</p>
                  <p className="text-[13px] text-gray-600">{selectedOrder.shipping}</p>
                </div>
              </div>

              {/* Items */}
              <div className="mb-5">
                <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-400 mb-3">Order Items</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg"
                      style={{ background: "#f7f9f9", border: "1px solid #ececec" }}
                    >
                      <div>
                        <p className="text-[13px] font-semibold text-gray-700">{item.name}</p>
                        <p className="text-[11px] text-gray-400">Qty: {item.qty}</p>
                      </div>
                      <span className="text-[14px] font-bold" style={{ color: "#1ca7a6" }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total + close */}
              <div
                className="flex items-center justify-between px-4 py-3 rounded-xl mb-5"
                style={{ background: "#f7f9f9", border: "1px solid #ececec" }}
              >
                <span className="text-[13px] font-semibold text-gray-500">Order Total</span>
                <span className="salsify text-[24px] font-bold" style={{ color: "#1ca7a6" }}>
                  {selectedOrder.total}
                </span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="btn w-full py-3 text-center rounded-lg text-[13px] tracking-wide uppercase font-semibold"
              >
                Close
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}