'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
const ISSERVER = typeof window === 'undefined';

const ManageAppointment = () => {
  const [appointmentList, setAppointmentList] = useState([]);
  const token = !ISSERVER && localStorage.getItem('token');


  const fetchAppointment = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/appointment/getbyuser`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        console.table(result.data);
        setAppointmentList(result.data);

      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    fetchAppointment();
  }, [])

  const deleteAppointment = (id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/appointment/delete/` + id)
      .then((result) => {
        toast.success('appointment Deleted Successfully');
        fetchAppointment();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete appointment');
      })
  }
  return (
    <>
      <div className=' bg-gray-100 min-h-screen '>
        <h1 className='text-center font-bold  text-2xl py-4 '>USER DASHBORD</h1>
        <div className='container mx-auto py-10'>
          <h1 className='text-center font-bold  text-2xl '></h1>
          <table className='w-full'>
            <thead>
              <tr className='bg-blue-800 text-white font-bold text-center '>
                <th className='p-3'>ID</th>
                <th className='P-3'>PatientName</th>
                <th className='p-3'>PatientAge</th>
                <th className='p-3'>PatienGender</th>
                <th className='p-3'>createdAt</th>
                <th className='p-3 '>Action</th>
                <th className='p-3 '>Book Here</th>
                <th className='p-3 '>Join meeting</th>
               
              </tr>
            </thead>
            <tbody>
              {
                appointmentList.map((appointment) => {
                  return (
                    <tr key={appointment._id} className='border text-center border-gray-300 bg-white hover:bg-gray-100 transition-all duration-200 '>
                      <td className='p-3 '>{appointment._id}</td>
                      <td className='p-3 '>{appointment.patientName}</td>
                      <td className='p-3'>{appointment.patientAge}</td>
                      <td className='p-3'>{appointment.patientGender}</td>
                      <td className='p-3'>{new Date(appointment.createdAt).toDateString()}</td>
                      


                      <td className='p-3'>
                        <button onClick={() => { deleteAppointment(appointment._id) }} className='bg-red-500 py-1 px-3 text-white rounded-full '>Delete</button>
                      </td>
                      <td className='p-3'>
                        <Link href={'/user/view-appointment/' + appointment._id} className='bg-blue-500 py-1 px-3 text-white rounded-full '>View appointment</Link>
                      </td>
                      <td className='p-3 '>
                        <a target='_blank' href={appointment.videocall} className='bg-green-500 py-1 px-3 text-white rounded-full  '>join</a>
                      </td>

                    </tr>
                  )
                })
              }


            </tbody>

          </table>


        </div>
      </div>



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
    </>



  )
}

export default ManageAppointment;