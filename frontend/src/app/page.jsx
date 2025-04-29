'use client';
import Link from 'next/link';
import React from 'react'


const Page = () => {


  return (
    <>

      {/* hero - start */}
      <header className="fixed top-0 left-0 bg-blue-800 w-full z-50 border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="../images/logo3.png" alt="Logo" className="h-10 w-auto" />
              <span className="text-2xl md:text-4xl font-bold text-white uppercase">E-Doctor</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
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

            {/* Navigation Links */}
            <div
              id="mobile-menu"
              className="hidden md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto 
        bg-blue-800 md:bg-transparent py-4 md:py-0 space-y-4 md:space-y-0 md:space-x-6"
            >
              <Link
                className="text-white font-bold text-lg hover:text-blue-400 px-4 md:px-0 py-2 md:py-0 block"
                href="/browse-doctor"
              >
                Doctor
              </Link>
              <Link
                className="text-white font-bold text-lg hover:text-blue-400 px-4 md:px-0 py-2 md:py-0 block"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-white font-bold text-lg hover:text-blue-400 px-4 md:px-0 py-2 md:py-0 block"
                href="/contact"
              >
                Contact
              </Link>

              {/* Register Dropdown */}
              <div className="relative group px-4 md:px-0">
                <button
                  className="text-white font-bold text-lg hover:text-blue-400 py-2 md:py-0 flex items-center w-full md:w-auto"
                >
                  Register
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:-rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                  <Link
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-lg font-medium"
                    href="/doctor-register"
                  >
                    Doctor
                  </Link>
                  <Link
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-lg font-medium"
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

      {/*section*/}
      <div className="relative w-full min-h-screen py-4 lg:py-8">
        <div className="absolute inset-0">
          {/* Background Image with Overlay */}
          <div className="relative h-full">
            <img
              src="https://media.istockphoto.com/id/857652610/photo/two-doctors-working-together.jpg?s=170667a&w=0&k=20&c=jk9gERTF7morzPCZhZ1QCIrTqZgXzUf40cYs1lzHLVs="
              alt="Doctors working together"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="animate-fadeIn text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                E-Doctors
              </span>
            </h1>

            <p className="text-white text-lg md:text-2xl font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience healthcare redefined. Connect with qualified doctors online,
              book appointments, and get expert medical advice from the comfort of your home.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="/doctor-register"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 
                   border border-transparent text-lg font-bold rounded-lg
                   text-white bg-gradient-to-r from-blue-600 to-indigo-600
                   hover:from-blue-700 hover:to-indigo-700 
                   transform transition duration-200 hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Started
              </a>

              <a
                href="/browse-doctor"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4
                   border-2 border-white text-lg font-bold rounded-lg text-white
                   hover:bg-white hover:text-blue-600
                   transform transition duration-200 hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Browse Doctors
              </a>
            </div>
          </div>
        </div>
      </div>


      {/*why doctor*/}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-4">
              Australian digital healthcare services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why choose <span className="text-blue-600">e-Doctor</span>?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our doctors are all Australian trained GPs who hold specialist general
              practice qualifications accredited by the Australian Health Practitioner
              Regulation Agency (AHPRA) and can provide quality health care
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-6 transition-transform">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Easy to Use
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                24/7 online access Australia-wide. Connect with healthcare professionals at your convenience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 hover:-rotate-6 transition-transform">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Fast & Efficient
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Skip the waiting room and consult with your doctor from home or anywhere convenient.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-6 transition-transform">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Easy to Use
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                24/7 online access Australia-wide. Connect with healthcare professionals at your convenience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 hover:-rotate-6 transition-transform">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Fast & Efficient
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Skip the waiting room and consult with your doctor from home or anywhere convenient.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-6 transition-transform">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Easy to Use
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                24/7 online access Australia-wide. Connect with healthcare professionals at your convenience.
              </p>
            </div>

            {/* Feature 2 */}


            {/* Remaining features follow the same pattern... */}
          </div>
        </div>
      </div>


      {/*about*/}


      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center lg:gap-16">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-50"></div>

              {/* Image Wrapper */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src=" https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww"
                  alt="Medical team collaborating"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col space-y-6 px-4 sm:px-6 md:px-0">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  About Us
                </h2>
                <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto md:mx-0"></div>
              </div>

              <div className="prose prose-lg text-gray-600 sm:text-justify">
                <p className="leading-relaxed">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real written
                  text but is random or otherwise generated. It may be used to display a
                  sample of fonts or generate text for testing.
                </p>
                <p className="mt-4 leading-relaxed">
                  Filler text is dummy text which has no meaning however looks very
                  similar to real text. Text which has no meaning however looks
                  sample of fonts or generate text for testing. Filler text is dummy
                  text which has no meaning however looks very similar to real text.
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 text-center md:text-left">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Contact Us
                </a>
                <a
                  href="/learn-more"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 px-6 py-3 text-base font-medium text-blue-600 transition-all hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*meet*/}

      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Meet our Team
            </h2>
            <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our dedicated team of healthcare professionals committed to providing you with the best medical care and service.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Team Member Card - Start */}
            <div className="group relative">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src=" data:image/jpeg;base64,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"
                  alt="Team member"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Dr. John McCulling
                </h3>
                <p className="text-sm text-gray-500 mt-1">Founder & Chief Medical Officer</p>

                {/* Social Links */}
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member Card - End */}
            <div className="group relative">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBZnOC066fQgcEQDtaaPqN2eQLOyIdTS0HA&s"
                  alt="Team member"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Dr. John McCulling
                </h3>
                <p className="text-sm text-gray-500 mt-1">Founder & Chief Medical Officer</p>

                {/* Social Links */}
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3EjYMPdwCef2hjyfv5PP1b6KfRXk9lyJCQ&s"
                  alt="Team member"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Dr. John McCulling
                </h3>
                <p className="text-sm text-gray-500 mt-1">Founder & Chief Medical Officer</p>

                {/* Social Links */}
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOcS9pfpH1CpTgbplbL6i7xGU1OGsSFboJg&s"
                  alt="Team member"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Dr. John McCulling
                </h3>
                <p className="text-sm text-gray-500 mt-1">Founder & Chief Medical Officer</p>

                {/* Social Links */}
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrkWg3oqXgeyjCxAnM5g4d2CYljpLFlQAVuvCek6Wub_R92tIbTj6UvtaZ9vm5vWFP_U&usqp=CAU"
                  alt="Team member"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Dr. John McCulling
                </h3>
                <p className="text-sm text-gray-500 mt-1">Founder & Chief Medical Officer</p>

                {/* Social Links */}
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://malabarhospitals.com/tharaatu/assets/img/Dr.MiliMoni.jpg"
                  alt="Team member"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Dr. John McCulling
                </h3>
                <p className="text-sm text-gray-500 mt-1">Founder & Chief Medical Officer</p>

                {/* Social Links */}
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_KvTsAb4m81bfDmkGt3IZUQXsGyPDSXYPA&s"
                  alt="Team member"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Dr. John McCulling
                </h3>
                <p className="text-sm text-gray-500 mt-1">Founder & Chief Medical Officer</p>

                {/* Social Links */}
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxX_WwXHX7RUQ99IUyNuoeD9d57TwuUD4oA&s"
                  alt="Team member"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Dr. John McCulling
                </h3>
                <p className="text-sm text-gray-500 mt-1">Founder & Chief Medical Officer</p>

                {/* Social Links */}
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>


            {/* Repeat the card structure for other team members */}
          </div>

          {/* CTA Section */}
          <div className="mt-16 flex justify-center">
            <a
              href="/browse-doctor"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span>Meet Our Doctors</span>
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/*meet end*/}

      {/*quairy*/}
      <div className='bg-white py-6  px-8 sm:py-8 lg:py-12 '>
        <div className='flex flex-col md:flex-row items-center md:items-start  max-w-screen  px-10'>
          <div className='w-full md:w-1/2 px-8 '>
            <img src="../images/telehealth-doctor.jpg " alt="Doctor with stethoscope on phone" className='rounded-lg shadow-lg object-cover ' />
          </div>
          {/* FAQ Section */}
          <div className="space-y-8 space-x-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* FAQ Items */}
            <div className="max-w-3xl mx-auto space-y-6 ">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <button className="w-full px-6 py-4 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Why choose e-Doctor?</h3>
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                </button>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <button className="w-full px-6 py-4 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Who can access e-Doctor services?</h3>
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                </button>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <button className="w-full px-6 py-4 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Are telehealth services covered by Medicare?</h3>
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                </button>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <button className="w-full px-6 py-4 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">How long till a Doctor responds?</h3>
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 mb-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Main CTA Button */}
            <a
              href="/query"
              className="inline-flex items-center justify-center px-8 py-4
        bg-indigo-600 hover:bg-indigo-700
        text-white font-bold text-xl uppercase
        rounded-lg shadow-lg hover:shadow-xl
        transform transition duration-200 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span>Ask a Question</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            {/* Subtext */}
            <p className="text-gray-600 text-center max-w-md">
              Have medical questions? Our doctors are here to help. Get expert answers quickly and securely.
            </p>
          </div>
        </div>
      </div>
      {/*quairy end */}

      {/*our plans*/}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Our plans for you
          </h2>
          <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
            {/* plan - start */}
            <div className="flex flex-col rounded-lg  p-4 pt-6 shadow-lg  hover:shadow-lg  hover:scale-105 transition duratoin-200 border-gray-200 ">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-blue-800">
                  X-Ray
                </div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-500">
                  For individuals and organizations who want to try our system
                </p>
                <div className="space-y-2">
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">meet our consulte </span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      report and prescriptions
                    </span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">good healthcare</span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Comunity support</span>
                  </div>
                  {/* check - end */}
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-8">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-800">2,000</span>
                  <span className="text-gray-500">per test</span>
                </div>
                <Link
                  href={`/user/checkout/${2000}`}
                  className="block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-gray-600 md:text-base"
                >
                  Join for test
                </Link>
              </div>
            </div>
            {/* plan - end */}
            {/* plan - start */}
            <div className="relative flex flex-col rounded-lg   p-4 pt-6 shadow-lg boder-2 hover:shadow-xl  hover:scale-105 transition duratoin-200 border-gray-200">
              <div className="mb-12">
                <div className="absolute inset-x-0 -top-3 flex justify-center">

                </div>
                <div className="mb-2 text-center text-2xl font-bold text-blue-800">
                  Blood Test
                </div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-500">
                  Avanced feaures for Individuals and organizations
                </p>
                <div className="space-y-2">
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Unlimited file storage</span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">10 GB bandwidth per month</span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">10.000 tasks per month</span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Email support</span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">100 Webhooks</span>
                  </div>
                  {/* check - end */}
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-8">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-800">1,000</span>
                  <span className="text-gray-500">per test</span>
                </div>
                <Link
                  href={`/user/checkout/${1000}`}
                  className="block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-gray-600 md:text-base"
                >
                  Continue with for test
                </Link>
              </div>
            </div>
            {/* plan - end */}
            {/* plan - start */}
            <div className="flex flex-col p-4 pt-6 rounded-lg shadow-lg  hover:shadow-xl  hover:scale-105 transition duratoin-200 border-gray-200 ">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-blue-800">
                  surgery
                </div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-500">
                  Maximum performace for organisations
                </p>
                <div className="space-y-2">
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Unlimited file storage</span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Unlimited bandwidth per month
                    </span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">1.000.000 tasks per month</span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Email and phone support</span>
                  </div>
                  {/* check - end */}
                  {/* check - start */}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Unlimited Webhooks</span>
                  </div>
                  {/* check - end */}
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-8">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-800">15,000</span>
                  <span className="text-gray-500">per pateint</span>
                </div>
                <Link
                  href={`/user/checkout/${15000}`}
                  className="block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-gray-600 md:text-base"
                >
                  Contact for test
                </Link>
              </div>
            </div>
            {/* plan - end */}
          </div>
        </div>
      </div>
      {/*our plans end*/}



      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-4xl uppercase font-bold text-gray-800 md:mb-6 lg:text-4xl">
              BLOG
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-medium text-blue-500 md:text-lg">
              This is a section of some simple filler text, also known as placeholder
              text. It shares some characteristics of a real written text but is
              random or otherwise generated.
            </p>
          </div>
          {/* text - end */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {/* article - start */}
            <a
              href="#"
              className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
            >
              <img
                src="https://www.phc.ox.ac.uk/images/blog/female-doctor-with-patient/responsive_image?ratio=image&scale=w760"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
              <div className="relative mt-auto p-4">
                <span className="block text-sm text-gray-200">July 19, 2025</span>
                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                  Good healthcare
                </h2>
              </div>
            </a>
            {/* article - end */}
            {/* article - start */}
            <a
              href="#"
              className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
            >
              <img
                src="https://www.phreesia.com/wp-content/uploads/2025/01/PHR-Blog-Image-Customization-Campaign-Op3-V1-250116.jpg"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
              <div className="relative mt-auto p-4">
                <span className="block text-sm text-gray-200">April 07, 2025</span>
                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                  Working with legacy stacks
                </h2>

              </div>
            </a>
            {/* article - end */}
            {/* article - start */}
            <a
              href="#"
              className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
            >
              <img
                src="https://www.priviahealth.com/wp-content/uploads/2021/02/SeniorsWithDoctor_498579529-1024x683.jpg"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
              <div className="relative mt-auto p-4">
                <span className="block text-sm text-gray-200">March 15, 2025</span>
                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                  10 best smartphones for devs
                </h2>

              </div>
            </a>
            {/* article - end */}
            {/* article - start */}
            <a
              href="#"
              className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTQEkxL5mSV3LtJgxOU7iC-izvxzHerMr5OaDABThsd-K5o1DGXADmwZ_q0iNtdmY2i4&usqp=CAU"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
              <div className="relative mt-auto p-4">
                <span className="block text-sm text-gray-200">January 27, 2025</span>
                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                  8 High performance Notebooks
                </h2>

              </div>
            </a>
            {/* article - end */}
          </div>
        </div>
      </div>

      {/*reviews*/}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Pateint Reviews
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {/* review - start */}
            <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">
                  John McCulling
                </span>
                <span className="block text-sm text-gray-500">January 28, 2025</span>
              </div>
              {/* stars - start */}
              <div className="-ml-1 flex gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              {/* stars - end */}
              <p className="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real written
                text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing.
              </p>
            </div>
            {/* review - end */}
            {/* review - start */}
            <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">
                  Kate Berg
                </span>
                <span className="block text-sm text-gray-500">February 21, 2025</span>
              </div>
              {/* stars - start */}
              <div className="-ml-1 flex gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              {/* stars - end */}
              <p className="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real written
                text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing.
              </p>
            </div>
            {/* review - end */}
            {/* review - start */}
            <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">
                  Greg Jackson
                </span>
                <span className="block text-sm text-gray-500">March 16, 2025</span>
              </div>
              {/* stars - start */}
              <div className="-ml-1 flex gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              {/* stars - end */}
              <p className="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real written
                text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing.
              </p>
            </div>
            {/* review - end */}
          </div>
        </div>
      </div>
      {/*reviews end*/}


      {/* newsletter start */}

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
            <div className="mb-4 sm:mb-8">
              <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">
                Get the latest updates
              </h2>
              <p className="text-center text-gray-500">
                Sign up for our newsletter
              </p>
            </div>
            <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
              <input
                placeholder="Email"
                className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>
            </form>
            <p className="text-center text-xs text-gray-400">
              By signing up to our newsletter you agree to our{" "}
              <a
                href="#"
                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Term of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/* newsletter - end */}

      {/* footer - start */}
      <div className="bg-blue-800">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              {/* logo - start */}
              <div className="mb-4 lg:-mt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                  aria-label="logo"
                >
                  <svg
                    width={95}
                    height={94}

                    className="h-auto w-5 text-indigo-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>
                  E-DOCTOR
                </a>
              </div>
              {/* logo - end */}
              <p className="mb-6 text-gray-400 sm:pr-8">
                Filler text is dummy text which has no meaning however looks very
                similar to real text.
              </p>
              {/* social - start */}
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              {/* social - end */}
            </div>
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold text-xl uppercase tracking-widest text-gray-100">
                DOCTOR
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Register
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    login
                  </a>
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    manageslot
                  </Link>
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    ManageAppointment
                  </Link>
                </div>
              </nav>
            </div>
            {/* nav - end */}
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold  text-xl uppercase tracking-widest text-gray-100">
                PETIENT
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Rigster
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    login
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Book Appointment
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Book Slot
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    ManageAppionment
                  </a>
                </div>
              </nav>
            </div>
            {/* nav - end */}
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold text-xl uppercase tracking-widest text-gray-100">
                REPORT
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Edit Report
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    View Report
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Download Report
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    upload Report
                  </a>
                </div>
              </nav>
            </div>
            {/* nav - end */}
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold  text-xl uppercase tracking-widest text-gray-100">
                LEGAL
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Terms of Service
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Cookie settings
                  </a>
                </div>
              </nav>
            </div>
            {/* nav - end */}
          </div>
          <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
            © 2021 - Present E-Doctor. All rights reserved.
          </div>
        </footer>
      </div>
      {/* footer - end */}









    </>
  )
}
export default Page;