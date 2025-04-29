'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 bg-blue-800 w-full z-50 border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="../images/logo3.png" alt="Logo" className="h-8 w-auto sm:h-10" />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase">
                E-Doctor
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none hover:text-blue-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <div
              className={`${
                isMenuOpen ? 'flex' : 'hidden'
              } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto 
              bg-blue-800 md:bg-transparent py-4 md:py-0 space-y-4 md:space-y-0 md:space-x-6
              shadow-lg md:shadow-none mt-2 md:mt-0`}
            >
              <Link
                className="text-white font-semibold text-base hover:text-blue-200 px-4 md:px-0 py-2 md:py-0 block transition-colors duration-200"
                href="/browse-doctor"
              >
                Doctor
              </Link>
              <Link
                className="text-white font-semibold text-base hover:text-blue-200 px-4 md:px-0 py-2 md:py-0 block transition-colors duration-200"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-white font-semibold text-base hover:text-blue-200 px-4 md:px-0 py-2 md:py-0 block transition-colors duration-200"
                href="/contact"
              >
                Contact
              </Link>

              {/* Register Dropdown */}
              <div className="relative group px-4 md:px-0">
                <button
                  className="text-white font-semibold text-base hover:text-blue-200 py-2 md:py-0 flex items-center w-full md:w-auto transition-colors duration-200"
                >
                  Register
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:-rotate-180 transition-transform duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                  <Link
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm font-medium transition-colors duration-200"
                    href="/doctor-register"
                  >
                    Doctor
                  </Link>
                  <Link
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm font-medium transition-colors duration-200"
                    href="/user-register"
                  >
                    User
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Add spacing below header */}
      <div className="h-20" /> {/* This creates space below the fixed header */}
    </>
  );
};

export default Navbar;