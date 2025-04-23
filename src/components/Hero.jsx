import Logo from "../assets/keysToPleaseLogoPro.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-white-100 py-16 px-6 sm:px-12 lg:px-24 min-h-[60vh] flex flex-col items-center justify-center text-center"
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Keys 2 Please Locksmith Logo - Reliable Locksmith in Richmond"
        className="h-20 w-20 sm:h-24 sm:w-24 mb-6 rounded-full"
      />

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl font-bold text-red-600 mb-4">
        Welcome to Keys 2 Please Locksmith
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-gray-700 mb-8">
        Reliable locksmith services for homes, cars, and businesses in Richmond, VA.
      </p>

      {/* Contact Information */}
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-12">
            Contact Dominick for reliable locksmith services. We're here to help with all your locksmith needs!
          </p>
          <p className="text-gray-800 text-lg">
            <strong>Phone:</strong>{" "}
            <a href="tel:5551234567" className="hover:text-red-600">
              (804) 404-3844
            </a>
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:dominick@example.com"
              className="hover:text-red-600"
            >
              info@keys2please.com
            </a>
          </p>

          {/* Structured Data for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Keys 2 Please Locksmith",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Richmond",
                "addressRegion": "VA",
                "postalCode": "23220",
                "addressCountry": "US",
              },
              "telephone": "+18044043844",
              "email": "info@keys2please.com",
              "url": "https://www.keys2pleaselocksmith.com",
              "openingHours": "Mo-Su 08:00-20:00",
              // "image": "https://www.keys2please.com/keysToPleaseLogoPro.png",
            })}
          </script>
        </div>
    </section>
  );
}
