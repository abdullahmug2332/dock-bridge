import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="w-[40%] md:w-[30%] lg:w-[20%] p-2">
            <img src="/logo.png" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 font-medium">
            {[
              { name: "Home", href: "#home" },
              { name: "About Us", href: "#about-us" },
              { name: "Locations", href: "#locations" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Contact Us", href: "#contact-us" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative transition text-gray-600
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-[var(--primary)]
      after:transition-all after:duration-300
      hover:after:w-full"
              >
                <p className="text-[15px]">{item.name}</p>
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-3">
            {/* Order Button */}
            <button className="px-6 py-2 text-[14px] rounded-md bg-secondary text-white border border2 bg2 hcolor2 font-medium hover:bg-white! transition  rounded">
              Book Catering
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <RxCross2 size={24} /> : <IoIosMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 flex flex-col gap-3 ">
            <a href="#home" className="text-gray-700 hcolor2" onClick={()=>setMobileMenuOpen(false)}>
              <p className="p">Home</p>
            </a>
            <a href="#about-us" className="text-gray-700 hcolor2" onClick={()=>setMobileMenuOpen(false)}>
              <p className="p">About Us</p>
            </a>
            <a href="#locations" className="text-gray-700 hcolor2" onClick={()=>setMobileMenuOpen(false)}>
              <p className="p">Locations</p>
            </a>

            <a href="#testimonials" className="text-gray-700 hcolor2" onClick={()=>setMobileMenuOpen(false)}>
              <p className="p">Testimonials</p>
            </a>
            <a href="#contact-us" className="text-gray-700 hcolor2" onClick={()=>setMobileMenuOpen(false)}>
              <p className="p">Contact Us</p>
            </a>
            <button className="px-4 py-2 rounded-md bg-secondary text-white border border2 bg2 hcolor2 font-medium hover:bg-white! transition  rounded">
              Book Catering
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
