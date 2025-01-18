'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewAppointment = () => {
  const token = localStorage.getItem('token');
  const { id } = useParams();

  const [slotData, setSlotData] = useState([null]);


  const fetchSlot = () => {
    axios.get('http://localhost:5000/appointment/getbyslot/' + id, {
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

  }, [])

  //const getSlotData = async () => {
  //const res = await axios.get('https://localhost:5000/doctor/getbyid/' + id);
  //  console.log(res.data);
  //    setSlotData(res.data);

  //     }

  if (slotData === null) {
    return <h1 className='text-3xl font-bold text-center mt-10'>Loading...</h1>
  }


  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center gap-12">
          <img
            className="rounded-xl w-full"
            src={slotData.name}
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
              <p className='font-bold'> {slotData.time}</p>
              <p className='mt-5'>{slotData.date}</p>

              <p>{ }</p>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </>

  )
}

export default viewAppointment;