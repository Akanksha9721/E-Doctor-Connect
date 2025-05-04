'use client';
import { IconCheckbox } from '@tabler/icons-react';
import axios from 'axios';
import { Formik } from 'formik';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ClipboardList, FileText, TestTube } from 'lucide-react';

const testList = [
  'Blood Test',
  'X-Ray',
  'Ultrasound'
];

const ViewReport = () => {
  const [reportData, setReportData] = useState(null);
  const { id } = useParams();
  const [selTests, setSelTests] = useState([]);

  const fetchReportData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/report/getbyid/${id}`);
    console.log(res.data);
    setReportData(res.data);
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  const formSubmit = (values) => {
    values.suggestedTest = selTests;
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/report/update/${id}`, values)
      .then((result) => {
        toast.success('Report updated successfully');
      }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || 'Some error occurred');
      });
  };

  const handleCheck = (checked, value) => {
    if (checked) {
      setSelTests([...selTests, value]);
    } else {
      setSelTests(selTests.filter(test => test !== value));
    }
    console.log(selTests);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            Medical Report
          </h1>
          <p className="mt-2 text-center text-blue-100">
            View and update patient report details
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {reportData !== null ? (
          <Formik initialValues={reportData} onSubmit={formSubmit}>
            {(reportForm) => (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                  <form onSubmit={reportForm.handleSubmit} className="space-y-8">
                    {/* Prescription Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        <ClipboardList className="w-5 h-5 text-blue-600" />
                        <h2>Prescription</h2>
                      </div>
                      <textarea
                        id="prescription"
                        onChange={reportForm.handleChange}
                        value={reportForm.values.prescription}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        placeholder="Enter prescription details..."
                        rows={4}
                      />
                      {reportForm.touched.prescription && reportForm.errors.prescription && (
                        <p className="text-sm text-red-600">{reportForm.errors.prescription}</p>
                      )}
                    </div>

                    {/* Description Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <h2>Description</h2>
                      </div>
                      <textarea
                        id="description"
                        onChange={reportForm.handleChange}
                        value={reportForm.values.description}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        placeholder="Enter medical description..."
                        rows={4}
                      />
                      {reportForm.touched.description && reportForm.errors.description && (
                        <p className="text-sm text-red-600">{reportForm.errors.description}</p>
                      )}
                    </div>

                    {/* Suggested Tests Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        <TestTube className="w-5 h-5 text-blue-600" />
                        <h2>Suggested Tests</h2>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {testList.map((test) => (
                          <div key={test} className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id={test}
                              onChange={(e) => handleCheck(e.target.checked, test)}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor={test} className="text-gray-700">
                              {test}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                      >
                        Update Report
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        ) : (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg font-medium text-gray-900">Loading report data...</p>
          </div>
        )}
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

export default ViewReport;