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
      {/* ========== HEADER ========== */}
      <header className="bg-blue-800 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="relative w-full mx-auto flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="text-white flex items-center space-x-6">
            <img src="../images/logo3.png" alt="Logo" className="h-12 w-auto bg-transparent" />
            <span className="text-4xl font-bold text-white uppercase">E-Doctor</span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="inline-flex items-center justify-center md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:gap-3 w-full md:w-auto flex-col md:flex-row bg-blue-800 md:bg-transparent`}
          >
            <Link
              className="text-white font-bold text-xl uppercase hover:text-blue-400 p-2 flex items-center"
              href="/browse-doctor"
            >
              Doctor
            </Link>
            <Link
              className="text-white font-bold text-xl uppercase hover:text-blue-400 p-2 flex items-center"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-white font-bold text-xl uppercase hover:text-blue-400 p-2 flex items-center"
              href="/contact"
            >
              Contact
            </Link>
            <div className="relative">
              <button
                className="text-white font-bold text-xl uppercase hover:text-blue-400 p-2 flex items-center"
                onClick={toggleMenu}
              >
                Register
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`${
                  isMenuOpen ? 'block' : 'hidden'
                } absolute bg-white text-black mt-2 rounded shadow-lg`}
              >
                <Link
                  className="block px-4 py-2 hover:bg-gray-200"
                  href="/doctor-register"
                >
                  Doctor
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-200"
                  href="/user-register"
                >
                  User
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;