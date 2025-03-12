'use client';
import { IconSquareCheck, IconSquareCheckFilled } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const Appointment = () => {

  const [selSlot, setSelSlot] = useState(null);
  const [slotData, setSlotData] = useState([]);
  const [doctorData, setDoctorData] = useState([]);
  const { id } = useParams();
  // console.log(id);
  const token = localStorage.getItem('token');

  //validation code...
  const AppointmentSchema = Yup.object().shape({
    patientName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    patientGender: Yup.string().required('Required'),
    patientAge: Yup.number().required('Required')
  });

  const appointmentForm = useFormik({
    initialValues: {
      patientName: '',
      patientGender: '',
      patientAge: '',
      description: ''
    },
    onSubmit: (values) => {
      if (!selSlot) {
        return toast.error('Please select a slot')
      }

      axios.post('http://localhost:5000/appointment/add', values,
        {
          headers: {
            'x-auth-token': token
          }

        })
        .then((result) => {
          toast.success('User added successfully');
          //router.push('/login');
          //fetchAppointment();
          // setSelectdata;
        }).catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || 'Some error occured');

        });
    },
    validationSchema: AppointmentSchema
  });

  // console.log(appointmentForm.errors);

  const fetchSlotData = async () => {
    const res = await axios.get('http://localhost:5000/slot/getbydoctor/' + id)
    console.log(res.data);
    setSlotData(res.data);
  }

  useEffect(() => {
    fetchSlotData();
  }, []);

  useEffect(() => {
    appointmentForm.setFieldValue('slot', selSlot);
  }, [selSlot])

  const fetchDoctorData = async () => {
    const res = await axios.get('http://localhost:5000/doctor/getbyid/' + id)
    console.log(res.data);
    setDoctorData(res.data);
  }

  useEffect(() => {
    fetchDoctorData();
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
      <>
        <h1 className='text-center font-bold  text-2xl '>USER DASHBORD</h1>
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
        {/* End Card */}
      </>




      <div className=''>
        <div className='container mx-auto py-10'>
          <h1 className='text-center text-2xl font-bold'></h1>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-800 text-white font-bold'>
                <th className='p-3'>ID</th>
                <th className='p-3'>Slot Date</th>
                <th className='p-3'>TIme</th>
                <th className='p-3'>Action</th>
              </tr>

            </thead>
            <tbody>
              {
                slotData.map((slot) => {
                  return (
                    <tr key={slot._id} className=' border text-center'>
                      <td className='p-3'>{slot._id}</td>
                      <td className='p-3'>{new Date(slot.createdAt).toDateString()}</td>
                      <td className='p-3'>{slot.time}</td>
                      <td className='p-3' colSpan={2}>
                        <button onClick={() => { setSelSlot(slot._id) }}
                          className='flex items-center h-full my-auto mx-auto'
                        // className={`${selSlot === slot._id ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}  border-2 border-blue-500 py-1 px-3 rounded-full`}
                        >
                          {/* {selSlot === slot._id ? 'Selected' : 'Select Slot'} */}
                          {selSlot === slot._id ? <IconSquareCheckFilled color='blue' /> : <IconSquareCheck color='gray' />}
                        </button>
                      </td>
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
        <div className="  shadow-xl bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
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
            <div className=" py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
              <label
                htmlFor="af-payment-billing-contact"
                className="inline-block text-sm font-medium dark:text-white"
              >
                patient Name
              </label>

              <input
                id="patientName"
                type="text"
                onChange={appointmentForm.handleChange}
                value={appointmentForm.values.patientName}
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="First Name"
              />

              {
                (appointmentForm.touched.patientName && appointmentForm.errors.patientName) && (
                  <p className='my-2 text-sm text-red-500'>{appointmentForm.errors.patientName}</p>
                )
              }

              <div className='py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent'>
                <label
                  htmlFor="af-payment-billing-contact"
                  className="inline-block text-sm font-medium dark:text-white"
                >
                  Patient gender
                </label>
                <div className="gender">
                  <input
                    type="radio"
                    name='patientGender'
                    onChange={appointmentForm.handleChange}
                    value={'male'}

                  /> Male

                  <input
                    type="radio"
                    name="patientGender"
                    onChange={appointmentForm.handleChange}
                    value={'female'}
                  /> Female

                </div>


              </div>

            </div>
            {
              (appointmentForm.touched.patientGender && appointmentForm.errors.patientGender) && (
                <p className='my-2 text-sm text-red-500'>{appointmentForm.errors.patientGender}</p>
              )
            }


            <div className='py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent'>
              <label
                htmlFor="af-payment-billing-contact"
                className="inline-block text-sm font-medium dark:text-white"
              >
                Patient age
              </label>
              <div className="age">
                <input
                  id="patientAge"
                  type="number"
                  onChange={appointmentForm.handleChange}
                  value={appointmentForm.values.patientAge}
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="age"
                />
                {
                  (appointmentForm.touched.patientAge && appointmentForm.errors.patientAge) && (
                    <p className='my-2 text-sm text-red-500'>{appointmentForm.errors.patientAge}</p>
                  )
                }
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
                <textarea
                  id="description"
                  onChange={appointmentForm.handleChange}
                  value={appointmentForm.values.description}
                  className=" border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="message"
                ></textarea>
              </div>



            </div>






            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
      {/* End Card Section */}
    </>











  )
}

export default Appointment;