export default function Testimonials() {
    return (
      <section id="testimonials" className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
            What Our Customers Say
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "Dominick was quick and professional when I locked my keys in my car. Highly recommend!"
              </p>
              <p className="text-gray-800 font-bold mt-4">- John D.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "Affordable pricing and excellent service. Dominick is my go-to locksmith."
              </p>
              <p className="text-gray-800 font-bold mt-4">- Sarah L.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "Fast response time and professional attitude. Would definitely use Dominick again!"
              </p>
              <p className="text-gray-800 font-bold mt-4">- Michael R.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  