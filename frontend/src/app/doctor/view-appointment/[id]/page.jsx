'use client';
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const ISSERVER = typeof window === 'undefined';

const viewAppointment = () => {
  const token = !ISSERVER && localStorage.getItem('token');
  const { id } = useParams();

  const [appointmentData, setAppointmentData] = useState(null);
  const router = useRouter();

  const fetchAppointmentData = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/appointment/getbyslot/` + id, {
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
  useEffect(() => {
    fetchAppointmentData();
  }, [])


  if (appointmentData === null) {
    return <h1 className='text-3xl font-bold text-center mt-10'>Loading...</h1>
  }

  const checkReport = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/report/getbyappointment/${appointmentData._id}`);
    console.log(res.data);
    // return;
    if (res.data === null) {
      axios.post(`/report/add`, {
        appointment: appointmentData._id
      })
        .then((result) => {
          const { _id } = result;
          router.push('/doctor/view-report/' + _id)
        }).catch((err) => {
          console.log(err);
          toast.error('something went wrong');
        });
    } else {
      router.push('/doctor/view-report/' + res.data._id)
    }
  }

  return (
    <>
    <div className="bg-[url('https://thumbs.dreamstime.com/b/doctor-stethoscope-hand-hospital-background-gown-94227568.jpg')] h-screen bg-cover">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-1 md:items-center gap-12">
          <h1 className='text-center font-bold  text-2xl '>DOCTOR DASHBOARD</h1>
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}

              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-xl text-gray-800 dark:text-neutral-200 text-center">
                  {appointmentData._id}
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">

                </p>
              </div>
              {/* End Title */}
              {/* <p>{appointmentData._id}</p> */}
              <div className=' p-4 h-[500px]  w-[1200px] border rounded shadow-2xl space-y-6 text-center py-20  bg-gray-100'>
                <p className='font-bold  text-2xl >' > Name : {appointmentData.patientName}</p>
                <p className='font-bold text-2xl '> Age : {appointmentData.patientAge}</p>
                <p className='font-bold text-2xl >'> Gender : {appointmentData.patientGender}</p>
                <p className='font-bold text-2xl'>Description:{appointmentData.description}</p>
                <button className='bg-yellow-500 py-1 px-3 text-white rounded-full' onClick={checkReport} >Edit Report</button>

                {/* <p ></p> */}
              </div>

            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      </div>
      
    </>

  )
}

export default viewAppointment;