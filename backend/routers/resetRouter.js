const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const Doctor = require('../models/doctorModel');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Store reset tokens with expiration
const resetTokenStore = new Map();

// Clean up expired tokens periodically
setInterval(() => {
    const now = Date.now();
    for (const [key, data] of resetTokenStore.entries()) {
        if (data.expiresAt < now) {
            resetTokenStore.delete(key);
        }
    }
}, 5 * 60 * 1000); // Clean up every 5 minutes

// Generic function to send reset email
const sendResetEmail = async (email, resetToken, userType) => {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&email=${email}&type=${userType}`;
    return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset Request - E-Doctor Connect',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #2563eb; text-align: center;">Password Reset Request</h1>
                <p>You requested a password reset for your E-Doctor Connect ${userType} account. Click the button below to reset your password:</p>
                <div style="text-align: center; padding: 20px;">
                    <a href="${resetUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Reset Password</a>
                </div>
                <p style="color: #6b7280;">This link will expire in 1 hour.</p>
                <p style="color: #6b7280;">If you didn't request this password reset, please ignore this email.</p>
            </div>
        `
    });
};

// Request password reset for user or doctor
router.post('/forgot-password', async (req, res) => {
    try {
        const { email, userType } = req.body;
        const Model = userType === 'doctor' ? Doctor : User;
        const account = await Model.findOne({ email });
        
        if (!account) {
            return res.status(404).json({
                success: false,
                message: 'Account not found'
            });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        const expiresAt = Date.now() + 60 * 60 * 1000; // 1 hour expiration

        resetTokenStore.set(`${email}-${userType}`, {
            resetToken,
            expiresAt
        });

        await sendResetEmail(email, resetToken, userType);

        res.status(200).json({
            success: true,
            message: 'Password reset link sent successfully'
        });

    } catch (error) {
        console.error('Password reset request error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process password reset request',
            error: error.message
        });
    }
});

// Reset password with token
router.post('/reset-password', async (req, res) => {
    try {
        const { email, token, newPassword, userType } = req.body;
        const storedData = resetTokenStore.get(`${email}-${userType}`);
        
        if (!storedData) {
            return res.status(400).json({
                success: false,
                message: 'Reset token not found or expired'
            });
        }

        const { resetToken, expiresAt } = storedData;

        if (Date.now() > expiresAt) {
            resetTokenStore.delete(`${email}-${userType}`);
            return res.status(400).json({
                success: false,
                message: 'Reset token has expired'
            });
        }

        if (token !== resetToken) {
            return res.status(400).json({
                success: false,
                message: 'Invalid reset token'
            });
        }

        const Model = userType === 'doctor' ? Doctor : User;
        const account = await Model.findOne({ email });
        
        if (!account) {
            return res.status(404).json({
                success: false,
                message: 'Account not found'
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        account.password = hashedPassword;
        await account.save();

        resetTokenStore.delete(`${email}-${userType}`);

        res.status(200).json({
            success: true,
            message: 'Password reset successful'
        });

    } catch (error) {
        console.error('Password reset error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to reset password',
            error: error.message
        });
    }
});

module.exports = router;