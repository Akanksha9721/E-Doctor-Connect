'use client';
import { IconSquareCheck, IconSquareCheckFilled } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Calendar, Clock, ClipboardList, UserCircle2 } from 'lucide-react';

const ISSERVER = typeof window === 'undefined';

const Appointment = () => {
  const [selSlot, setSelSlot] = useState(null);
  const [slotData, setSlotData] = useState([]);
  const [doctorData, setDoctorData] = useState([]);
  const { id } = useParams();
  const token = !ISSERVER && localStorage.getItem('token');

  const AppointmentSchema = Yup.object().shape({
    patientName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    patientGender: Yup.string().required('Required'),
    patientAge: Yup.number().required('Required'),
  });

  const appointmentForm = useFormik({
    initialValues: {
      patientName: '',
      patientGender: '',
      patientAge: '',
      description: '',
    },
    onSubmit: (values) => {
      if (!selSlot) {
        return toast.error('Please select a slot');
      }

      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/appointment/add`, values, {
          headers: {
            'x-auth-token': token,
          },
        })
        .then((result) => {
          toast.success('Appointment booked successfully');
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || 'Some error occurred');
        });
    },
    validationSchema: AppointmentSchema,
  });

  const fetchSlotData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/slot/getbydoctor/` + id
    );
    setSlotData(res.data);
  };

  useEffect(() => {
    fetchSlotData();
  }, []);

  useEffect(() => {
    appointmentForm.setFieldValue('slot', selSlot);
  }, [selSlot]);

  const fetchDoctorData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/doctor/getbyid/` + id
    );
    setDoctorData(res.data);
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            Book Appointment
          </h1>
          <p className="mt-2 text-center text-blue-100">
            Schedule your consultation with our expert doctors
          </p>
        </div>
      </div>

      {/* Doctor Profile Card */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                <img
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                  src={doctorData.avatar || '/images/doctor.png'}
                  alt={`Dr. ${doctorData.name}`}
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-900">
                  Dr. {doctorData.name}
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                  {doctorData.qualification}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                    {doctorData.specialization}
                  </span>
                  <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                    {doctorData.experience} Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Appointment Form */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Patient Information
              </h3>
              <form onSubmit={appointmentForm.handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="patientName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <div className="mt-1 relative">
                      <UserCircle2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        id="patientName"
                        type="text"
                        onChange={appointmentForm.handleChange}
                        value={appointmentForm.values.patientName}
                        className="pl-10 w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    {appointmentForm.touched.patientName &&
                      appointmentForm.errors.patientName && (
                        <p className="mt-1 text-sm text-red-600">
                          {appointmentForm.errors.patientName}
                        </p>
                      )}
                  </div>

                  {/* Gender Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="patientGender"
                          value="male"
                          onChange={appointmentForm.handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Male</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="patientGender"
                          value="female"
                          onChange={appointmentForm.handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Female</span>
                      </label>
                    </div>
                    {appointmentForm.touched.patientGender &&
                      appointmentForm.errors.patientGender && (
                        <p className="mt-1 text-sm text-red-600">
                          {appointmentForm.errors.patientGender}
                        </p>
                      )}
                  </div>

                  {/* Age Field */}
                  <div>
                    <label
                      htmlFor="patientAge"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      id="patientAge"
                      type="number"
                      onChange={appointmentForm.handleChange}
                      value={appointmentForm.values.patientAge}
                      className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your age"
                    />
                    {appointmentForm.touched.patientAge &&
                      appointmentForm.errors.patientAge && (
                        <p className="mt-1 text-sm text-red-600">
                          {appointmentForm.errors.patientAge}
                        </p>
                      )}
                  </div>

                  {/* Description Field */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Reason for Visit
                    </label>
                    <textarea
                      id="description"
                      onChange={appointmentForm.handleChange}
                      value={appointmentForm.values.description}
                      rows={4}
                      className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Briefly describe your symptoms or reason for visit"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Available Slots */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Available Time Slots
              </h3>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Select
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {slotData.map((slot) => (
                      <tr
                        key={slot._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                            {new Date(slot.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-400 mr-2" />
                            {slot.time}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${
                              slot.status === 'available'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {slot.status || 'Available'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <button
                            onClick={() => setSelSlot(slot._id)}
                            className="inline-flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            {selSlot === slot._id ? (
                              <IconSquareCheckFilled className="h-6 w-6 text-blue-600" />
                            ) : (
                              <IconSquareCheck className="h-6 w-6" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {slotData.length === 0 && (
                  <div className="text-center py-12">
                    <Clock className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                      No slots available
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Please check back later for available appointments.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/browse-doctor"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Find Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/user/manage-appointment"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    My Appointments
                  </Link>
                </li>
              </ul>
            </div>

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

export default Appointment;