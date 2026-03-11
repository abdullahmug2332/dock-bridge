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
            {["Home", "About", "Products", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="relative  transition text-gray-600
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-[var(--primary)]
      after:transition-all after:duration-300
      hover:after:w-full"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-3">
            {/* Sign In */}
            <button className="px-4 py-2  border border1 bg hcolor text-white bg-primary hover:text-primary hover:bg-white!  font-medium hover:bg-orange-50 transition rounded">
              Pre order
            </button>

            {/* Order Button */}
            <button className="px-4 py-2 rounded-md bg-secondary text-white border border2 bg2 hcolor2 font-medium hover:bg-white! transition  rounded">
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
          <div className="lg:hidden pb-4 pt-2 flex flex-col gap-3">
            <a href="#" className="text-gray-700 hcolor2">
              Home 
            </a>
            <a href="#" className="text-gray-700 hcolor2">
              About
            </a>
            <a href="#" className="text-gray-700 hcolor2">
              Selection
            </a>

            <a href="#" className="text-gray-700 hcolor2">
              Contact
            </a>

            <button className="w-full py-2 rounded-md border border color hover:bg-orange-50 transition">
              Sign In
            </button>

            <button className="w-full py-2 rounded-md border border1 bg hcolor text-white bg-primary hover:text-primary hover:bg-white! transition">
              Order Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
