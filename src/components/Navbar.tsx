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
import { Button } from "./ui/button";

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
              { name: "Home", href: "/#home" },
              { name: "About Us", href: "/#about-us" },
              { name: "Products", href: "/#products" },
              { name: "Catering", href: "/#catering" },
              { name: "Testimonials", href: "/#testimonials" },
              { name: "Contact Us", href: "/#contact-us" },
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

          <div className="flex items-center gap-2">
            {/* Desktop Buttons */}
            <div className="flex gap-2">
              {/* Order Button */}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className=" text-[14px] color2">
                    <BiUser className="size-5 md:size-6 cursor-pointer" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup className="space-y-1 p-1">
                    <DropdownMenuItem><Link to={"/auth"}>Login</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link to={"/orders"}>Orders</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link to={"/history"}>History</Link></DropdownMenuItem>
                  </DropdownMenuGroup>                  
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to={"/cart"} className=" text-[14px] color2">
                <BsBagCheck className="size-5 md:size-6 cursor-pointer" />
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
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 flex flex-col gap-3 ">
            <a
              href="/#home"
              className="text-gray-700 hcolor2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="p">Home</p>
            </a>
            <a
              href="/#about-us"
              className="text-gray-700 hcolor2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="p">About Us</p>
            </a>
            <a
              href="/#products"
              className="text-gray-700 hcolor2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="p">Products</p>
            </a>
            <a
              href="/#catering"
              className="text-gray-700 hcolor2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="p">Catering</p>
            </a>
            <a
              href="/#testimonials"
              className="text-gray-700 hcolor2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="p">Testimonials</p>
            </a>
            <a
              href="/#contact-us"
              className="text-gray-700 hcolor2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="p">Contact Us</p>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
