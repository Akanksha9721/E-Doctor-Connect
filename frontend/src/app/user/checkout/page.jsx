'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function PaymentOnly() {
    const [isProcessing, setIsProcessing] = useState(false)
    const [userData, setUserData] = useState({name : 'john', email: 'john@mail.com'})

    useEffect(() => {
        // Load Razorpay script
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        script.async = true
        script.onload = () => console.log('Razorpay script loaded')
        script.onerror = () => console.error('Failed to load Razorpay script')
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    useEffect(() => {
        // Fetch user details on mount
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getdetails`, {
            headers: {
                'x-auth-token': localStorage.getItem('user-token'),
            },
        })
            .then((response) => setUserData(response.data))
            .catch((error) => console.error('Error fetching user details:', error))
    }, [])

    const handlePayment = async () => {
        if (!userData) {
            toast.error('User data not available.')
            return
        }

        setIsProcessing(true)
        toast.loading('Processing payment...')

        const { name, email, phone } = userData

        try {
            // Step 1: Create Razorpay order from server
            const { data: order } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payment/create-order`, {
                amount: 10000, // e.g. ₹100.00 in paise
                currency: 'INR',
            })

            // Step 2: Open Razorpay checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: 'E-Doctor Connect',
                description: 'Consultation Payment',
                order_id: order.id,
                handler: async (response) => {
                    try {
                        const verifyResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payment/verify-payment`, {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        })

                        if (verifyResponse.data.success) {
                            toast.dismiss()
                            toast.success('Payment successful!')
                        } else {
                            toast.dismiss()
                            toast.error('Payment verification failed!')
                        }
                    } catch (err) {
                        toast.dismiss()
                        toast.error('Error verifying payment.')
                        console.error('Verification error:', err)
                    }
                },
                prefill: {
                    name,
                    email,
                    contact: phone,
                },
                theme: {
                    color: '#3399cc',
                },
            }

            const razorpay = new window.Razorpay(options)
            razorpay.open()
        } catch (err) {
            toast.dismiss()
            toast.error('Failed to initiate payment.')
            console.error('Payment error:', err)
        } finally {
            setIsProcessing(false)
        }
    }

    return (
        <div className="p-4">
            <button
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                onClick={handlePayment}
                disabled={isProcessing}
            >
                {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
        </div>
    )
}
