'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const BrowseDoctor = () => {
    const [doctorList, setDoctorList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchDoctor = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getall`)
            .then((result) => {
                setDoctorList(result.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchDoctor();
    }, []);

    const filteredDoctors = doctorList.filter(doctor => 
        (doctor.name?.toLowerCase() || '').includes((searchTerm || '').toLowerCase()) ||
        (doctor.city?.toLowerCase() || '').includes((searchTerm || '').toLowerCase()) ||
        (doctor.specilization?.toLowerCase() || '').includes((searchTerm || '').toLowerCase())
    );

    return (
        <>
            <div className="bg-gray-100 max-w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        Browse Doctors
                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                        Find and connect with qualified healthcare professionals
                    </p>
                </div>

                {/* Search Input */}
                <div className="max-w-xl mx-auto mb-10">
                    <input
                        type="text"
                        placeholder="Search by name, city, or specialization..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDoctors.map((doctor) => (
                        <Link key={doctor._id}
                            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition duration-300 rounded-xl p-5 bg-white"
                            href={'/view-doctor/' + doctor._id}
                        >
                            <div className="aspect-w-16 aspect-h-11">
                                <img
                                    className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                    src={doctor.avatar || '/images/doctor.png'}
                                    alt={`Dr. ${doctor.name}`}
                                    loading="lazy"
                                />
                            </div>
                            <div className="mt-4 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Dr. {doctor.name}
                                </h3>
                                <p className="mt-2 text-gray-600">{doctor.qualification}</p>
                                <p className="mt-2 text-gray-600">{doctor.specilization}</p>
                                <p className="mt-2 text-gray-600">{doctor.city}</p>
                                <p className="mt-auto pt-4 text-lg font-semibold text-blue-600">
                                    ₹{doctor.fees}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredDoctors.length === 0 && (
                    <div className="text-center py-10">
                        <p className="text-gray-500">No doctors found matching your search criteria.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default BrowseDoctor;