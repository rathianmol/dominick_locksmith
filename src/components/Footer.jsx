export default function Footer() {
    return (
      <footer className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            © 2024 Keys to Please Locksmith. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#hero" className="hover:text-gray-200 transition">
              Home
            </a>
            <a href="#about" className="hover:text-gray-200 transition">
              About
            </a>
            <a href="#services" className="hover:text-gray-200 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-200 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    );
  }
  