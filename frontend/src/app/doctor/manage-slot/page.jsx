'use client';
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Manageslot = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [slotList, setSlotList] = useState([]);
  const token = localStorage.getItem('token');


  const slotForm = useFormik({
    initialValues: {
      time: '',
      date: ''
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:5000/slot/add', values, {
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
    axios.get('http://localhost:5000/slot/getdoctorslots', {
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
    axios.delete('http://localhost:5000/slot/delete/' + id)
      .then((result) => {
        toast.success('Slot Deleted Successfully');
        fetchSlot();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete slot');
      })

  }
  const fetchDoctorData = async () => {
    const res = await axios.get('http://localhost:5000/doctor/getdoctor',{
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
    })
   
  }

  useEffect(() => {
    fetchDoctorData();
  }, []);




  return (
    <>

      <>
        {/* Comment Form */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="mx-auto max-w-2xl">
            <h1 className='text-center font-bold  text-2xl '>DOCTOR DASHBORD</h1>

            <div className=' max-w-lg mx-auto py-5'>
              {/* Card */}
              <a
                className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700"
                href="#"
              >
                <div className="relative flex items-center overflow-hidden">
                  <img
                    className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                    src={doctorData.avatar}
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
              <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
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
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
    </>
  )
}

export default Manageslot;