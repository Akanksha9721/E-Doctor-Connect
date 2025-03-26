'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const BrowseDoctor = () => {
    const [doctorList, setDoctorList] = useState([]);

    const fetchDoctor = () => {
        axios.get('http://localhost:5000/doctor/getall')
            .then((result) => {
                console.table(result.data);
                setDoctorList(result.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
      fetchDoctor();
    }, [])
    
    return (
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        Doctors
                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                        show all doctor
                    </p>
                </div>
                {/* End Title */}
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card */}
                    {
                        doctorList.map((doctor) => {
                            return <Link    key={doctor._id}
                                className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
                                href={'/view-doctor/' + doctor._id}
                            >
                                <div className="aspect-w-16 aspect-h-11">
                                    <img
                                        className="w-full object-cover rounded-xl group-hover:scale-110"
                                         src={doctor.avatar}
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="my-6">
                                    <h3 className=" translate-y-full group-hover:translate-y-0 text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                                      {doctor.name} 
                                    </h3>
                                    <p className=" translate-y-full group-hover:translate-y-0 mt-5 text-gray-600 dark:text-neutral-400">
                                       {doctor.fees}
                                    </p>
                                    <p className=" translate-y-full group-hover:translate-y-0 mt-5 text-gray-600 dark:text-neutral-400">
                                        {doctor.qualification}
                                    </p>
                                </div>
                                <div className="mt-auto flex items-center gap-x-3">
                                    
                                    <div>
                                        <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                                           {doctor.uploadBy} 
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        })
                    } 
                    {/* End Card */}
                </div>
                {/* End Grid */}
                {/* Card */}
                <div className="mt-12 text-center">
                    <a
                        className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                    >
                        Read more
                        <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                </div>
                {/* End Card */}
            </div>


        </>
    )
}

export default BrowseDoctor;