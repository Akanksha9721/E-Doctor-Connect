'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      {/* ========== HEADER ========== */}
      <header className=" bg-[#0A2540] flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full  border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className=" relative max-w-[85rem] w-full mx-auto flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className='text-white  flex items-center space-x-3 '>

            <img src="../images/logo.png" alt="Logo" class="h-12 w-auto bg- transparent" />
            <span className='text-2xl font-bold text-white-800'>E-Doctor</span>

          </div>

          {/* Collapse */}
          <div className=''>
            <div className=" bg-[#0A2540] bg-overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="py-2 md:py-0 px-2 md:px-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">

                <div className="grow">
                  <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                    <Link
                      className=" text-white  text-xl  flex justify-between  uppercase font-bold hover:text-blue-400  p-2 flex items-center text-sm text-white "
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
                        className=" text-white font-bold  text-xl  flex justify-between  uppercase   hover:text-blue-400  p-2 flex items-center text-sm text-white "
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
                    <div className="hs-dropdown [--strategy:static] space-x-8  md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                      <button
                        id="hs-header-base-dropdown"
                        type="button"
                        className="  text-white text-xl font-bold  hover:text-blue-400   w-full p-2 flex items-center text-sm  text-white    dark:focus:bg-neutral-700"
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
                        RESIGTER
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
                            className="  text-xl font-medium hover:text-blue-400 text-[#F59E0B] p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                            href="/doctor-register"
                          >
                            DOCTOR
                          </Link>
                          <Link
                            className="  text-xl font-medium hover:text-blue-400 text-[#F59E0B] p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                            href="/user-register"
                          >
                            USER
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




                    {/* End Dropdown */}



                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>

    </>

  );
};

export default Navbar;