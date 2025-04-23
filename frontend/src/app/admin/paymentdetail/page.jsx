'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ISSERVER = typeof window === 'undefined';
const paymentDetail = () => {

    const [paymentList, setPaymentList] = useState([]);
    const token = !ISSERVER && localStorage.getItem('token');

    const fetchPayment = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/payment/getall`, {
            headers: {
                'x-auth-token': token
            }

        })
            .then((result) => {
                console.table(result.data);
                setPaymentList(result.data);

            })
            .catch((err) => {
                console.log(err);
            })

    }
    useEffect(() => {
        fetchPayment();

    }, [])




    return (
        <>
            <div className='bg-green-100 w-screen h-screen  '>
                <div className='   container mx-auto py-10 '>
                    <h1 className='font-bold text-4xl text-center py-10 text-blue-800'>ADMIN PANNEL</h1>
                    <table className='w-full '>
                        <thead>
                            <tr className='bg-gray-800 text-white font-bold '>
                                <th className='p-3'>ID</th>
                                <th className='p-3'>PAYMENT DATE</th>
                                <th className='p-3'>NAME</th>
                                <th className='p-3'>AMOUNT</th>
                                <th className='p-3'>CURRENCTY</th>
                                <th className='p-3'>ACTION</th>
                                <th className='p-3'>ACTION</th>
                                <th className='p-3'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentList.map((payment) => {
                                    return (
                                        <tr key={payment._id} className='border text-center  font-bold '>
                                            <td className='p-3'>{payment._id}</td>

                                            <td className='p-3'>{payment.paymentDetail}</td>

                                            <td className='p-3'>{payment.contact}</td>

                                            <td className='p-3'>{new Date(payment.createdAt).toDateString()}</td>
                                            <td className='p-3' colSpan={2}></td>





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

export default paymentDetail;