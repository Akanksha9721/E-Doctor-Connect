require('dotenv').config();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const express = require("express");

// Check if environment variables are set
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env file');
}

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// console.log(process.env.RAZORPAY_KEY_ID,process.env.RAZORPAY_SECRET);

console.log('Environment Variables:', {
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID ? 'Set' : 'Not Set',
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET ? 'Set' : 'Not Set'
});

const router = express.Router();

router.post("/create-order", async (req, res) => {

    const { amount, currency } = req.body;

    try {
        const options = {
            amount: amount, // Amount in paise
            currency: currency,
            receipt: `receipt_${Math.random()}`,
        };

        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Failed to create order" });
    }
});

router.post("/verify-payment", async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const generated_signature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

    if (generated_signature === razorpay_signature) {
        console.log("Payment verified successfully");

        res.json({ success: true });
    } else {
        res.status(400).json({ error: "Payment verification failed" });
    }
});

module.exports = router;
