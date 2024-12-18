export default function About() {
    return (
      <section id="about" className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
            About Dominick
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Dominick is a trusted locksmith specializing in automotive and general
            locksmith services in and around Richmond, VA.
          </p>
          {/* Call-to-Action */}
          <a
            href="#contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    );
  }
  