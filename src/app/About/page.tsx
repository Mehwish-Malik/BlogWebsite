import React from "react";
import Image from "next/image";
import Girl from "@/Assets/Girl.jpg"
const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-20 px-5">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Discover our story, mission, and values that drive us to deliver the best.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap items-center -mx-4">
          {/* Image Section */}
          <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
            <Image
              src={Girl} // Replace with your image path
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are a passionate team committed to delivering high-quality
              services to our clients. Our journey began with a vision to create
              a platform that fosters innovation and excellence in everything we do.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our core values are rooted in trust, integrity, and a dedication to
              exceeding expectations. We take pride in building strong
              relationships with our clients and delivering impactful solutions.
            </p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
