'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
const ISSERVER = typeof window === 'undefined';

const Manageslot = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [slotList, setSlotList] = useState([]);
  const token = !ISSERVER && localStorage.getItem('token');

  const slotForm = useFormik({
    initialValues: {
      time: '',
      date: ''
    },
    onSubmit: (values) => {
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/slot/add`, values, {
        headers: {
          'x-auth-token': token
        }
      })
        .then((result) => {
          toast.success('Add slot successfully');
          fetchSlot();
        }).catch((err) => {
          toast.error(err?.response?.data?.message || 'Some error occurred');
        });
    },
  });

  const fetchSlot = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/slot/getdoctorslots`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        setSlotList(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSlot();
  }, []);

  const deleteSlot = (id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/slot/delete/` + id)
      .then((result) => {
        toast.success('Slot Deleted Successfully');
        fetchSlot();
      })
      .catch((err) => {
        toast.error('Failed to delete slot');
      });
  };

  const fetchDoctorData = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getdoctor`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        setDoctorData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);

  if (doctorData === null)
    return <h1>Loading...</h1>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add Slot Section */}
      <div className="py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              Add New Appointment Slot
            </h2>
            
            <form onSubmit={slotForm.handleSubmit} className="space-y-6 max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    onChange={slotForm.handleChange}
                    value={slotForm.values.time}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    onChange={slotForm.handleChange}
                    value={slotForm.values.date}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Add Slot
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Manage Slots Section */}
      <div className="py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Manage Appointment Slots
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {slotList.map((slot) => (
                      <tr key={slot._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {slot._id.substring(0, 8)}...
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {slot.name || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {slot.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {new Date(slot.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold
                            ${slot.status === 'available' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'}`}>
                            {slot.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-3">
                          <button
                            onClick={() => deleteSlot(slot._id)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                          >
                            Delete
                          </button>
                          <Link
                            href={'/doctor/updateslot/' + slot._id}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                          >
                            Update
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {slotList.length === 0 && (
                  <div className="text-center py-12">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No slots available</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by creating a new slot.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manageslot;