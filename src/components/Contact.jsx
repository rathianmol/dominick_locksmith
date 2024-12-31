export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-16 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Contact Dominick for reliable locksmith services. We're here to help with all your locksmith needs!
        </p>
        <p className="text-gray-800 text-lg">
          <strong>Phone:</strong> <a href="tel:5551234567" className="hover:text-red-600"> (555) 123-4567 </a><br />
          <strong>Email:</strong> <a href="mailto:dominick@example.com" className="hover:text-red-600"> dominick@example.com </a>
        </p>

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Keys to Please Locksmith",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Richmond",
              "addressRegion": "VA",
              "postalCode": "23220",
              "addressCountry": "US"
            },
            "telephone": "+15551234567",
            "email": "dominick@example.com",
            "url": "https://www.keystoplease.com",
            "openingHours": "Mo-Su 08:00-20:00",
            "image": "https://www.keystoplease.com/keysToPleaseLogoPro.png"
          })}
        </script>
      </div>
    </section>
  );
}
