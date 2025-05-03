'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 w-full border-b border-gray-200 fixed top-0 ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img src="/images/logo3.png" alt="Logo" className="h-10 w-auto" />
            <span className="text-xl md:text-2xl font-bold text-white">E-Doctor</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/user/profile">PROFILE</NavLink>
            <NavDropdown />
            <NavLink href="/user/blog">BLOG</NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/user/profile">PROFILE</MobileNavLink>
            <MobileNavLink href="/user/manage-appointment">APPOINTMENT</MobileNavLink>
            <MobileNavLink href="#">BLOG</MobileNavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Helper Components
const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-white font-medium hover:text-blue-400 transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-3 py-2 text-base font-medium text-white hover:text-blue-400 hover:bg-blue-700 rounded-md"
  >
    {children}
  </Link>
);

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white font-medium hover:text-blue-400 transition-colors flex items-center"
      >
        APPOINTMENT
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white">
          <div className="py-1">
            <Link
              href="/user/manage-appointment"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              M-APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;