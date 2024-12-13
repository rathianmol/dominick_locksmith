export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-center sm:text-left">
              © 2024 Dominick's Locksmith. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a
                href="#hero"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  