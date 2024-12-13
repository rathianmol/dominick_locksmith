export default function Testimonials() {
    return (
      <section id="testimonials" className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            See what our happy customers have to say about Dominick's locksmith services.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "Dominick saved the day! I locked myself out of my car, and he arrived in 20 minutes.
                Highly recommend!"
              </p>
              <p className="text-gray-800 font-bold mt-4">- John D.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "Professional, quick, and reliable. Dominick rekeyed all the locks in my new home with ease."
              </p>
              <p className="text-gray-800 font-bold mt-4">- Sarah L.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "Affordable prices and excellent service. Dominick is my go-to locksmith in Richmond!"
              </p>
              <p className="text-gray-800 font-bold mt-4">- Michael R.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  