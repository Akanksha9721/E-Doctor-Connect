'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ManageAppointment = () => {

  const [appointmentList, setAppointmentList] = useState([]);
  const token = localStorage.getItem('token');

  const fetchAppointment = () => {
    axios.get('http://localhost:5000/slot/getbydoctor', {
      headers: {
        'x-auth-token': token
      }

    })
      .then((result) => {
        console.table(result.data);
        setAppointmentList(result.data);

      })
      .catch((err) => {
        console.log(err);
      })

  }
  useEffect(() => {
    fetchAppointment();
  })
  const deleteslot = (id) => {
    axios.delete('http://localhost:5000/slot/delete/' + id)
      .then((result) => {
        toast.success('slot Deleted Successfully');
        fetchAppointment();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete slot');
      })

  }

  return (
    <>
      <div>
      <div className=''>
      <div className='container mx-auto py-10'>
        <h1 className='text-center font-bold  text-2xl'></h1>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-800  text-white font-bold text-center '>
              <th className='p-3'>ID</th>
              <th className='p-3' colSpan={2}>createdAt</th>
              <th className='P-3' colSpan={2}>Action</th>
              

            </tr>
          </thead>
          <tbody>
            {
                appointmentList.map((slot) => {
                  return (
                    <tr key={slot._id} className='border text-center '>
                      <td className='p-3'>{slot._id}</td>
                      <td className='p-3'>{new Date(slot.createdAt).toDateString()}</td>
                      <td className='p-3'>
                        <button onClick={() => { deleteslot(slot._id) }} className='bg-red-500 py-1 px-3 text-white rounded-full'>Delate</button>
                      </td>
                      <td className='p-3'>
                        <Link href={'doctor/viewappointment/' + slot._id} className='bg-blue-500 py-1 px-3 text-white rounded-full'>View appointment</Link>
                      </td>
                    

                     
                    </tr>
                  )
                })
            }
            
          </tbody>

        </table>


      </div>
    </div>

      </div>
    </>
  )
}

export default ManageAppointment