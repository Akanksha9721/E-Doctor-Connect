'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
const ISSERVER = typeof window === 'undefined';

const contactSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First name is required'),

  contact: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Contact number is required'),

  message: Yup.string()
    .min(10, 'Message too short')
    .required('Message is required'),
});

const Contactpage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const contactForm = useFormik({
    initialValues: {
      firstname: '',
      contact: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // TODO: Add your API call here
        console.log(values);
        toast.success('Message sent successfully!');
        resetForm();
      } catch (error) {
        toast.error('Failed to send message');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4  text-center text-4xl uppercase font-bold text-blue-800 md:text-5xl">
              Contact Us
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-600 md:text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <form
            onSubmit={contactForm.handleSubmit}
            className="mx-auto max-w-screen-md rounded-xl bg-white p-6 shadow-lg"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* First Name Field */}
              <div className="relative">
                <label htmlFor="firstname" className="mb-2 block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={contactForm.handleChange}
                  onBlur={contactForm.handleBlur}
                  value={contactForm.values.firstname}
                  className={`w-full rounded-lg border px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                    contactForm.touched.firstname && contactForm.errors.firstname
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />
                {contactForm.touched.firstname && contactForm.errors.firstname && (
                  <p className="mt-1 text-sm text-red-500">{contactForm.errors.firstname}</p>
                )}
              </div>
              <div className="relative">
                <label htmlFor="contact" className="mb-2 block text-sm font-medium text-gray-700">
                  contact*
                </label>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  onChange={contactForm.handleChange}
                  onBlur={contactForm.handleBlur}
                  value={contactForm.values.contact}
                  className={`w-full rounded-lg border px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                    contactForm.touched.contact && contactForm.errors.contact
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />
                {contactForm.touched.contact && contactForm.errors.contact && (
                  <p className="mt-1 text-sm text-red-500">{contactForm.errors.contact}</p>
                )}
              </div>
              {/* Similar structure for other fields */}
              {/* ... */}

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  onChange={contactForm.handleChange}
                  onBlur={contactForm.handleBlur}
                  value={contactForm.values.message}
                  className={`w-full rounded-lg border px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                    contactForm.touched.message && contactForm.errors.message
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />
                {contactForm.touched.message && contactForm.errors.message && (
                  <p className="mt-1 text-sm text-red-500">{contactForm.errors.message}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={contactForm.isSubmitting}
                  className="w-full rounded-lg bg-blue-600 px-8 py-4 text-center text-sm font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-400"
                >
                  {contactForm.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-800 text-white rounded-lg p-8 flex items-start space-x-4 shadow-2xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 5v2M5 8h14"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">+(000) 1234 56789</h3>
              <p className="text-blue-100">info@e-doctor.com</p>
            </div>
          </div>

          <div className="bg-blue-800 text-white rounded-lg p-8 flex items-start space-x-4 shadow-2xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">2 Fire Brigade Road</h3>
              <p className="text-blue-100">Chittagoni, Lakshmipur</p>
            </div>
          </div>

          <div className="bg-blue-800 text-white rounded-lg p-8 flex items-start space-x-4 shadow-2xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1  ">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Mon - Sat: 8am - 5pm</h3>
              <p className="text-blue-100">Sunday Closed</p>
            </div>
          </div>
        </div>
      </div>

  <footer className="bg-blue-900 text-white py-12">
        <div className=" px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Logo and description */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                  <span className="text-xl font-bold text-white">E</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">E-Doctor</span>
              </Link>

              <p className="text-gray-300 mb-6">
                Connecting patients with qualified healthcare professionals through secure video consultations, making
                healthcare accessible to everyone.
              </p>

              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation columns */}
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Doctor</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/doctor-register" className="text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
                <Link href="/doctor-login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/doctor/manage-slots" className="text-gray-300 hover:text-white transition-colors">
                  Manage Slots
                </Link>
                <Link href="/doctor/appointments" className="text-gray-300 hover:text-white transition-colors">
                  Manage Appointments
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Patient</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/user-register" className="text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
                <Link href="/user-login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/book-appointment" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
                <Link href="/book-slot" className="text-gray-300 hover:text-white transition-colors">
                  Book Slot
                </Link>
                <Link href="/user/appointments" className="text-gray-300 hover:text-white transition-colors">
                  Manage Appointments
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Reports</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/reports/edit" className="text-gray-300 hover:text-white transition-colors">
                  Edit Report
                </Link>
                <Link href="/reports/view" className="text-gray-300 hover:text-white transition-colors">
                  View Report
                </Link>
                <Link href="/reports/download" className="text-gray-300 hover:text-white transition-colors">
                  Download Report
                </Link>
                <Link href="/reports/upload" className="text-gray-300 hover:text-white transition-colors">
                  Upload Report
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2025 E-Doctor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contactpage;