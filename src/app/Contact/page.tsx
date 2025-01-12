import React from "react";

const ContactUs = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 py-20 px-5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We would love to hear from you! Whether you have a question about
            our services, need assistance, or just want to say hello, feel free
            to reach out.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-6">
                Reach out to us via email, phone, or visit our office during
                working hours. We &apos; re here to assist you.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <span className="text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 2a4 4 0 00-4 4v1H8a4 4 0 00-4 4v5a4 4 0 004 4h1a4 4 0 004 4h3a4 4 0 004-4v-5a4 4 0 00-4-4h-1V6a4 4 0 00-4-4h-1z"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">+1 234 567 890</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h11M9 21V3"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">info@company.com</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.728 9.654a4.502 4.502 0 01-.064 8.683m.064-8.683a5.499 5.499 0 00-.928-.574 5.498 5.498 0 10-4.63 10.061m5.558-9.487a5.498 5.498 0 00-8.96 3.1 5.497 5.497 0 004.696 6.383"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">123 Main Street, City, Country</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
