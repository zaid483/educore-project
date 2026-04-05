import React, { useState } from "react";
import { Navdata } from "./Navdata";
import { Menu, X } from "lucide-react";
import { img1 } from "../../assets/image";
import { Link } from "react-scroll";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="h-[80px] md:h-[90px]"></div>

      <div className="fixed top-0 left-0 w-full z-50">
        <div className="w-full px-4 md:px-10 lg:px-20 lg:max-w-7xl lg:mx-auto py-3">
          <div className="flex justify-between items-center bg-white shadow-lg rounded-lg px-4 py-3">
            <a href="#home">
              <img src={img1} alt="logo" className="h-8 sm:h-10" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-5">
              {Navdata.map((data) => (
                <Link
                  key={data.index}
                  to={data.id}
                  smooth={true}
                  duration={500}
                  offset={-80} // navbar height
                  className="text-black cursor-pointer hover:text-purple-600 transition"
                  activeClass="text-purple-600 font-semibold"
                  spy={true}
                >
                  {data.title}
                </Link>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden transition-transform duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Enroll Button */}
            <button className="px-4 py-2 rounded-md text-white bg-[#6241eb] whitespace-nowrap hidden lg:block">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute left-0 w-full px-4 md:px-10 transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen
                ? "top-[85px] opacity-100 max-h-[500px]"
                : "top-[70px] opacity-0 max-h-0 pointer-events-none"
            }`}
          >
            <div className="bg-white shadow-lg rounded-lg px-4 py-4 flex flex-col gap-2">
              {Navdata.map((data, index) => (
                <Link
                  key={index}
                  to={data.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="py-2 border-b cursor-pointer transform transition-all duration-200 hover:translate-x-1"
                  onClick={() => setIsOpen(false)} // close menu after click
                  activeClass="text-purple-600 font-semibold"
                  spy={true}
                >
                  {data.title}
                </Link>
              ))}

              <button className="mt-4 w-full px-4 py-2 rounded-md text-white bg-[#6241eb] hover:opacity-90 transition">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
