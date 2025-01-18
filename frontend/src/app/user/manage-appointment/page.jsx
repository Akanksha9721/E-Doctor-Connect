'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageAppointment = () => {
const [appointmentList, setAppointmentList] = useState([]);
const token = localStorage.getItem('token');


  const fetchAppointment = () => {
    axios.get('http://localhost:5000/appointment/getbyuser', {
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

  const deleteAppointment = (id) => {
    axios.delete('http://localhost:5000/appointment/delete/' + id)
      .then((result) => {
        toast.success('appointment Deleted Successfully');
        fetchAppointment();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete appointment');
      })

  }
    
  return (
    <div className=''>
      <div className='container mx-auto py-10'>
        <h1 className='text-center font-bold  text-2xl'></h1>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-800  text-white font-bold  '>
              <th className='p-3'>ID</th>
              <th className='P-3'>PatientName</th>
              <th  className='p-3'>PatientAge</th>
              <th  className='p-3'>PatienGender</th>
              <th className='p-3'>createdAt</th>
              <th className='p-3 '>Action</th>
              
            </tr>
          </thead>
          <tbody>
          {
                appointmentList.map((appointment) => {
                  return (
                    <tr key={appointment._id} className='border text-center'>
                      <td className='p-3'>{appointment._id}</td>
                      <td className='p-3'>{appointment.patientName}</td>
                      <td className='p-3'>{appointment.patientAge}</td>
                      <td className='p-3'>{appointment.patientGender}</td>
                      <td className='p-3'>{new Date(appointment.createdAt).toDateString()}</td>
                      
                      <td className='p-3'>
                        <button onClick={() => { deleteAppointment(appointment._id) }} className='bg-green-500 py-1 px-3 text-white rounded-full'>Delete</button>
                      </td>
                     
                    

                     
                    </tr>
                  )
                })
              }

                      
          </tbody>

        </table>


      </div>
    </div>

  )
}

export default ManageAppointment;