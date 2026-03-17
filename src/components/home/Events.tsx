import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Events() {
  const events = [
    {
      img: "/event1.png",
      name: "Corporate Event",
    },
    {
      img: "/event2.png",
      name: "Wedding Seafood",
    },
    {
      img: "/event3.png",
      name: "Private Party",
    },
    {
      img: "/event4.png",
      name: "Custom Platters",
    },
    {
      img: "/event5.png",
      name: "Professional Events",
    },
    {
      img: "/event6.png",
      name: "Family Gathering",
    },
  ];
  return (
    <div className="container pad " id="catering">
      <div className="text-center mb-12">
        <h4 className="mb-1 subtitle">Event / Catering</h4>
        <h2 className="title mb-2 ">
          Seafood catering for Events and Busineessess
        </h2>
        <p className="p mx-auto w-[90%] max-w-[1100px]">
          We provide premium seafood catering services for corporate events,
          weddings, private parties, and large gatherings. Our chefs prepare
          fresh seafood menus tailored to your event size and preferences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-10  mt-10">
          {events.map((e, i) => (
            <div className="flex flex-col items-center gap-3" key={i}>
              <img src={e.img} alt="img" className="w-full rounded-[25px]" />
              <p className="salsify text-[30px] md:text-[35px] lg:text-[40px]">
                {e.name}
              </p>
            </div>
          ))}
        </div>
  <Dialog>
  <DialogTrigger asChild>
    <button className="btn2 mt-10">Book our catering service</button>
  </DialogTrigger>

  <DialogContent className="sm:max-w-[620px] border-0 p-0 overflow-hidden max-h-[92vh] overflow-y-auto bg-white shadow-2xl rounded-xl">
    {/* Header Banner */}
    <div
      className="relative h-[130px] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d6b6a 0%, #1ca7a6 55%, #23c9c8 100%)",
      }}
    >
      {/* Decorative rings */}
      <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full border border-white/10" />
      <div className="absolute -bottom-8 -right-4 w-44 h-44 rounded-full border border-white/10" />
      <div className="absolute top-3 right-14 w-16 h-16 rounded-full border border-white/10" />
      <div className="absolute -top-2 left-1/3 w-24 h-24 rounded-full border border-white/10" />

      {/* Icon badge */}
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-2 shadow-lg"
        style={{
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      </div>

      <DialogTitle
        className="text-white text-[24px] font-light tracking-[0.22em] uppercase salsify"
      >
        Catering
      </DialogTitle>
      <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase mt-0.5 font-light">
        Reserve Your Experience
      </p>
    </div>

    {/* Form Body */}
    <div className="px-8 py-6 space-y-5">
      {/* Divider label */}
      {/* <div className="flex items-center gap-3">
        <div
          className="h-px flex-1"
          style={{ background: "linear-gradient(to right, transparent, #1ca7a6, transparent)" }}
        />
        <span
          className="text-[10px] tracking-[0.25em] uppercase font-semibold"
          style={{ color: "#1ca7a6" }}
        >
          Your Details
        </span>
        <div
          className="h-px flex-1"
          style={{ background: "linear-gradient(to right, transparent, #1ca7a6, transparent)" }}
        />
      </div> */}

      {/* Name + Email */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
            Full Name
          </label>
          <input
            placeholder="Your name"
            className="w-full px-3.5 py-2.5 rounded-md text-[14px] text-gray-800 placeholder:text-gray-300 outline-none transition-all duration-200"
            style={{ border: "1px solid #d3d3d3", background: "#fafafa" }}
            onFocus={e => {
              e.target.style.borderColor = "#1ca7a6";
              e.target.style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)";
            }}
            onBlur={e => {
              e.target.style.borderColor = "#d3d3d3";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@email.com"
            className="w-full px-3.5 py-2.5 rounded-md text-[14px] text-gray-800 placeholder:text-gray-300 outline-none transition-all duration-200"
            style={{ border: "1px solid #d3d3d3", background: "#fafafa" }}
            onFocus={e => {
              e.target.style.borderColor = "#1ca7a6";
              e.target.style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)";
            }}
            onBlur={e => {
              e.target.style.borderColor = "#d3d3d3";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
      </div>

      {/* Phone + Event Type */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (000) 000-0000"
            className="w-full px-3.5 py-2.5 rounded-md text-[14px] text-gray-800 placeholder:text-gray-300 outline-none transition-all duration-200"
            style={{ border: "1px solid #d3d3d3", background: "#fafafa" }}
            onFocus={e => {
              e.target.style.borderColor = "#1ca7a6";
              e.target.style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)";
            }}
            onBlur={e => {
              e.target.style.borderColor = "#d3d3d3";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
            Event Type
          </label>
          <Select>
            <SelectTrigger
              className="w-full px-3.5 py-5 rounded-md text-[14px] text-gray-800 outline-none transition-all duration-200 h-auto cursor-pointer"
              style={{ border: "1px solid #d3d3d3", background: "#fafafa", boxShadow: "none" }}
              onFocus={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1ca7a6";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)";
              }}
              onBlur={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#d3d3d3";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <SelectValue placeholder="Select event type" className="text-gray-300" />
            </SelectTrigger>
            <SelectContent className="bg-white ">
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="birthday">Birthday Party</SelectItem>
              <SelectItem value="private-dinner">Private Dinner</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Guest Count + Date */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
            Guest Count
          </label>
          <input
            type="number"
            placeholder="No. of guests"
            className="w-full px-3.5 py-2.5 rounded-md text-[14px] text-gray-800 placeholder:text-gray-300 outline-none transition-all duration-200"
            style={{ border: "1px solid #d3d3d3", background: "#fafafa" }}
            onFocus={e => {
              e.target.style.borderColor = "#1ca7a6";
              e.target.style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)";
            }}
            onBlur={e => {
              e.target.style.borderColor = "#d3d3d3";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
            Event Date
          </label>
          <input
            type="date"
            className="w-full px-3.5 py-2.5 rounded-md text-[14px] text-gray-500 outline-none transition-all duration-200"
            style={{ border: "1px solid #d3d3d3", background: "#fafafa" }}
            onFocus={e => {
              e.target.style.borderColor = "#1ca7a6";
              e.target.style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)";
            }}
            onBlur={e => {
              e.target.style.borderColor = "#d3d3d3";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
      </div>

      {/* Divider */}
      {/* <div className="flex items-center gap-3">
        <div
          className="h-px flex-1"
          style={{ background: "linear-gradient(to right, transparent, #1ca7a6, transparent)" }}
        />
        <span
          className="text-[10px] tracking-[0.25em] uppercase font-semibold"
          style={{ color: "#1ca7a6" }}
        >
          About Your Event
        </span>
        <div
          className="h-px flex-1"
          style={{ background: "linear-gradient(to right, transparent, #1ca7a6, transparent)" }}
        />
      </div> */}

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your event — dietary needs, theme, special requests..."
          className="w-full px-3.5 py-3 rounded-md text-[14px] text-gray-800 placeholder:text-gray-300 outline-none resize-none transition-all duration-200"
          style={{ border: "1px solid #d3d3d3", background: "#fafafa" }}
          onFocus={e => {
            e.target.style.borderColor = "#1ca7a6";
            e.target.style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)";
          }}
          onBlur={e => {
            e.target.style.borderColor = "#d3d3d3";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Submit */}
      <button
        className="btn2 w-full py-3 rounded-md text-[13px] tracking-[0.15em] uppercase font-semibold transition-all duration-300"
     
      >
        Submit Catering Request
      </button>

      {/* Footer note */}
      <p className="text-center text-[11px] text-gray-400 tracking-wide pb-1">
        We'll get back to you within{" "}
        <span className="font-semibold" style={{ color: "#1ca7a6" }}>
          24 hours
        </span>
      </p>
    </div>
  </DialogContent>
</Dialog>
      </div>
    </div>
  );
}
