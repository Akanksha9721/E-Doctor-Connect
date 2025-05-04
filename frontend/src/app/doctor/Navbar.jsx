"use client"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white font-bold text-xl w-8 h-8 rounded flex items-center justify-center">
                  E
                </div>
                <span className="ml-2 text-xl font-bold">E-Doctor</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <Link href="/browse-doctor" className="text-gray-700 hover:text-blue-600 font-medium">
              DOCTOR
            </Link>

            {/* REGISTER Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => toggleDropdown("register")}
              >
                REGISTER
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "register" && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <Link href="/doctor-register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    DOCTOR
                  </Link>
                  <Link href="/user-register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    USER
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Team Account
                  </Link>
                </div>
              )}
            </div>

            {/* APPOINTMENT Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => toggleDropdown("appointment")}
              >
                APPOINTMENT
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "appointment" && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <Link
                    href="/doctor/manage-appointment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    M-APPOINTMENT
                  </Link>
                </div>
              )}
            </div>

            {/* SLOT Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => toggleDropdown("slot")}
              >
                SLOT
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "slot" && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <Link href="/doctor/manage-slot" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    M-SLOT
                  </Link>
                </div>
              )}
            </div>

            <Link href="/doctor/doctor-profile" className="text-gray-700 hover:text-blue-600 font-medium">
              PROFILE
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
