import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <>

      {/* hero - start */}
      <header className=" fixed top-0 left-0 bg-blue-800 flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-light-Gray border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className=" relative max-w-[85rem] w-full mx-auto flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className='text-white  flex items-center space-x-3 '>
            <img src="../images/logo.png" alt="Logo" class="h-12 w-auto bg- transparent" />
            <span className='text-2xl font-bold text-white'>E-Doctor</span>
          </div>
          {/* Collapse */}
          <div className=''>
            <div className=" bg-blue-800 bg-overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="py-2 md:py-0 px-2 md:px-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">

                <div className="grow">
                  <div className="flex space-x-10 flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                    <Link
                      className=" text-white font-bold  text-xl   uppercase   hover:text-blue-400  p-2 flex items-center text-sm text-white "
                      href="/browse-doctor"
                      aria-current="page"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                      DOCTOR
                    </Link>
                    <Link
                      className=" text-white font-bold  text-xl   uppercase   hover:text-blue-400  p-2 flex items-center text-sm text-white "
                      href="/about"
                      aria-current="page"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                      ABOUT
                    </Link>
                    {/* Dropdown */}
                    <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                      <button
                        id="hs-header-base-dropdown"
                        type="button"
                        className="  text-white text-xl uppercase  font-bold hover:text-blue-400   w-full p-2 flex items-center text-sm  text-white    dark:focus:bg-neutral-700"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m3 10 2.5-2.5L3 5" />
                          <path d="m3 19 2.5-2.5L3 14" />
                          <path d="M10 6h11" />
                          <path d="M10 12h11" />
                          <path d="M10 18h11" />
                        </svg>
                        REGISTER
                        <svg
                          className=" hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hs-header-base-dropdown"
                      >
                        <div className="py-1 md:px-1 space-y-0.5">
                          <Link
                            className="  text-xl font-bold  hover:text-blue-400 text-[#F59E0B] p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                            href="/doctor-register"
                          >
                            doctor
                          </Link>
                          <Link
                            className="  text-xl font-bold hover:text-blue-400 text-[#F59E0B] p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                            href="/user-register"
                          >
                            User
                          </Link>
                          <Link
                            className=" text-xl font-medium hover:text-blue-400 text-[#F59E0B] p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                            href="#"
                          >
                            Team Account
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link
                      className=" text-white font-bold uppercase  text-xl  flex justify-between  uppercase   hover:text-blue-400  p-2 flex items-center text-sm text-white "
                      href="/browse-doctor"
                      aria-current="page"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                      CONSLUTANT
                    </Link>
                    <Link
                      className=" text-white font-bold  text-xl   uppercase   hover:text-blue-400  p-2 flex items-center text-sm text-white "
                      href="/contact"
                      aria-current="page"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>




      <div className="max-auto w-full h-full ">
        <div className="w-full  max-auto w-full">
          {/*slider */}
          <section className="  min-h-screen    flex flex-col justify-between  lg:flex-row">
            {/* content - start */}
            <div className="h-70    overflow-hidden bg-cover  lg:h-auto ">
              <img
                src=" https://media.istockphoto.com/id/857652610/photo/two-doctors-working-together.jpg?s=170667a&w=0&k=20&c=jk9gERTF7morzPCZhZ1QCIrTqZgXzUf40cYs1lzHLVs="
                loading="lazy"
                alt="Photo  not found"
                className=" h-screen w-screen"
              />
              <div class="absolute    inset-0 flex flex-col items-center justify-center text-center bg-white bg-opacity-50 p-10">
                <h3 class="text-blue-400 text-2xl font-semibold tracking-widest uppercase"></h3>
                <h1 class="text-green-400 text-7xl font-extrabold leading-tight mt-4">E-Doctors </h1>
                <p class="text-gray-700 text-2xl max-w-2xl font-medium mt-6 leading-relaxed tracking-wide">
                  This is a section of some simple filler text, also known as placeholder text.
                  It shares some characteristics of a real written text but is random.
                </p>
                <div class="mt-8 space-x-5">
                  <button class="bg-green-300 text-white text-xl px-8 py-4 rounded-lg font-bold uppercase tracking-wider  hover:bg-green-500">Start now</button>
                  <a href="/browse-doctor" className="bg-green-300 text-white  text-xl px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-green-500">CONSLUTANT</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>


      <div className='bg-white py-10' >

        <div class="container mx-auto px-4 py-12 max-w-screen">

          <div class="text-center mb-16">
            <p class="text-blue-600 mb-2">Australian digital healthcare services</p>
            <h1 class="text-5xl font-bold text-gray-900 mb-6">Why e-Doctor?</h1>
            <p class="text-gray-600 max-w-3xl mx-auto">
              Our doctors are all Australian trained GPs who hold specialist general
              practice qualifications accredited by the Australian Health Practitioner
              Regulation Agency (AHPRA) and can provide quality health care
            </p>
          </div>


          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 text-center gap-10">

            <div class="bg-white p-6 rounded-lg shadow-2xl transition duration-300 ease-in-out hover:bg-teal-100 cursor-pointer">
              <div class="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Easy to Use</h3>
              <p class="text-gray-600">Australia wide with 24 hours online access.24 hours online access.24 hours online access. </p>
            </div>


            <div class="bg-white p-6 rounded-lg shadow-2xl transition duration-300 ease-in-out hover:bg-teal-100 cursor-pointer">
              <div class="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Fast and Efficient</h3>
              <p class="text-gray-600">Skip the waiting room and consult with your doctor at home or anywhere convenient.</p>
            </div>


            <div class="bg-white p-6 rounded-lg shadow-2xl transition duration-300 ease-in-out hover:bg-teal-100 cursor-pointer">
              <div class="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">FRACGP Qualified GPs</h3>
              <p class="text-gray-600">Our doctors are all Australian trained GPs with Specialist General Practice qualifications so you can be guaranteed quality health care.</p>
            </div>


            <div class="bg-white p-6 rounded-lg shadow-2xl transition duration-300 ease-in-out hover:bg-teal-100 cursor-pointer">
              <div class="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Patient-Centered Care</h3>
              <p class="text-gray-600">We understand that everyone is unique and can offer best practice healthcare tailored to the individual</p>
            </div>


            <div class="bg-white p-6 rounded-lg shadow-2xl transition duration-300 ease-in-out hover:bg-teal-100 cursor-pointer">
              <div class="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Confidential & Secure</h3>
              <p class="text-gray-600">Your personal and medical information is our top priority and will be safeguarded with utmost security and confidentiality</p>

            </div>

          </div>
        </div>
      </div>






      <div className="bg-white  py-10">
        <div className="mx-auto max-w-screen px-4 md:px-5 md:px-10">

          <div className="grid gap-8 md:grid-cols-2 lg:gap-10 px-10">
            <div className='profile-card bg-gray-100  hover:bg-indigo-100  rounded-lg shadow-md    '>

              <div className="h-64  overflow-hidden  bg-gray-100 shadow-lg md:h-auto ">
                <img
                  src="https://media.istockphoto.com/id/1196710776/photo/doctors-working-in-team.jpg?s=170667a&w=0&k=20&c=BwMBoAO7L-PPYNuxaHR0CD_1oohe8Ilh8RnZvYCnJ74="
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center  "
                />
              </div>
            </div>
            <div className='md:pt-8 text-center'>

              <h2 className='font-bold text-center uppercase  text-4xl'>
                About us
              </h2>
              <p className="mb-6 py-5 text-gray-500 sm:text-lg md:mb-8 font-medium ">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real written
                text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing. Filler text is dummy
                text which has no meaning however looks very similar to real text.
                Filler text is dummy text which has no meaning however looks very
                similar to real text.text which has no meaning however look
                sample of fonts or generate text for testing. Filler text is dummy
                text which has no meaning however looks very similar to real text.
                Filler text is dummy text which has no meaning however looks very
                similar to real text.text which has no meaning however look
              </p>
            </div>

          </div>

        </div>
      </div>





      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-4xl font-bold text-gray-800 md:mb-6 lg:text-6xl">
              Meet our Team
            </h2>
            <p className="mx-auto font-medium max-w-screen-md text-center text-green-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* text - end */}
          <div className=" grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 ">
            {/* person - start */}



            <div className=" profile-card bg-gray-100  hover:bg-indigo-100  p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg text-center flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div className="  mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2N1kH-CMSZYlRZ2qTyhd00TL-Sl8vLgxc3w&s"
                  loading="lazy"
                  alt="Photo by Radu Florin"
                  className="h-full w-full object-cover object-center w-screen"
                />
              </div>
              <div>
                <div className=" hover:text-indigo-800 text-indigo-500  text-center font-bold 0 md:text-lg">
                  Dr. John McCulling
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  Founder
                </p>
                {/* social - start */}
                <div className="flex justify-center">
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
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* social - end */}
              </div>

            </div>



            {/* person - end */}
            {/* person - start */}
            <div className="profile-card bg-gray-100  hover:bg-indigo-100 p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg text-center flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div className=" mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Dn0oLz6MDWnNS6Tkf6AT-zQNdMQ9YF-Iqw&s "
                  loading="lazy"
                  alt="Photo by christian ferrer"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className=" hover:text-indigo-800 text-center font-bold text-indigo-500 md:text-lg">
                  Kate Berg
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  CFO
                </p>
                {/* social - start */}
                <div className="flex justify-center">
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
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* social - end */}
              </div>
            </div>
            {/* person - end */}
            {/* person - start */}
            <div className=" profile-card bg-gray-100  hover:bg-indigo-100  p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg text-center flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReerJg361TuZegMwMdpOKrpsWvnvuI7vuEzQ&s "
                  loading="lazy"
                  alt="Photo by Ayo Ogunseinde"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className=" hover:text-indigo-800 text-center font-bold text-indigo-500 md:text-lg">
                  Greg Jackson
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  CTO
                </p>
                {/* social - start */}
                <div className="flex justify-center">
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
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* social - end */}
              </div>
            </div>
            {/* person - end */}
            {/* person - start */}
            <div className=" profile-card bg-gray-100   hover:bg-indigo-100 p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg text-center flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_-Gkh2Gfmhr3QmQxGlrPiRvO5aSZ5CK0wg&s"
                  loading="lazy"
                  alt="Photo by Midas Hofstra"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className=" hover:text-indigo-800 text-indigo-500 text-center font-bold  md:text-lg">
                  Robert Greyson
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  Creative Director
                </p>
                {/* social - start */}
                <div className="flex justify-center">
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
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* social - end */}
              </div>
            </div>
            {/* person - end */}
            {/* person - start */}
            <div className=" profile-card bg-gray-100   hover:bg-indigo-100 p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg text-center flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjhNErdY0bBlN28KirqjUYhik4SlORWm_XA&s "
                  loading="lazy"
                  alt="Photo by Elizeu Dias"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className="  hover:text-indigo-800 text-indigo-500 text-center font-bold  md:text-lg">
                  John Roberts
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  Investor Relations
                </p>
                {/* social - start */}
                <div className="flex justify-center">
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
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-gray-600"
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
                  </div>
                </div>
                {/* social - end */}
              </div>
            </div>
            {/* person - end */}
            {/* person - start */}
            <div className=" profile-card bg-gray-100  hover:bg-indigo-100 p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg text-center flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src=" data:image/jpeg;base64,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 "
                  loading="lazy"
                  alt="Photo by Matheus Ferrero"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className=" hover:text-indigo-800 text-indigo-500 text-center font-bold md:text-lg">
                  Judy Amandez
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  Senior Art Director
                </p>
                {/* social - start */}
                <div className="flex justify-center">
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
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* social - end */}
              </div>
            </div>
            {/* person - end */}
            {/* person - start */}
            <div className="profile-card bg-gray-100 hover:bg-indigo-100  p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg text-center flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src=" data:image/jpeg;base64,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"
                  loading="lazy"
                  alt="Photo by Leilani Angel"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className=" hover:text-indigo-800  text-indigo-500 text-center font-bold  md:text-lg">
                  Rahul Williams
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  Creative Director
                </p>
                {/* social - start */}
                <div className="flex justify-center">
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
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* social - end */}
              </div>
            </div>
            {/* person - end */}
            {/* person - start */}
            <div className=" profile-card bg-gray-100  hover:bg-indigo-100 p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg text-center flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-n-Eb5PPHCiRyGR1vpCKxiucX1RsoZ0gEA&s"
                  loading="lazy"
                  alt="Photo by Jernej Graj"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className=" hover:text-indigo-800  text-indigo-500 text-center font-bold  md:text-lg">
                  Ari Ferris
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  Marketing Analyst
                </p>
                {/* social - start */}
                <div className="flex justify-center">
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
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* social - end */}
              </div>
            </div>
            {/* person - end */}
          </div>
          <div className="mt-10 space-x-10 flex justify-center items-center ">

            <a href="/browse-doctor" className="bg-green-300 text-white  text-xl px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-green-500">CONSLUTANT</a>

          </div>
        </div>
      </div>


      <div className='bg-white py-6  px-8 sm:py-8 lg:py-12 '>
        <div className='flex flex-col md:flex-row items-center md:items-start  max-w-screen  px-10'>
          <div className='w-full md:w-1/2 px-8 '>
            <img src="../images/telehealth-doctor.jpg " alt="Doctor with stethoscope on phone" className='rounded-lg shadow-lg object-cover ' />
          </div>
          <div className="w-full md:w-1/2 ">
            <h2 className="text-4xl  text-center font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div class="space-y-4 px-10">
              <div className="faq-item bg-green-50 rounded-md p-4 cursor-pointer transition duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800  shadow-2xl">Why choose e-Doctor?</h3>
                  <span className="text-teal-600 text-2xl">+</span>
                </div>
                <div className="faq-answer hidden mt-2 text-gray-600">
                  <p>e-Doctor provides convenient, secure, and professional healthcare services from the comfort of your home. Our platform connects you with qualified Australian GPs who can provide consultations, prescriptions, referrals, and medical certificates.</p>
                </div>
              </div>
               


              <div className="faq-item bg-green-50 rounded-md p-4 cursor-pointer transition duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">Who can access e-Doctor services?</h3>
                  <span className="text-teal-600 text-2xl">+</span>
                </div>
                <div className="faq-answer hidden mt-2 text-gray-600">
                  <p>Anyone in Australia with internet access can use e-Doctor services. Our platform is designed to be accessible to all Australians, regardless of location, making healthcare available even in remote areas.</p>
                </div>
              </div>

              <div className="faq-item bg-green-50 rounded-md p-4 cursor-pointer transition duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">Are the medical telehealth services provided by e-Doctor covered by Medicare</h3>
                  <span className="text-teal-600 text-2xl">+</span>
                </div>
                <div className="faq-answer hidden mt-2 text-gray-600">
                  <p>Yes, eligible telehealth consultations with e-Doctor are covered by Medicare. Bulk billing is available for eligible patients, including those with a valid Medicare card. Please check your eligibility during the booking process.</p>
                </div>
              </div>


              <div className="faq-item bg-green-50 rounded-md p-4 cursor-pointer transition duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">How long till a Doctor responds</h3>
                  <span className="text-teal-600 text-2xl">+</span>
                </div>
                <div className="faq-answer hidden mt-2 text-gray-600">
                  <p>Our doctors typically respond within 15-30 minutes during business hours. For after-hours consultations, response times may vary but are usually within 1 hour. Urgent cases are prioritized to ensure prompt medical attention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 space-x-5 flex justify-center items-center">
                  
                  <a href="/contact" className="bg-green-300 text-white  text-xl px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-green-500">CONTCAT</a>
                </div>
      </div>


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
                <a
                  href="#"
                  className="block rounded-lg bg-indigo-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Join for test
                </a>
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
                <a
                  href="#"
                  className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Continue with for test
                </a>
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
                <a
                  href="#"
                  className="block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-gray-600 md:text-base"
                >
                  Contact for test
                </a>
              </div>
            </div>
            {/* plan - end */}
          </div>
        </div>
      </div>




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
export default Home;