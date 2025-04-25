export default function WhyChooseUs() {
    return (
      <section id="whyChooseUs" className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Here is how Keys 2 Please stands out from the rest.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 text-white rounded-full h-20 w-20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.01 7.99l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Response
              </h3>
              <p className="text-gray-600 text-sm">
                Available 24/7 for emergencies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 text-white rounded-full h-20 w-20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
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
                Convenient
              </h3>
              <p className="text-gray-600 text-sm">
                Localized key relate services, one phone call away!
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 text-white rounded-full h-20 w-20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Affordable
              </h3>
              <p className="text-gray-600 text-sm">
                Competitive pricing on all services.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 text-white rounded-full h-20 w-20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.01 7.99l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reliable
              </h3>
              <p className="text-gray-600 text-sm">
                Trusted by hundreds of customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  