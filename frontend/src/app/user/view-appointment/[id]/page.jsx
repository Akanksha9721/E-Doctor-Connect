'use client';
import { IconDownload } from '@tabler/icons-react';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewAppointment = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');

  const [slotData, setSlotData] = useState([null]);
  const [appointmentData, setAppointmentData] = useState([null]);

  const fetchAppointmentData = () => {
    axios.get('http://localhost:5000/appointment/getbyid/' + id, {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        console.table(result.data);
        setAppointmentData(result.data);

      })
      .catch((err) => {
        console.log(err);
      })

  }

  const fetchSlot = () => {
    console.log(appointmentData._id);

    axios.get('http://localhost:5000/slot/getbyid/' + appointmentData._id, {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        console.table(result.data);
        setSlotData(result.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    fetchSlot();
    fetchAppointmentData();

  }, [])

  if (slotData === null) {
    return <h1 className='text-3xl font-bold text-center mt-10'>Loading...</h1>
  }

  return (
    <>

      <>
        <div className="  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjPbDbbExfhBf4WqzlRSC__atI7pL5zDiqw&s')] h-screen bg-cover">
          <div className=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <h1 className='text-center font-bold  text-2xl '>USER DASHBOARD</h1>
            <div className="md:grid md:grid-cols-2 md:items-center gap-12">
              <div className='bg-white-300 h-[500px] w-[400px] text-center py-10  shadow-2xl  rounded-xl hover:bg-blue-200 transition duration-300 '>
                <p>{slotData._id}</p>
                <div className='space-y-9'>
                  <p className='font-bold text-3xl'> Name : {appointmentData.patientName}</p>
                  <p className='font-bold text-3xl'> Age : {appointmentData.patientAge}</p>
                  <p className='font-bold text-3xl'> Gender : {appointmentData.patientGender}</p>
                  <p className='font-bold text-3xl'>Description:{appointmentData.description} </p>
                  <p className='font-bold text-3xl'></p>
                  <Link href={'/user/view-report/' + appointmentData._id} className='bg-blue-500 py-1 px-3 text-white rounded-full  hover:bg-blue-700'>View Report</Link>
                </div>
              </div>
              <img
                className="rounded-xl w-full"
                src={slotData.patientAvatar}

                alt="Features Image"
              />
              {/* End Col */}
              <div className="mt-5 sm:mt-10 lg:mt-0">
                <div className="space-y-6 sm:space-y-8">
                  {/* Title */}
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">

                      {slotData._id}
                    </h2>
                    <p className="text-gray-500 dark:text-neutral-500">

                    </p>
                  </div>
                  {/* End Title */}

                  <p ></p>

                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>

      </>

    </>

  )
}

export default viewAppointment;