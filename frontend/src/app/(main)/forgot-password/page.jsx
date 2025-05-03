'use client';
import { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { LoadingSpinner } from '@/components/LoadingSpinner';




const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email address is required')
    .trim(),
});

const SuccessMessage = () => (
  <div className="text-center">
    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
      <svg
        className="h-6 w-6 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <div className="mt-3 text-center sm:mt-5">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Reset Link Sent Successfully
      </h3>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          Please check your email inbox for the password reset link.
          If you don't see it, please check your spam folder.
        </p>
      </div>
      <div className="mt-5">
        <Link
          href="/login"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 
            transition-colors duration-200"
        >
          Return to Login
        </Link>
      </div>
    </div>
  </div>
);

const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/mail/send-reset-email`,
          values
        );
        setResetSent(true);
        toast.success('Password reset link has been sent to your email');
      } catch (error) {
        const errorMessage = error.response?.data?.message ||
          'Failed to send reset link. Please try again.';
        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
      flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Forgot your password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't worry! Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {resetSent ? (
            <SuccessMessage />
          ) : (
            <form
              className="space-y-6"
              onSubmit={formik.handleSubmit}
              noValidate
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="mt-1 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`appearance-none block w-full px-3 py-2 border 
                      ${formik.touched.email && formik.errors.email
                        ? 'border-red-300 ring-red-500'
                        : 'border-gray-300 focus:ring-indigo-500'
                      } rounded-md shadow-sm placeholder-gray-400 
                      focus:outline-none focus:ring-2 focus:border-transparent 
                      transition-colors duration-200 sm:text-sm`}
                    placeholder="your.email@example.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading || !formik.isValid}
                  className="w-full flex justify-center py-2 px-4 border border-transparent 
                    rounded-md shadow-sm text-sm font-medium text-white 
                    bg-indigo-600 hover:bg-indigo-700 focus:outline-none 
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-colors duration-200"
                >
                  {isLoading ? (
                    <LoadingSpinner className="h-5 w-5" color="text-white" />
                  ) : (
                    'Send Reset Link'
                  )}
                </button>
              </div>

              <div className="text-sm text-center">
                <Link
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500
                    transition-colors duration-200"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;