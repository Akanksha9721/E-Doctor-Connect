
'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCartContext from '@/context/CartContext'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


const CheckoutSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    paymentMethod: Yup.string().required('Please select a payment method'),
    cardNumber: Yup.string().when('paymentMethod', {
        is: 'card',
        then: (schema) => schema.required('Card number is required').matches(/^\d{16}$/, 'Card number must be 16 digits'),
    }),
    expiry: Yup.string().when('paymentMethod', {
        is: 'card',
        then: (schema) => schema.required('Expiry date is required').matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'MM/YY format'),
    }),
    cvv: Yup.string().when('paymentMethod', {
        is: 'card',
        then: (schema) => schema.required('CVV is required').matches(/^\d{3}$/, 'CVV must be 3 digits'),
    }),
})
{
    values.paymentMethod === 'card' && (
        <>
            <div>
                <label className='font-bold p-1'>Card Number</label><br />
                <Field name="cardNumber" className="w-full p-3 border-2 border-black rounded-lg" />
                <ErrorMessage name="cardNumber" component="div" style={{ color: 'red' }} />
            </div>
            <div>
                <label className='font-bold p-1'>Expiry</label><br />
                <Field name="expiry" className="w-full p-3 border-2 border-black rounded-lg" />
                <ErrorMessage name="expiry" component="div" style={{ color: 'red' }} />
            </div>
            <div>
                <label className='font-bold p-1'>CVV</label><br />
                <Field name="cvv" className="w-full p-3 border-2 border-black rounded-lg" />
                <ErrorMessage name="cvv" component="div" style={{ color: 'red' }} />
            </div>
        </>
    )
}

export default function CheckoutPage() {
    const { cartItems, calculateTotalAmount, clearCart } = useCartContext();
    const [isProcessing, setIsProcessing] = useState(false);
    const [userData, setUserData] = useState(null);
    const [paymentstatus, setpaymentstatus] = useState('');
    const router = useRouter();
    const [orderId, setOrderId] = useState(''); // State to store the generated order ID

    const subtotal = calculateTotalAmount();
    const shipping = subtotal * 0.05;
    const tax = subtotal * 0.1;
    const totalAmount = (subtotal + shipping + tax).toFixed(2);



    const generateOrderId = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/generate-order-id`);
            if (response.data && response.data.orderId) {
                setOrderId(response.data.orderId); // Set the generated order ID
            } else {
                throw new Error('Order ID not returned from the server');
            }
        } catch (error) {
            console.error('Error generating order ID:', error);
            toast.error('Failed to generate order ID!');
        }
    };
    useEffect(() => {
        generateOrderId(); // Generate order ID when the component mounts
    }, []);

    const getUserDetails = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getdetails`, {
            headers: {
                'x-auth-token': localStorage.getItem('user-token'),
            },
        })
            .then((response) => {
                console.log('User details:', response.data);
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user details:', error);
            });
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => console.log('Razorpay script loaded');
        script.onerror = () => console.error('Failed to load Razorpay script');
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePayment = async () => {
        setIsProcessing(true);
        toast.loading('Processing payment...');

        const { name, email, phone } = userData || {};

        try {
            // Step 1: Create an order on the server
            const { data: order } = await axios.post('http://localhost:5000/payment/create-order', {
                amount: calculateTotalAmount() * 100, // Convert to paise
                currency: 'INR',
            });

            // Step 2: Open Razorpay payment gateway
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
                amount: order.amount,
                currency: order.currency,
                name: 'E-Doctor Connect',
                description: 'Consultation Payment',
                order_id: order.id,
                handler: async (response) => {
                    console.log('Payment response:', response);

                    // Step 3: Verify payment on the server
                    const verifyResponse = await axios.post('http://localhost:5000/payment/verify-payment', {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    });

                    if (verifyResponse.data.success) {
                        toast.success('Payment successful!');
                        setpaymentstatus('success');
                        clearCart();
                        router.replace('/user/thankyou');
                    } else {
                        toast.error('Payment verification failed!');
                        setpaymentstatus('failed');
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
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Error during payment:', error);
            toast.error('Failed to initiate payment.');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleSubmit = async (values) => {
        const order = {
            shippingAddress: `${values.fullName}, ${values.address}, ${values.city}, ${values.postalCode}, ${values.country}`,
            paymentMethod: values.paymentMethod,
            cardDetails:
                values.paymentMethod === 'card'
                    ? {
                        cardNumber: values.cardNumber,
                        expiry: values.expiry,
                        cvv: values.cvv,
                    }
                    : null,
            items: cartItems,
            status: paymentstatus,
        };

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/add`, order, {
                headers: {
                    'x-auth-token': localStorage.getItem('user-token'),
                },
            });
            console.log('Order placed:', response.data);
            toast.success('Order placed successfully!');
            clearCart();
            router.replace('/user/thankyou');
        } catch (error) {
            console.error('Order error:', error);
            toast.error('Error placing order. Please try again.');
        }
    };
}