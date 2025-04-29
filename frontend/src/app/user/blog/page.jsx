import React from 'react'

const Blogpage = () => {
  return (
    <>
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

    </>

  )
}

export default Blogpage