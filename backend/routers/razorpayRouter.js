const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const Razorpay = require("razorpay");
const crypto = require("crypto");
const express = require("express");

// Improved error checking
function validateEnvironmentVariables() {
    const missingVars = [];
    
    if (!process.env.RAZORPAY_KEY_ID) missingVars.push('RAZORPAY_KEY_ID');
    if (!process.env.RAZORPAY_KEY_SECRET) missingVars.push('RAZORPAY_KEY_SECRET');
    
    if (missingVars.length > 0) {
        throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
}

let razorpay;

try {
    validateEnvironmentVariables();
    
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        throw new Error('Razorpay API keys are required');
    }

    razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID.trim(),
        key_secret: process.env.RAZORPAY_KEY_SECRET.trim(),
    });

    console.log('Razorpay initialized successfully');
} catch (error) {
    console.error('Razorpay initialization failed:', error.message);
    throw error; // Let the application handle the error
}

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
