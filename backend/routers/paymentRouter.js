const express = require('express');
const Razorpay = require('razorpay');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/create-order', async (req, res) => {
    try {
        const order = await razorpay.orders.create({
            amount: 100 * 100, // Amount in smallest currency unit (e.g., paise for INR)
            currency: 'INR',
            receipt: 'receipt_' + Math.random().toString(36).substring(7),
        });
        res.status(200).json({ orderId: order.id });
    } catch (error) {
        console.error('Error creating order:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error creating order' });
    }
});

module.exports = router;
