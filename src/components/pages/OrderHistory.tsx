import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FiMapPin, FiCalendar, FiX, FiRotateCcw } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

type OrderItem = { name: string; qty: number; price: string };
type Order = {
  id: number;
  date: string;
  status: "Delivered" | "Cancelled" | "Returned";
  items: OrderItem[];
  total: string;
  shipping: string;
};

const orders: Order[] = [
  { id: 95,  date: "2026-03-01", status: "Delivered", items: [{ name: "Salmon Fillet", qty: 2, price: "$15.00" }, { name: "Lobster Tail", qty: 1, price: "$25.00" }], total: "$55.00",  shipping: "123 Ocean Ave, Miami, FL" },
  { id: 87,  date: "2026-02-15", status: "Delivered", items: [{ name: "Shrimp Pack",   qty: 3, price: "$30.00" }, { name: "Crab Legs",    qty: 2, price: "$40.00" }], total: "$100.00", shipping: "456 Sea St, Miami, FL" },
  { id: 88,  date: "2026-02-10", status: "Cancelled", items: [{ name: "Tuna Steak",    qty: 2, price: "$20.00" }, { name: "Clams Pack",   qty: 1, price: "$15.00" }], total: "$55.00",  shipping: "789 Bay Rd, Miami, FL" },
  { id: 76,  date: "2026-01-28", status: "Delivered", items: [{ name: "King Crab",     qty: 1, price: "$45.00" }, { name: "Oysters",      qty: 6, price: "$18.00" }], total: "$63.00",  shipping: "321 Harbor Dr, Miami, FL" },
  { id: 71,  date: "2026-01-14", status: "Returned",  items: [{ name: "Sea Bass",      qty: 2, price: "$28.00" }],                                                    total: "$56.00",  shipping: "654 Dock Ln, Miami, FL" },
  { id: 65,  date: "2025-12-22", status: "Delivered", items: [{ name: "Lobster Tail",  qty: 2, price: "$50.00" }, { name: "Shrimp Pack",  qty: 1, price: "$10.00" }], total: "$110.00", shipping: "123 Ocean Ave, Miami, FL" },
];

const statusConfig = {
  Delivered: { color: "#1ca7a6", bg: "#f0fafa", border: "#c8e8e8", icon: <BsBoxSeam size={11} /> },
  Cancelled: { color: "#ef4444", bg: "#fff5f5", border: "#fde8e8", icon: <MdOutlineCancel size={11} /> },
  Returned:  { color: "#f59e0b", bg: "#fffbeb", border: "#fde68a", icon: <FiRotateCcw size={11} /> },
};

export default function OrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"All" | Order["status"]>("All");

  const openOrder = (order: Order) => { setSelectedOrder(order); setOpen(true); };

  const filtered = filter === "All" ? orders : orders.filter(o => o.status === filter);

  const tabs: ("All" | Order["status"])[] = ["All", "Delivered", "Cancelled", "Returned"];

  return (
    <div className="min-h-screen" style={{ background: "#f7f9f9" }}>
      <div className="container py-12">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-1" style={{ color: "#1ca7a6" }}>
            Past Purchases
          </p>
          <h1 className="salsify text-[42px] md:text-[52px] text-gray-800 leading-none">
            Order History
          </h1>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Total Orders", value: orders.length, color: "#1ca7a6", bg: "#f0fafa", border: "#c8e8e8" },
            { label: "Delivered",    value: orders.filter(o => o.status === "Delivered").length, color: "#1ca7a6", bg: "#f0fafa", border: "#c8e8e8" },
            { label: "Cancelled",    value: orders.filter(o => o.status === "Cancelled").length, color: "#ef4444", bg: "#fff5f5", border: "#fde8e8" },
            { label: "Total Spent",  value: "$" + orders.filter(o => o.status === "Delivered").reduce((s, o) => s + parseFloat(o.total.replace("$", "")), 0).toFixed(2), color: "#FF6B5A", bg: "#fff8f7", border: "#ffd4ce" },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl px-5 py-4 shadow-sm" style={{ border: "1px solid #ececec" }}>
              <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-gray-400 mb-1">{stat.label}</p>
              <p className="salsify text-[28px] leading-none" style={{ color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className="px-4 py-2 rounded-lg text-[12px] font-semibold tracking-wide transition-all duration-200 cursor-pointer"
              style={{
                background: filter === tab ? "#1ca7a6" : "white",
                color: filter === tab ? "white" : "#6b7280",
                border: filter === tab ? "1.5px solid #1ca7a6" : "1.5px solid #e5e5e5",
              }}
            >
              {tab}
              {tab !== "All" && (
                <span
                  className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px]"
                  style={{
                    background: filter === tab ? "rgba(255,255,255,0.25)" : "#f3f4f6",
                    color: filter === tab ? "white" : "#9ca3af",
                  }}
                >
                  {orders.filter(o => o.status === tab).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 bg-white rounded-2xl" style={{ border: "1px solid #ececec" }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#f0fafa", border: "2px solid #c8e8e8" }}>
              <HiOutlineShoppingBag size={32} style={{ color: "#1ca7a6" }} />
            </div>
            <p className="text-[18px] font-semibold text-gray-600 salsify">No orders found</p>
            <p className="text-[13px] text-gray-400">Try a different filter</p>
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

            {filtered.map((order, i) => {
              const s = statusConfig[order.status];
              return (
                <div
                  key={order.id}
                  className="grid grid-cols-6 px-6 py-4 items-center transition-colors duration-150 hover:bg-[#fafcfc]"
                  style={{ borderBottom: i < filtered.length - 1 ? "1px solid #f0f0f0" : "none" }}
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

                  <span
                    className="salsify text-[15px] font-bold"
                    style={{ color: order.status === "Cancelled" ? "#d1d5db" : "#1ca7a6", textDecoration: order.status === "Cancelled" ? "line-through" : "none" }}
                  >
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

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between px-2">
          <p className="text-[13px] text-gray-400">
            Showing <span className="font-semibold text-gray-600">{filtered.length}</span> of{" "}
            <span className="font-semibold text-gray-600">{orders.length}</span> orders
          </p>
          <div className="flex items-center gap-4 text-[12px] text-gray-400">
            {(["Delivered", "Cancelled", "Returned"] as Order["status"][]).map(status => (
              <span key={status} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: statusConfig[status].color }} />
                {orders.filter(o => o.status === status).length} {status}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Order Detail Modal ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] border-0 p-0 overflow-hidden bg-white shadow-2xl rounded-2xl">
          <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #1ca7a6, #23c9c8, #FF6B5A)" }} />

          {selectedOrder && (() => {
            const s = statusConfig[selectedOrder.status];
            return (
              <div className="px-7 py-6">
                {/* Modal header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h2 className="salsify text-[30px] text-gray-800 leading-none">Order Details</h2>
                    <p className="text-[13px] text-gray-400 mt-1">#{selectedOrder.id} · {selectedOrder.date}</p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer bg-white"
                    style={{ border: "1.5px solid #e5e5e5" }}
                    onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#f5f5f5"}
                    onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "white"}
                  >
                    <FiX size={14} className="text-gray-500" />
                  </button>
                </div>

                {/* Status + Date cards */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="px-4 py-3 rounded-xl" style={{ background: "#f7f9f9", border: "1px solid #ececec" }}>
                    <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-gray-400 mb-1.5">Status</p>
                    <span
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
                    >
                      {s.icon}
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

                {/* Cancelled notice */}
                {selectedOrder.status === "Cancelled" && (
                  <div
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl mb-5 text-[13px]"
                    style={{ background: "#fff5f5", border: "1px solid #fde8e8", color: "#ef4444" }}
                  >
                    <MdOutlineCancel size={16} />
                    This order was cancelled and will not be charged.
                  </div>
                )}

                {/* Returned notice */}
                {selectedOrder.status === "Returned" && (
                  <div
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl mb-5 text-[13px]"
                    style={{ background: "#fffbeb", border: "1px solid #fde68a", color: "#f59e0b" }}
                  >
                    <FiRotateCcw size={15} />
                    This order was returned. Refund may take 3–5 business days.
                  </div>
                )}

                {/* Shipping */}
                <div
                  className="flex items-start gap-3 px-4 py-3 rounded-xl mb-5"
                  style={{ background: "#f0fafa", border: "1px solid #c8e8e8" }}
                >
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
                        <span
                          className="text-[14px] font-bold"
                          style={{ color: selectedOrder.status === "Cancelled" ? "#d1d5db" : "#1ca7a6", textDecoration: selectedOrder.status === "Cancelled" ? "line-through" : "none" }}
                        >
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div
                  className="flex items-center justify-between px-4 py-3 rounded-xl mb-5"
                  style={{ background: "#f7f9f9", border: "1px solid #ececec" }}
                >
                  <span className="text-[13px] font-semibold text-gray-500">Order Total</span>
                  <span
                    className="salsify text-[24px] font-bold"
                    style={{ color: selectedOrder.status === "Cancelled" ? "#d1d5db" : "#1ca7a6", textDecoration: selectedOrder.status === "Cancelled" ? "line-through" : "none" }}
                  >
                    {selectedOrder.total}
                  </span>
                </div>

                {/* Reorder button for delivered */}
                <div className={`flex gap-3 ${selectedOrder.status === "Delivered" ? "grid grid-cols-2" : ""}`}>
                  {selectedOrder.status === "Delivered" && (
                    <button className="btn2 py-3 text-center rounded-lg text-[12px] tracking-wide uppercase font-semibold">
                      Reorder
                    </button>
                  )}
                  <button
                    onClick={() => setOpen(false)}
                    className="btn py-3 text-center rounded-lg text-[13px] tracking-wide uppercase font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}