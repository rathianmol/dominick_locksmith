import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 text-white fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="text-xl font-bold">
              Keys to Please Locksmith
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="#about" className="hover:text-gray-200 transition">
              About
            </a>
            <a href="#whyChooseUs" className="hover:text-gray-200 transition">
              Why Choose Us
            </a>
            <a href="#services" className="hover:text-gray-200 transition">
              Services
            </a>
            <a href="#testimonials" className="hover:text-gray-200 transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-gray-200 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={toggleMenu}
            className="sm:hidden block text-gray-200 hover:text-white focus:outline-none"
          >
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
                d={
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-red-700">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#about" className="block text-gray-100 hover:text-white">
              About
            </a>
            <a href="#whyChooseUs" className="block text-gray-100 hover:text-white">
              Why Choose Us
            </a>
            <a href="#services" className="block text-gray-100 hover:text-white">
              Services
            </a>
            <a href="#testimonials" className="block text-gray-100 hover:text-white">
              Testimonials
            </a>
            <a href="#contact" className="block text-gray-100 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
