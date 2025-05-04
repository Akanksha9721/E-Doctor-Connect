'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ISSERVER = typeof window === 'undefined';

const ManageDoctor = () => {
  const [doctorList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const token = !ISSERVER && localStorage.getItem('token');

  const fetchDoctor = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getall`, {
        headers: {
          'x-auth-token': token
        }
      });
      setDoctorList(result.data);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch doctors. Please try again later.');
      toast.error('Failed to fetch doctors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  const deleteDoctor = async (id) => {
    if (!window.confirm('Are you sure you want to delete this doctor?')) {
      return;
    }

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/doctor/delete/${id}`);
      toast.success('Doctor Deleted Successfully');
      fetchDoctor();
    } catch (err) {
      console.log(err);
      toast.error('Failed to delete doctor');
    }
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedDoctors = React.useMemo(() => {
    if (!sortConfig.key) return doctorList;

    return [...doctorList].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [doctorList, sortConfig]);

  const filteredDoctors = sortedDoctors.filter(doctor => 
    (doctor.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (doctor.city?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (doctor.specilization?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
          <button
            onClick={fetchDoctor}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-green-50 min-h-screen w-full p-4'>
      <div className='container mx-auto py-5 px-4'>
        <h1 className='text-center text-2xl md:text-4xl font-bold py-5 md:py-10 text-blue-800'>
          Manage Doctors
        </h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name, city, or specialization..."
            className="w-full p-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='shadow-2xl rounded-lg overflow-x-auto'>
          <table className='w-full whitespace-nowrap'>
            <thead>
              <tr className='bg-gray-600 text-white font-bold border-2 border-gray-200'>
                <th className='p-2 md:p-3 text-sm md:text-xl'>ID</th>
                <th 
                  className='p-2 md:p-3 text-sm md:text-xl cursor-pointer hover:bg-gray-700'
                  onClick={() => handleSort('name')}
                >
                  NAME {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                </th>
                <th className='p-2 md:p-3 text-sm md:text-xl'>QUALIFICATION</th>
                <th className='p-2 md:p-3 text-sm md:text-xl'>CONTACT</th>
                <th 
                  className='p-2 md:p-3 text-sm md:text-xl cursor-pointer hover:bg-gray-700'
                  onClick={() => handleSort('fees')}
                >
                  FEES {sortConfig.key === 'fees' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                </th>
                <th 
                  className='p-2 md:p-3 text-sm md:text-xl cursor-pointer hover:bg-gray-700'
                  onClick={() => handleSort('city')}
                >
                  CITY {sortConfig.key === 'city' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                </th>
                <th 
                  className='p-2 md:p-3 text-sm md:text-xl cursor-pointer hover:bg-gray-700'
                  onClick={() => handleSort('specilization')}
                >
                  SPECIALIZATION {sortConfig.key === 'specilization' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                </th>
                <th className='p-2 md:p-3 text-sm md:text-xl'>DATE</th>
                <th className='p-2 md:p-3 text-sm md:text-xl'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    {searchTerm ? 'No doctors found matching your search' : 'No doctors available'}
                  </td>
                </tr>
              ) : (
                filteredDoctors.map((doctor) => (
                  <tr
                    key={doctor._id}
                    className='border border-gray-200 text-center font-bold bg-pink-100 hover:bg-blue-200 transition-colors'
                  >
                    <td className='p-2 md:p-3 text-xs md:text-lg truncate max-w-[100px]'>{doctor._id}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.name}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.qualification}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.contact}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.fees}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.city}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{doctor.specilization}</td>
                    <td className='p-2 md:p-3 text-xs md:text-lg'>{new Date(doctor.createdAt).toLocaleDateString()}</td>
                    <td className='p-2 md:p-3'>
                      <button
                        onClick={() => deleteDoctor(doctor._id)}
                        className='bg-red-500 py-1 px-2 md:px-3 text-white text-xs md:text-base rounded-full hover:bg-red-600 transition-colors'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctor;