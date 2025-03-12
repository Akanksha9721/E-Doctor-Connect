'use client';
import { IconDownload } from '@tabler/icons-react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewAppointment = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  
  const [slotData, setSlotData] = useState([null]);
  const [patientData, setPatientData] = useState([null]);

  const fetchPatientData = () => {
    axios.get('http://localhost:5000/appointment/getbyid/' + id, {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        console.table(result.data);
        setPatientData(result.data);

      })
      .catch((err) => {
        console.log(err);
      })

  }

  const fetchSlot = () => {
    console.log(patientData._id);
    
    axios.get('http://localhost:5000/slot/getbyid/' + patientData._id, {
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
    fetchPatientData();

  }, [])

  if (slotData === null) {
    return <h1 className='text-3xl font-bold text-center mt-10'>Loading...</h1>
  }

  return (
    <>

      <>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <h1 className='text-center font-bold  text-2xl '>USER DASHBOARD</h1>
          <div className="md:grid md:grid-cols-2 md:items-center gap-12">
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
                <p>{slotData._id}</p>
                <p className='font-bold'> Name : {patientData.patientName}</p>
                <p className='font-bold'> Age : {patientData.patientAge}</p>
                <p className='font-bold'> Gender : {patientData.patientGender}</p>
                <p className='font-bold'> </p>
                <p className='font-bold'></p>
                
                <p ></p>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </>

    </>

  )
}

export default viewAppointment;