'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Appointment = () => {

    const appointmentForm = useFormik({
        initialValues: {
          pateintname: '',
          pateintgender: '',
          pateintage:'',
          description:''
        },
        onSubmit: (values) => {
          console.log(values);
          axios.post('http://localhost:5000/appointment/add', values )
            .then((result) => {
              toast.success('User added successfully');
              //router.push('/login');
              fetchAppointment();
            }).catch((err) => {
              console.log(err);
              toast.error(err?.response?.data?.message || 'Some error occured');
    
            });
        },
    
      });
    

    const {id} = useParams();
    const [slotData, setSlotData] = useState([]);

    const fetchSlotData = async () => {
        const res = await axios.get('http://localhost:5000/slot/getbydoctor/' + id)
        console.log(res.data);
        setSlotData(res.data);
      }
    
      useEffect(() => {
        fetchSlotData();
      }, []);

    //   const getAppointmentData = async () => {
    //       const res = await axios.get('https://localhost:5000/doctor/getbyid/' + id);
    //       console.log(res.data);
    //       setAppointmentData(res.data);
      
    //     }
      
    //     if (appointmentData === null) {
    //       return <h1 className='text-3xl font-bold text-center mt-10'>Loading...</h1>
    //     }

    return (
        <>

<div className=''>
        <div className='container mx-auto py-10'>
          <h1 className='text-center text-2xl font-bold'></h1>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-800 text-white font-bold'>
                <th className='p-3'>ID</th>
                
               
                <th className='p-3'>Actoin</th>


              </tr>

            </thead>
            <tbody>
              {
                slotData.map((slot) => {
                  return (
                    <tr key={slot._id} className='border bg-red-200'>
                      <td className='p-3'>{slot._id}</td>
                      <td className='p-3'>{slot.name}</td>
                     
                      <td className='p-3'>{new Date(slot.createdAt).toDateString()}</td>
                      <td className='p-3' colSpan={2}></td>
                      <td className='p-3' colSpan={2}></td>
                      <td className='p-3' colSpan={2}></td>

                    </tr>
                  )
                })
              }
            </tbody>

          </table>



        </div>

      </div>

            {/* Card Section */}
            <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Card */}
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
                            Appointment From
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                         let's connect
                        </p>
                    </div>
                    <form onSubmit={appointmentForm.handleSubmit}>
                        {/* Section */}
                        <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                            <label
                                htmlFor="af-payment-billing-contact"
                                className="inline-block text-sm font-medium dark:text-white"
                            >
                              patient Name
                            </label>
                            <div className="name">
                                <input
                                    id="name"
                                    type="text"
                                    onChange={appointmentForm.handleChange}
                                    value={appointmentForm.values.patientname}
                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className='py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent'>
                            <label
                                htmlFor="af-payment-billing-contact"
                                className="inline-block text-sm font-medium dark:text-white"
                            >
                               Patient gender
                            </label>
                            <div className="gender">
                                <input
                                    id="af-payment-billing-contact"
                                    type="text"
                                    onChange={appointmentForm.handleChange}
                                    value={appointmentForm.values.gender}
                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="First Name"
                                />
                            </div>

                            </div>
                        </div>
                        <div className='py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent'>
                        <label
                                htmlFor="af-payment-billing-contact"
                                className="inline-block text-sm font-medium dark:text-white"
                            >
                               Patient age 
                            </label>
                            <div className="age">
                                <input
                                    id="af-payment-billing-contact"
                                    type="text"
                                    onChange={appointmentForm.handleChange}
                                    value={appointmentForm.values.age}
                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="age"
                                />
                            </div>
                        </div>

                        <div className=''>
                        <label
                                htmlFor="af-payment-billing-contact"
                                className="inline-block text-sm font-medium dark:text-white"
                            >
                               Description 
                            </label>
                            <div className="desctiption">
                                <input
                                    id="desctiption"
                                    type="textarea"
                                    onChange={appointmentForm.handleChange}
                                    value={appointmentForm.values.date}
                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="message"
                                />
                            </div>

                      
                        </div>
                       
                    </form>
                    <div className="mt-5 flex justify-end gap-x-2">
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
                {/* End Card */}
            </div>
            {/* End Card Section */}
        </>











    )
}

export default Appointment;