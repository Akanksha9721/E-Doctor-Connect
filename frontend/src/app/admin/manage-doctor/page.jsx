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
       <div className=''>
        <div className='container mx-auto py-10'>
          <h1 className='text-center text-4xl font-bold py-10 text-blue-800' >Manage Doctors</h1>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-800 text-white font-bold'>
                <th className='p-3' >ID</th>
                
                <th className='p-3' >Name</th>
                <th className='p-3' >Qualification</th>
                <th className='p-3' >contact</th>
                <th className='p-3' colSpan={2}>fees</th>
                <th className='p-3' colSpan={2}>city</th>
                <th className='p-3' colSpan={2}>specilition</th>
                <th className='p-3' colSpan={2}>Action</th>
                <th className='p-3' colSpan={2}></th>
                

              </tr>

            </thead>
            <tbody>
              {
                doctorList.map((doctor) => {
                  return (
                    <tr key={doctor._id} className='border text-center  font-bold '>
                      <td className='p-3'>{doctor._id}</td>
                      
                      <td className='p-3'>{doctor.name}</td>
                      <td className='p-3'>{doctor.qualification}</td>
                      <td className='p-3'>{doctor.contact}</td>
                      <td className='p-3'>{doctor.fees}</td>
                      <td className='p-3'>{doctor.city}</td>
                      <td className='p-3'>{doctor.specilition}</td>
                      <td className='p-3'>{new Date(doctor.createdAt).toDateString()}</td>
                      <td className='p-3' colSpan={2}></td>


                     

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
   </>
  )
}

export default ManageDoctor