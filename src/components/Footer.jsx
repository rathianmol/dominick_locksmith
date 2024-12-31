import { Link } from "react-scroll"; // Added react-scroll for navigation

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">
          © 2024 Keys to Please Locksmith. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
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
      </div>
    </footer>
  );
}
