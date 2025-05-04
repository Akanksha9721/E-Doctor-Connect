'use client';
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Calendar, Clock, ClipboardEdit, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { LoadingSpinner } from '@/components/LoadingSpinner';

const ISSERVER = typeof window === 'undefined';

const ViewAppointment = () => {
  const token = !ISSERVER && localStorage.getItem('token');
  const { id } = useParams();

  const [appointmentData, setAppointmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const fetchAppointmentData = () => {
    setLoading(true);
    setError(null);
    
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/appointment/getbyslot/` + id, {
        headers: {
          'x-auth-token': token,
        },
      })
      .then((result) => {
        setAppointmentData(result.data);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load appointment data. Please try again.');
        toast.error('Error loading appointment data');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAppointmentData();
  }, []);

  const checkReport = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/report/getbyappointment/${appointmentData._id}`
      );
      
      if (res.data === null) {
        const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/report/add`, {
          appointment: appointmentData._id,
        });
        router.push('/doctor/view-report/' + result.data._id);
      } else {
        router.push('/doctor/view-report/' + res.data._id);
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to access report. Please try again.');
    }
  };

  const updateAppointmentStatus = async (status) => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/appointment/update/${appointmentData._id}`,
        { status },
        {
          headers: { 'x-auth-token': token }
        }
      );
      toast.success(`Appointment marked as ${status}`);
      fetchAppointmentData();
    } catch (err) {
      console.error(err);
      toast.error('Failed to update appointment status');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner className="h-8 w-8 text-blue-600" />
          <p className="mt-2 text-sm text-gray-600">Loading appointment details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Data</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchAppointmentData}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!appointmentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Appointment Found</h3>
          <p className="text-gray-600 mb-4">This appointment may have been cancelled or doesn't exist.</p>
          <Link
            href="/doctor/manage-appointment"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Appointments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            Appointment Details
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Status Bar */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                ${appointmentData.status === 'completed' ? 'bg-green-100 text-green-800' : 
                  appointmentData.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                  'bg-yellow-100 text-yellow-800'}`}>
                {appointmentData.status || 'pending'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => updateAppointmentStatus('completed')}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Mark Completed
              </button>
              <button
                onClick={() => updateAppointmentStatus('cancelled')}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Cancel Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            {/* ID Section */}
            <div className="mb-8 pb-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Appointment ID</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{appointmentData._id}</p>
                </div>
                <button 
                  onClick={checkReport}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <ClipboardEdit className="w-4 h-4 mr-2" />
                  Manage Report
                </button>
              </div>
            </div>

            {/* Patient Details */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <p className="text-sm font-medium text-gray-500">Patient Name</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">{appointmentData.patientName}</p>
                </div>

                {/* Age */}
                <div>
                  <p className="text-sm font-medium text-gray-500">Age</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">{appointmentData.patientAge} years</p>
                </div>

                {/* Gender */}
                <div>
                  <p className="text-sm font-medium text-gray-500">Gender</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">{appointmentData.patientGender}</p>
                </div>

                {/* Appointment Date */}
                <div>
                  <p className="text-sm font-medium text-gray-500">Appointment Date</p>
                  <div className="mt-2 flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-lg font-medium text-gray-900">
                      {new Date(appointmentData.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500">Description</p>
                <div className="mt-2 prose prose-blue">
                  <p className="text-gray-700">{appointmentData.description || 'No description provided.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Card */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Appointment Guidelines
            </h2>
            <div className="prose prose-blue max-w-none">
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Please review the patient's medical history before the consultation</li>
                <li>Ensure all necessary medical records are accessible</li>
                <li>Document any prescriptions or recommendations in the report</li>
                <li>Maintain patient confidentiality at all times</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/doctor/manage-slot" className="text-gray-300 hover:text-white transition-colors">
                    Manage Slots
                  </Link>
                </li>
                <li>
                  <Link href="/doctor/manage-appointment" className="text-gray-300 hover:text-white transition-colors">
                    View Appointments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>support@edoctor.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-700">
            <p className="text-center text-gray-300">
              © {new Date().getFullYear()} E-Doctor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ViewAppointment;