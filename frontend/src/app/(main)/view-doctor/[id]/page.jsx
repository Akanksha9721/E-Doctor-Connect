'use client';
import axios, { Axios } from 'axios';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const DesignDetails = () => {

  const router = useRouter();
  const [doctorData, setDoctorData] = useState(null);
  const { id } = useParams();

  const fetchDoctorData = async () => {
    const res = await axios.get('http://localhost:5000/doctor/getbyid/' + id)
    console.log(res.data);
    setDoctorData(res.data);
  }

  useEffect(() => {
    fetchDoctorData();
  }, []);

  const submitForm = (values) => {
    console.log(values);

    axios.put('http://localhost:5000/doctor/browse/' + id, values)
      .then((result) => {
        toast.success('User Updated successfully');
        router.back();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to update user');

      })
  }


  const getDoctorData = async () => {
    const res = await Axios.get('https://localhost:5000/doctor/getbyid/' + id);
    console.log(res.data);
    setDoctorData(res.data);

  }

  if (doctorData === null) {
    return <h1 className='text-3xl font-bold text-center mt-10'>Loading...</h1>
  }

  return (
    <>
      <>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:items-center gap-12">
            <img
              className="rounded-xl w-full"
              src={doctorData. avatar}
              alt="Features Image"
            />
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">

                    {doctorData.name}
                  </h2>
                  <p className="text-gray-500 dark:text-neutral-500">

                  </p>
                </div>
                {/* End Title */}
                <p>{doctorData.name}</p>
                <p className='font-bold'>₹ {doctorData.fees}</p>
                <p className='mt-5'>{doctorData. qualification}</p>
                <a className='py-1 px-3 text-black rounded-full' target='_blank'></a>
                <p>{doctorData.specilization}</p>
                <p>{doctorData. experience}</p>
                <p>{doctorData. fees}</p>
                <p>{doctorData. city}</p>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </>

    </>
  )
}

export default DesignDetails