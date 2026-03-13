import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoIosPin } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-black/93 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap  gap-4 gap-y-10 mb-8">
          {/* Company Info */}
          <div className="w-full md:w-[55%] lg:w-[30%]">
            <div className="flex items-center gap-2 mb-4">
              <img src="/dark-logo.png" alt="dark-logo" className="w-[70%]" />
            </div>
            <p className="text-white mb-4">
              Fusce nisi mi, mattis sed lorem et, fringilla dapibus magna. Etiam
              sollicitudin lectus eros, eu dictum tortor facilisis sed.
              Phasellus ipsum libero, pharetra eu lacus sit amet, tincidunt
              blandit justo.
            </p>
            <div className="flex gap-4">
              <FaFacebookF
                size={20}
                className="cursor-pointer hcolor transition shadow-3xl shadow-(--primary)"
              />
              <RiInstagramFill
                size={20}
                className="cursor-pointer hcolor transition shadow-3xl shadow-(--primary)"
              />
              <FaTwitter
                size={20}
                className="cursor-pointer hcolor transition shadow-3xl shadow-(--primary)"
              />
              <FaLinkedinIn
                size={20}
                className="cursor-pointer hcolor transition shadow-3xl shadow-(--primary)"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-[45%] lg:w-[17%] lg:pl-10">
            <h3 className="text-white font-bold mb-4 text-[20px]">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="text-white hcolor transition block text-[14px]">
                Home
              </a>
              <a href="#" className="text-white hcolor transition block text-[14px]">
                About Us
              </a>
              <a href="#" className="text-white hcolor transition block text-[14px]">
                Products
              </a>
              <a href="#" className="text-white hcolor transition block text-[14px]">
                Testimonials
              </a>
              <a href="#" className="text-white hcolor transition block text-[14px]">
                Contact
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div className="w-full sm:w-[45%] lg:w-[23%] pr-10">
            <h3 className="text-white font-bold mb-4 text-[20px]">Contact us</h3>
            <div className="space-y-3">
              <a href="#" className="text-gray-400 hcolor transition block ">
                <div className="flex items-start gap-2">
                  <MdMail className="color size-5" />
                  <div>
                    <p className="text-gray-300 text-[13px]">EMAIL US</p>
                    <p className="text-white text-[15px]">email@example.com</p>
                  </div>
                </div>
              </a>
              <a href="#" className="text-gray-400 hcolor transition block ">
                <div className="flex items-start gap-2">
                  <IoMdCall className="color size-5" />
                  <div>
                    <p className="text-gray-300 text-[13px]">CALL US</p>
                    <p className="text-white text-[15px]">+1 (123) 456-7890</p>
                  </div>
                </div>
              </a>
              <a href="#" className="text-gray-400 hcolor transition block ">
                <div className="flex items-start gap-2">
                  <IoIosPin className="color size-5" />
                  <div>
                    <p className="text-gray-300 text-[13px]">ADDRESS</p>
                    <p className="text-white text-[15px]">
                      Lorem 123, Ipsum 456, Dolor 78, Sit 09, AMET
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-[25%]">
            <h3 className="text-white font-bold mb-4 text-[20px]">Find Us on Map</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30064.438316969612!2d-97.61757863593422!3d35.54002961425708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1773240989764!5m2!1sen!2s"
              width="600"
              height="450"
              loading="lazy"
              className="w-full h-[200px] rounded-2xl"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright © 2026 <span className="color2">DockBridge.</span>  | All Rights Reserved.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hcolor transition text-sm pr-2 border-r">
                Terms and Conditions
              </a>
              <a href="#" className="text-gray-400 hcolor transition text-sm pr-2 border-r">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hcolor transition text-sm">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
