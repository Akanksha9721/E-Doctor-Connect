'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ISSERVER = typeof window === 'undefined';
const paymentDetail = () => {

    const [userList, setUserList] = useState([]);
    const token = !ISSERVER && localStorage.getItem('token');

    const fetchUser = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/paydetail/getall`, {
            headers: {
                'x-auth-token': token
            }

        })
            .then((result) => {
                console.table(result.data);
                setUserList(result.data);

            })
            .catch((err) => {
                console.log(err);
            })

    }
    useEffect(() => {
        fetchUser();

    }, [])

    const deleteUser = (id) => {
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/paydetail/delete/` + id)
          .then((result) => {
            toast.success('Payment Deleted Successfully');
            fetchUser();
          })
          .catch((err) => {
            console.log(err);
            toast.error('Failed to delete payment');
          })
    
      }




    return (
        <>
            <div className='bg-green-50 w-screen h-screen  '>
                <div className='   container mx-auto py-10 '>
                    <h1 className='font-bold text-4xl text-center py-10 text-blue-800'>ADMIN PANNEL</h1>
                    <div className='shadow-2xl rounded-lg overflow-hidden'>
                    <table className='w-full '>
                        <thead>
                            <tr className='bg-gray-600 text-white font-bold   border-2 border-gray-200 rounded-t-lg '>
                                <th className='p-3 font-bold  text-2xl'>ID</th>
                                <th className='p-3 font-bold  text-2xl'>PAYMENT Detail</th>
                                <th className='p-3 font-bold  text-2xl'colSpan={2}>PAYMENT DATE</th>
                                <th className='p-3 font-bold  text-2xl'colSpan={2}>ACTION</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((user) => {
                                    return (
                                        <tr key={user._id} className='border text-center  bg-pink-100 font-bold hover:bg-blue-100 '>
                                            <td className='p-3 text-xl'>{user._id}</td>
                                            <td className='p-3 text-xl'>{user.paymentDetail}</td>

                                            <td className='p-3 text-xl'>{new Date(user.createdAt).toDateString()}</td>
                                            <td className='p-3 text-xl' colSpan={2}></td>
                                            <td className='p-3 text-xl'>
                                                <button onClick={() => { deleteUser(user._id) }} className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
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

export default paymentDetail;