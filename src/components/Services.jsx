export default function Services() {
    return (
      <section id="services" className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Professional locksmith solutions tailored to your needs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Vehicle Lockouts
              </h3>
              <p className="text-gray-600">
                Locked out of your vehicle? We can get you back in!
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Key Duplication
              </h3>
              <p className="text-gray-600">
                Need spare keys? We can create them for you!
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Key Programming and Cutting
              </h3>
              <p className="text-gray-600">
                We can match your keys to your vehicles!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  