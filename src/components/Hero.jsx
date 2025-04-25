import Logo from "../assets/Logo.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24 min-h-[60vh] flex flex-col items-center justify-center text-center"
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Keys 2 Please Locksmith Logo - Reliable Locksmith in Richmond, VA"
        className="h-20 w-20 sm:h-24 sm:w-24 mb-6 rounded-full"
      />

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-gray-700 mb-8">
        Specializing in Automotive Locksmithing, Keys 2 Please offers a variety of services to get you back on the road in no time.
      </p>

      {/* Contact Information */}
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-800 text-lg">
            <strong className="text-red-600 text-3xl font-bold">Call </strong>
            <a href="tel:8044043844" className="text-red-600 text-3xl font-bold hover:text-red-700">
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
              // "image": "https://www.keys2please.com/Logo.png",
            })}
          </script>
        </div>
    </section>
  );
}
