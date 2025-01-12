import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="text-white body-font bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-bold items-center text-white mb-4 md:mb-0">
            <span className="text-3xl font-serif tracking-wider">Wish Malik</span>
            <span className="ml-2 text-xl text-gray-300 font-light">Travel & Beauty</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 text-lg hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
              Home
            </a>
            <a href="/about" className="mr-5 text-lg hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
              About
            </a>
            <a href="/blog" className="mr-5 text-lg hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
              Blog
            </a>
            <a href="/contact" className="mr-5 text-lg hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
