export default function Contact() {
    return (
      <section id="contact" className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Have questions or need locksmith services? Contact Dominick directly
            using the details below or reach out via social media.
          </p>
  
          {/* Contact Information */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h11M9 21V8m4 4l-4 4m0-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">dominick@example.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Richmond, VA</p>
            </div>
          </div>
  
          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Connect with us
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.045.246 2.517.418.56.21.964.463 1.386.886.423.422.677.826.887 1.386.172.472.36 1.31.418 2.517.059 1.267.071 1.646.071 4.85s-.012 3.584-.07 4.85c-.058 1.206-.246 2.045-.418 2.517-.21.56-.464.964-.887 1.386-.422.423-.826.677-1.386.887-.472.172-1.31.36-2.517.418-1.267.059-1.646.071-4.85.071s-3.584-.012-4.85-.07c-1.206-.058-2.045-.246-2.517-.418-.56-.21-.964-.464-1.386-.887-.423-.422-.677-.826-.887-1.386-.172-.472-.36-1.31-.418-2.517-.059-1.267-.071-1.646-.071-4.85s.012-3.584.07-4.85c.058-1.206.246-2.045.418-2.517.21-.56.464-.964.887-1.386.422-.423.826-.677 1.386-.887.472-.172 1.31-.36 2.517-.418 1.267-.059 1.646-.071 4.85-.071zm0-2.163c-3.257 0-3.667.011-4.947.07-1.281.059-2.196.245-2.992.512a5.92 5.92 0 00-2.218 1.463A5.922 5.922 0 00.682 3.92c-.267.797-.453 1.711-.512 2.992-.059 1.28-.07 1.69-.07 4.947s.011 3.667.07 4.947c.059 1.281.245 2.196.512 2.992.265.797.649 1.543 1.463 2.218a5.922 5.922 0 001.463 1.463c.797.267 1.711.453 2.992.512 1.28.059 1.69.07 4.947.07s3.667-.011 4.947-.07c1.281-.059 2.196-.245 2.992-.512a5.922 5.922 0 001.463-1.463 5.92 5.92 0 001.463-2.218c.267-.797.453-1.711.512-2.992.059-1.28.07-1.69.07-4.947s-.011-3.667-.07-4.947c-.059-1.281-.245-2.196-.512-2.992a5.922 5.922 0 00-1.463-1.463 5.92 5.92 0 00-2.218-1.463c-.797-.267-1.711-.453-2.992-.512-1.28-.059-1.69-.07-4.947-.07zm0 5.838a6.125 6.125 0 110 12.25 6.125 6.125 0 010-12.25zm0 2.163a3.962 3.962 0 100 7.925 3.962 3.962 0 000-7.925zm6.406-1.319a1.444 1.444 0 110-2.888 1.444 1.444 0 010 2.888z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  