import React, { useState } from "react";
import { Link } from "react-scroll"; // Added react-scroll library
import Logo from "../assets/keysToPleaseLogoPro.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 text-white fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Keys to Please Locksmith Logo" className="h-8 w-8 rounded-full" />
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer"
            >
              Keys to Please Locksmith
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="hero" smooth={true} duration={500} className="hover:text-gray-200 transition cursor-pointer">
              About
            </Link>
            <Link to="whyChooseUs" smooth={true} duration={500} className="hover:text-gray-200 transition cursor-pointer">
              Why Choose Us
            </Link>
            <Link to="services" smooth={true} duration={500} className="hover:text-gray-200 transition cursor-pointer">
              Services
            </Link>
            <Link to="testimonials" smooth={true} duration={500} className="hover:text-gray-200 transition cursor-pointer">
              Testimonials
            </Link>
          </div>

          <button onClick={toggleMenu} className="sm:hidden block text-gray-200 hover:text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-red-700">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="block text-gray-100 hover:text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="whyChooseUs"
              smooth={true}
              duration={500}
              className="block text-gray-100 hover:text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="block text-gray-100 hover:text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="block text-gray-100 hover:text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
