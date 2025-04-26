'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const ISSERVER = typeof window === 'undefined'; 

const ManageDoctor = () => {
    const[doctorList,setDoctorList] =useState([]);
    const token =  !ISSERVER && localStorage.getItem('token');


    const fetchDoctor= () => {
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
       <div className=' bg-green-50 h-auto h-screen'>
        <div className='container mx-auto py-10'>
          <h1 className='text-center text-4xl font-bold py-10 text-blue-800' >Manage Doctors</h1>
          <div className='shadow-2xl rounded-lg overflow-hidden '>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-600 text-white font-bold border-2 border-gray-200 rounded-t-lg '>
                <th className='p-3 text-2xl'colSpan={1} >ID</th>
                <th className='p-3 text-2xl' colSpan={1}>NAME</th>
                <th className='p-3 text-2xl'colSpan={1} >QUALIFICATION</th>
                <th className='p-3 text-2xl'colSpan={1} >CONTACT</th>
                <th className='p-3 text-2xl'colSpan={1} >FEES</th>
                <th className='p-3 text-2xl'colSpan={1} >CITY</th>
                <th className='p-3 text-2xl' colSpan={1}>SPECILIZATION</th>
                <th className='p-3 text-2xl' colSpan={1}>DATE</th>
                <th className='p-3 text-2xl' colSpan={1}>ACTION</th>
                
               
                
                

              </tr>

            </thead>
            <tbody>
              {
                doctorList.map((doctor) => {
                  return (
                    <tr key={doctor._id} className='border  border-2 border-gray-200 text-center  font-bold  bg-pink-100 hover:bg-blue-200'>
                      <td className='p-3 text-xl' >{doctor._id}</td>
                      <td className='p-3 text-xl' >{doctor.name}</td>
                      <td className='p-3 text-xl' >{doctor.qualification}</td>
                      <td className='p-3 text-xl' >{doctor.contact}</td>
                      <td className='p-3 text-xl' >{doctor.fees}</td>
                      <td className='p-3 text-xl' >{doctor.city}</td>
                      <td className='p-3 text-xl' >{doctor.specilization}</td>
                      <td className='p-3 text-xl' >{new Date(doctor.createdAt).toDateString()}</td>
                      


                     

                      <td className='p-3'>
                        <button onClick={() => { deleteDoctor(doctor._id) }} className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
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

export default ManageDoctor