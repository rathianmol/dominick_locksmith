import Logo from "../assets/keys_to_please_3.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24 min-h-[60vh] flex flex-col items-center justify-center text-center"
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Keys to Please Locksmith Logo"
        className="h-20 w-20 sm:h-24 sm:w-24 mb-6"
      />

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl font-bold text-red-600 mb-4">
        Welcome to Keys to Please Locksmith
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-gray-700 mb-8">
        Reliable locksmith services for homes, cars, and businesses in Richmond, VA.
      </p>

      {/* Call-to-Action Button */}
      <a
        href="#contact"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
      >
        Get in Touch
      </a>
    </section>
  );
}
