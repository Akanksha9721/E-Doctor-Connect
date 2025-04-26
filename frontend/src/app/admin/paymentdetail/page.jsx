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

            <div className='bg-green-50 min-h-screen w-full p-4'>
                <div className='container mx-auto py-5'>
                    <h1 className='font-bold text-2xl md:text-4xl text-center py-5 md:py-10 text-blue-800'>
                        ADMIN PANEL
                    </h1>

                    {/* Responsive table wrapper */}
                    <div className='shadow-2xl rounded-lg overflow-x-auto'>
                        {/* Table with horizontal scroll on small screens */}
                        <div className='min-w-full'>
                            <table className='w-full whitespace-nowrap'>
                                <thead>
                                    <tr className='bg-gray-600 text-white font-bold border-2 border-gray-200'>
                                        <th className='p-2 md:p-3 text-base md:text-2xl'>ID</th>
                                        <th className='p-2 md:p-3 text-base md:text-2xl'>PAYMENT Detail</th>
                                        <th className='p-2 md:p-3 text-base md:text-2xl'>PAYMENT DATE</th>
                                        <th className='p-2 md:p-3 text-base md:text-2xl'>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map((user) => (
                                        <tr key={user._id}
                                            className='border text-center bg-pink-100 font-bold hover:bg-blue-100 transition-colors'>
                                            <td className='p-2 md:p-3 text-sm md:text-xl truncate max-w-[150px]'>
                                                {user._id}
                                            </td>
                                            <td className='p-2 md:p-3 text-sm md:text-xl truncate max-w-[150px]'>
                                                {user.paymentDetail}
                                            </td>
                                            <td className='p-2 md:p-3 text-sm md:text-xl'>
                                                {new Date(user.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className='p-2 md:p-3 text-sm md:text-xl'>
                                                <button
                                                    onClick={() => deleteUser(user._id)}
                                                    className='bg-red-500 py-1 px-3 text-white rounded-full hover:bg-red-600 transition-colors text-sm md:text-base'>
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
            </div>

        </>
    )
}

export default paymentDetail;