const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/userModel');

// Configure nodemailer with email service (reusing existing config)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Store reset tokens with expiration (similar to OTP store)
const resetTokenStore = new Map();

// Clean up expired tokens periodically
setInterval(() => {
    const now = Date.now();
    for (const [email, data] of resetTokenStore.entries()) {
        if (data.expiresAt < now) {
            resetTokenStore.delete(email);
        }
    }
}, 5 * 60 * 1000);

// Request password reset
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const expiresAt = Date.now() + 60 * 60 * 1000; // 1 hour expiration

        // Store token with expiration
        resetTokenStore.set(email, {
            resetToken,
            expiresAt
        });

        // Create reset URL
        const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&email=${email}`;

        // Send reset email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset Request - E-Doctor Connect',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #2563eb; text-align: center;">Password Reset Request</h1>
                    <p>You requested a password reset for your E-Doctor Connect account. Click the button below to reset your password:</p>
                    <div style="text-align: center; padding: 20px;">
                        <a href="${resetUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Reset Password</a>
                    </div>
                    <p style="color: #6b7280;">This link will expire in 1 hour.</p>
                    <p style="color: #6b7280;">If you didn't request this password reset, please ignore this email.</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

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
        const { email, token, newPassword } = req.body;

        // Verify token
        const storedData = resetTokenStore.get(email);
        if (!storedData) {
            return res.status(400).json({
                success: false,
                message: 'Reset token not found or expired'
            });
        }

        const { resetToken, expiresAt } = storedData;

        // Check if token is expired
        if (Date.now() > expiresAt) {
            resetTokenStore.delete(email);
            return res.status(400).json({
                success: false,
                message: 'Reset token has expired'
            });
        }

        // Verify token matches
        if (token !== resetToken) {
            return res.status(400).json({
                success: false,
                message: 'Invalid reset token'
            });
        }

        // Find user and update password
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        // Delete reset token after successful reset
        resetTokenStore.delete(email);

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