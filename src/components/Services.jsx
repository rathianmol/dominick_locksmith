export default function Services() {
    return (
      <section id="services" className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Our Locksmith Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Whether it's general locksmith needs or specialized automobile locksmith services, Dominick has you covered.
          </p>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* General Locksmith Services */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0-2.28-1.48-4-3-4s-3 1.72-3 4 1.48 4 3 4 3-1.72 3-4zm5 3.46V16m0 4H7m14-4c0-1.28-1-2-2-2H7c-1 0-2 .72-2 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                General Locksmith Services
              </h3>
              <p className="text-gray-600 text-sm">
                Reliable solutions for residential and commercial locks, rekeying, lock repairs, and emergency lockouts.
              </p>
            </div>
  
            {/* Automobile Locksmith Services */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 00-8 0v3H5a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-2-2h-3V7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Automobile Locksmith Services
              </h3>
              <p className="text-gray-600 text-sm">
                Expert services for car lockouts, key duplication, transponder key programming, and ignition repairs.
              </p>
            </div>
  
            {/* Emergency Services */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.185 13.08c.063-.062.131-.12.202-.172a3 3 0 113.228 0c.071.051.14.11.203.172l3.259 3.153a3.001 3.001 0 01-2.121 5.11H8.328a3.001 3.001 0 01-2.121-5.11l3.259-3.153z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Emergency Lockout Services
              </h3>
              <p className="text-gray-600 text-sm">
                Quick and reliable help for lockouts at any time of the day or night—just a call away.
              </p>
            </div>
          </div>
  
          {/* Call-to-Action */}
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Book a Service
            </a>
          </div>
        </div>
      </section>
    );
  }
  