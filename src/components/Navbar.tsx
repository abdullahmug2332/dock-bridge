import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoCartOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = 2;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="px-4">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="w-[40%] md:w-[30%] lg:w-[20%] p-2">
            <img src="/logo.png" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 font-medium">
            {[
              { name: "Home", href: "/#" },
              { name: "About Us", href: "/#about-us" },
              { name: "Products", href: "/#products" },
              { name: "Catering", href: "/#catering" },
              { name: "Testimonials", href: "/#testimonials" },
              { name: "Contact Us", href: "/#contact-us" },
            ].map((item) => (
              <HashLink
                smooth
                key={item.name}
                to={item.href}
                className="relative transition text-gray-600
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-[var(--primary)]
      after:transition-all after:duration-300
      hover:after:w-full"
              >
                <p className="text-[15px]">{item.name}</p>
              </HashLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Desktop Buttons */}
            <div className="flex gap-4">
              {/* Order Button */}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className=" text-[14px] color2">
                    <BiUser className="size-5 md:size-6 cursor-pointer" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup className="space-y-1 p-1">
                    <DropdownMenuItem>
                      <Link to={"/auth"}>Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to={"/orders"}>Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to={"/history"}>History</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/cart" className="relative text-[14px] color2">
                {/* Cart Icon */}
                <IoCartOutline className="size-5 md:size-7 cursor-pointer" />

                {/* Bubble */}
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg text-white text-[10px]  w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <RxCross2 size={24} />
              ) : (
                <IoIosMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden flex flex-col  overflow-hidden transition-all duration-700 ease-in-out ${
            mobileMenuOpen ? "max-h-screen" : "max-h-0 py-0"
          }`}
        >
          {[
            { to: "/#", label: "Home" },
            { to: "/#about-us", label: "About Us" },
            { to: "/#products", label: "Products" },
            { to: "/#catering", label: "Catering" },
            { to: "/#testimonials", label: "Testimonials" },
            { to: "/#contact-us", label: "Contact Us" },
          ].map((item) => (
            <HashLink
              key={item.to}
              smooth
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-teal-600 px-3  transition-colors py-3 border-t border-gray-100"
            >
              {item.label}
            </HashLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
