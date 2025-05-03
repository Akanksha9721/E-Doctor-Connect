const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Store OTPs with expiration timestamps
const otpStore = new Map();

// Configure nodemailer with your email service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Generate OTP and store it
const generateOTP = (email) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes expiration
    
    // Store OTP with expiration
    otpStore.set(email, {
        otp,
        expiresAt
    });
    
    return otp;
};

// Clean up expired OTPs periodically
setInterval(() => {
    const now = Date.now();
    for (const [email, data] of otpStore.entries()) {
        if (data.expiresAt < now) {
            otpStore.delete(email);
        }
    }
}, 5 * 60 * 1000); // Clean up every 5 minutes

// Send email verification OTP
router.post('/send-verification-otp', async (req, res) => {
    try {
        const { email } = req.body;
        const otp = generateOTP(email);
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification - E-Doctor Connect',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #2563eb; text-align: center;">Email Verification</h1>
                    <p>Thank you for registering with E-Doctor Connect. Please use the following OTP to verify your email address:</p>
                    <div style="text-align: center; padding: 20px;">
                        <h2 style="letter-spacing: 5px; color: #1f2937;">${otp}</h2>
                    </div>
                    <p style="color: #6b7280;">This OTP will expire in 10 minutes.</p>
                    <p style="color: #6b7280;">If you didn't request this verification, please ignore this email.</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ 
            success: true, 
            message: 'Verification OTP sent successfully'
            // Remove otp from response in production
        });

    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send verification OTP',
            error: error.message 
        });
    }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;
        
        const storedData = otpStore.get(email);
        
        if (!storedData) {
            return res.status(400).json({
                success: false,
                message: 'OTP not found or expired'
            });
        }

        const { otp: storedOTP, expiresAt } = storedData;
        
        // Check if OTP is expired
        if (Date.now() > expiresAt) {
            otpStore.delete(email);
            return res.status(400).json({
                success: false,
                message: 'OTP has expired'
            });
        }

        // Verify OTP
        if (otp === storedOTP) {
            // Delete OTP after successful verification
            otpStore.delete(email);
            
            return res.status(200).json({
                success: true,
                message: 'Email verified successfully'
            });
        }

        res.status(400).json({
            success: false,
            message: 'Invalid OTP'
        });

    } catch (error) {
        console.error('OTP verification error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to verify OTP',
            error: error.message
        });
    }
});

// ...existing code for password reset and appointment confirmation...

module.exports = router;