export default function About() {
    return (
      <section id="about" className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            About Dominick
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Dominick is a trusted locksmith specializing in automotive and general locksmith services in and around Richmond, VA.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            With years of hands-on experience, Dominick has worked extensively on cars, motorcycles, and home security systems, offering reliable and professional locksmith solutions.
          </p>
  
          {/* Additional Info */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12l-4 4m0 0l4 4m-4-4h16M4 8h16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Service Coverage
              </h3>
              <p className="text-gray-600 text-sm">
                Proudly serving Richmond, VA, and surrounding areas with fast and reliable locksmith services.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Years of Expertise
              </h3>
              <p className="text-gray-600 text-sm">
                Extensive experience in locksmithing for vehicles, homes, and businesses.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 10-8 0v3H5a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-2-2h-3V7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Trusted by Customers
              </h3>
              <p className="text-gray-600 text-sm">
                Hundreds of happy customers trust Dominick for fast, efficient, and honest service.
              </p>
            </div>
          </div>
  
          {/* Call-to-Action */}
          <div>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    );
  }
  