const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Configure nodemailer with your email service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Send password reset email
router.post('/send-reset-email', async (req, res) => {
    try {
        const { email, resetToken } = req.body;
        
        // Email template
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset - E-Doctor Connect',
            html: `
                <h1>Password Reset Request</h1>
                <p>You requested a password reset for your E-Doctor Connect account.</p>
                <p>Click the link below to reset your password:</p>
                <a href="${process.env.FRONTEND_URL}/reset-password/${resetToken}">
                    Reset Password
                </a>
                <p>This link will expire in 1 hour.</p>
                <p>If you didn't request this, please ignore this email.</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ 
            success: true, 
            message: 'Password reset email sent successfully' 
        });

    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send reset email',
            error: error.message 
        });
    }
});

// Send appointment confirmation email
router.post('/send-appointment-confirmation', async (req, res) => {
    try {
        const { email, appointmentDetails } = req.body;
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Appointment Confirmation - E-Doctor Connect',
            html: `
                <h1>Appointment Confirmed</h1>
                <p>Your appointment has been successfully scheduled.</p>
                <h2>Details:</h2>
                <ul>
                    <li>Date: ${appointmentDetails.date}</li>
                    <li>Time: ${appointmentDetails.time}</li>
                    <li>Doctor: ${appointmentDetails.doctorName}</li>
                    <li>Location: ${appointmentDetails.location}</li>
                </ul>
                <p>Need to reschedule? Please contact us or visit your dashboard.</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ 
            success: true, 
            message: 'Appointment confirmation email sent' 
        });

    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send confirmation email',
            error: error.message 
        });
    }
});

module.exports = router;