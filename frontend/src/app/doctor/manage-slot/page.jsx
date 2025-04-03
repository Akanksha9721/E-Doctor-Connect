'use client';
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
const ISSERVER = typeof window === 'undefined';

const Manageslot = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [slotList, setSlotList] = useState([]);
  const token = !ISSERVER && localStorage.getItem('token');

  const slotForm = useFormik({
    initialValues: {
      time: '',
      date: ''
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/slot/add`, values, {
        headers: {
          'x-auth-token': token
        }
      })
        .then((result) => {
          toast.success('User added successfully');
          //router.push('/login');
          fetchSlot();
        }).catch((err) => {
          console.log(err);

          toast.error(err?.response?.data?.message || 'Some error occured');

        });
    },

  });




  const fetchSlot = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/slot/getdoctorslots`, {
      headers: {
        'x-auth-token': token
      }

    })
      .then((result) => {
        console.table(result.data);
        setSlotList(result.data);

      })
      .catch((err) => {
        console.log(err);
      })

  }
  useEffect(() => {
    fetchSlot();

  }, [])

  const deleteSlot = (id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/slot/delete/` + id)
      .then((result) => {
        toast.success('Slot Deleted Successfully');
        fetchSlot();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete slot');
      })

  }
  const fetchDoctorData = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getdoctor`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        console.table(result.data);
        setDoctorData(result.data);

      })
      .catch((err) => {
        console.log(err);
        console.log(doctorData);
      })

  }

  useEffect(() => {
    fetchDoctorData();
  }, []);

  if (doctorData === null)
    return <h1>Loading...</h1>


  return (
    <>

      <>
        {/* Comment Form */}
        <div className='bg-green-100 py-10 '>
          <div className="  max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto max-w-2xl">
              <h1 className='text-center font-bold  text-2xl '>DOCTOR DASHBORD</h1>

              <div className='  max-w-lg mx-auto py-5'>
                {/* Card */}
                <a
                  className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700"
                  href="#"
                >
                  <div className=" shadow-xl bg-white  rounded-xl relative flex items-center overflow-hidden">
                    <img
                      className="w-32  h-32 sm:w-48  absolute inset-0 object-cover rounded-full  rounded-s-lg"
                      src={doctorData?.avatar}
                      alt="Blog Image"
                    />
                    <div className="grow p-4 ms-32 sm:ms-48">
                      <div className="min-h-24 flex flex-col justify-center">
                        <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                          {doctorData.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                          {doctorData.qualification}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="text-center">
                <h2 className=" font-bold text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                  Manage Slot
                </h2>
              </div>
              {/* Card */}

              <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
                <form onSubmit={slotForm.handleSubmit}>
                  <div className="mb-4 sm:mb-8">
                    <label
                      htmlFor="hs-feedback-post-comment-name-1"
                      className="block mb-2 text-sm font-medium dark:text-white"
                    >
                      Time
                    </label>
                    <input
                      type="text"
                      id="time"
                      onChange={slotForm.handleChange}
                      value={slotForm.values.time}
                      className=" border  py-3 px-4 block w-full border-blue-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="time"
                    />
                  </div>
                  <div className="mb-4 sm:mb-8">
                    <label
                      htmlFor="hs-feedback-post-comment-email-1"
                      className="block mb-2 text-sm font-medium dark:text-white"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      onChange={slotForm.handleChange}
                      value={slotForm.values.date}
                      className=" border py-3 px-4 block w-full border-blue-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="date"
                    />
                  </div>
                  <div className="mt-6 grid">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>

              </div>
              {/* End Card */}
            </div>
          </div>
        </div>
        {/* End Comment Form */}
      </>

      <div className=''>
        <div className='container mx-auto py-10'>
          <h1 className='text-center text-2xl font-bold'></h1>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-800 text-white font-bold'>
                <th className='p-3' >ID</th>
                <th className='p-3' ></th>
                <th className='p-3' >Time</th>
                <th className='p-3' >Date</th>
                <th className='p-3' >Status</th>
                <th className='p-3' colSpan={2}></th>
                <th className='p-3' colSpan={2}>Action</th>
                <th className='p-3' colSpan={2}></th>


              </tr>

            </thead>
            <tbody>
              {
                slotList.map((slot) => {
                  return (
                    <tr key={slot._id} className='border text-center  font-bold '>
                      <td className='p-3'>{slot._id}</td>
                      <td className='p-3'>{slot.name}</td>
                      <td className='p-3'>{slot.time}</td>
                      <td className='p-3'>{new Date(slot.createdAt).toDateString()}</td>
                      <td className='p-3'>{slot.status}</td>
                      <td className='p-3' colSpan={2}></td>




                      <td className='p-3'>
                        <button onClick={() => { deleteSlot(slot._id) }} className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
                      </td>
                      <td className='p-3'>
                        <Link href={'/updateslot/' + slot._id} className='bg-blue-500 py-1 px-3 text-white rounded-full'>Update</Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>

        </div>
      </div>



      
      {/*footer*/}
      <div className="bg-gray-900">
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

export default Manageslot;