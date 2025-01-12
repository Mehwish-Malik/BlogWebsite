import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Hero = ({ data }: { data: Blog }) => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 ease-in-out"
                  src={urlFor(data.image).url()}
                  alt="blog"
                  width={500}
                  height={500}
                />
                <div className="p-6 bg-white shadow-lg rounded-b-lg">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Details
                  </h2>
                  <h1 className="title-font text-2xl font-semibold text-gray-900 mb-3">{data.Title}</h1>
                  <p className="leading-relaxed mb-3 text-gray-700">{data.Paragraph}</p>
                  <div className="flex items-center flex-wrap justify-between mt-4">
                    <Link
                      href={`/blog/${data.slug}`}
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-indigo-700 transition duration-300"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
