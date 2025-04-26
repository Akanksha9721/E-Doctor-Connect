'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const ISSERVER = typeof window === 'undefined';

const ManageDoctor = () => {
  const [doctorList, setDoctorList] = useState([]);
  const token = !ISSERVER && localStorage.getItem('token');


  const fetchDoctor = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getall`, {
      headers: {
        'x-auth-token': token
      }

    })
      .then((result) => {
        console.table(result.data);
        setDoctorList(result.data);

      })
      .catch((err) => {
        console.log(err);
      })

  }
  useEffect(() => {
    fetchDoctor();

  }, [])


  const deleteDoctor = (id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/doctor/delete/` + id)
      .then((result) => {
        toast.success('Doctor Deleted Successfully');
        fetchDoctor();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete doctor');
      })

  }
  return (
    <>

      <div className='bg-green-50 min-h-screen w-full p-4'>
        <div className='container mx-auto py-5 px-4'>
          <h1 className='text-center text-2xl md:text-4xl font-bold py-5 md:py-10 text-blue-800'>
            Manage Doctors
          </h1>

          {/* Responsive table wrapper */}
          <div className='shadow-2xl rounded-lg overflow-x-auto'>
            <table className='w-full whitespace-nowrap'>
              <thead>
                <tr className='bg-gray-600 text-white font-bold border-2 border-gray-200'>
                  <th className='p-2 md:p-3 text-sm md:text-xl'>ID</th>
                  <th className='p-2 md:p-3 text-sm md:text-xl'>NAME</th>
                  <th className='p-2 md:p-3 text-sm md:text-xl'>QUALIFICATION</th>
                  <th className='p-2 md:p-3 text-sm md:text-xl'>CONTACT</th>
                  <th className='p-2 md:p-3 text-sm md:text-xl'>FEES</th>
                  <th className='p-2 md:p-3 text-sm md:text-xl'>CITY</th>
                  <th className='p-2 md:p-3 text-sm md:text-xl'>SPECIALIZATION</th>
                  <th className='p-2 md:p-3 text-sm md:text-xl'>DATE</th>
                  <th className='p-2 md:p-3 text-sm md:text-xl'>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {doctorList.map((doctor) => (
                  <tr
                    key={doctor._id}
                    className='border border-gray-200 text-center font-bold bg-pink-100 hover:bg-blue-200 transition-colors'
                  >
                    <td className='p-2 md:p-3 text-xs md:text-lg truncate max-w-[100px]'>{doctor._id}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.name}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.qualification}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.contact}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.fees}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.city}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.specilization}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{new Date(doctor.createdAt).toLocaleDateString()}</td>
                    <td className='p-2 md:p-3'>
                      <button
                        onClick={() => deleteDoctor(doctor._id)}
                        className='bg-red-500 py-1 px-2 md:px-3 text-white text-xs md:text-base rounded-full hover:bg-red-600 transition-colors'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}

export default ManageDoctor