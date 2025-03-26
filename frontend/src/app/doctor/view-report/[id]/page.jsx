'use client';
import { IconCheckbox } from '@tabler/icons-react';
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

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
    }

    useEffect(() => {
        fetchReportData();
    }, [])

    const formSubmit = (values) => {
        values.suggestedTest = selTests;
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/report/update/${id}`, values)
            .then((result) => {
                toast.success('report update successfully');
            }).catch((err) => {
                console.log(err);
                toast.error(err?.response?.data?.message || 'Some error occured');
            });
    };

    const handleCheck = (checked, value) => {
        if (checked) {
            setSelTests([...selTests, value]);
        } else {
            setSelTests(selTests.filter(test => test !== value));
        }
        console.log(selTests);

    }

    return (
        <>
            {/* Card Section */}
            <div className='h-screen w-full max-auto bg-pink-200 '>
                <div className="max-w-4xl px-4 py-20 sm:px-6 lg:px-8 mx-auto  ">
                    {/* Card */}
                    <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800 bg-red-200 ">
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200 text-center">
                                Report
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-neutral-400">

                            </p>
                        </div>
                        {
                            reportData !== null ? (
                                <Formik initialValues={reportData} onSubmit={formSubmit}>
                                    {
                                        (reportForm) => {
                                            return (<form onSubmit={reportForm.handleSubmit}>
                                                {/* Grid */}
                                                <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">

                                                    <div className="sm:col-span-3">

                                                        <lable
                                                            htmlFor="af-account-full-name"
                                                            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"

                                                        >
                                                            Name
                                                        </lable>
                                                        <div className="hs-tooltip inline-block">
                                                            <svg
                                                                className="hs-tooltip-toggle ms-1 inline-block size-3 text-gray-400 dark:text-neutral-600"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                            </svg>
                                                            <span
                                                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                                                                role="tooltip"
                                                            >
                                                                Displayed on public forums, such as Preline
                                                            </span>
                                                        </div>
                                                        <div className="sm:col-span-9">
                                                            <div className="sm:flex">
                                                                <input
                                                                    id="name"
                                                                    type="text"
                                                                    onChange={reportForm.handleChange}
                                                                    value={reportForm.values.name}
                                                                    className=" border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                                    placeholder="enter name"
                                                                />
                                                                {
                                                                    (reportForm.touched.name && reportForm.errors.name) && (
                                                                        <p className='my-2 text-sm text-red-500'>{report.errors.name}</p>
                                                                    )
                                                                }


                                                            </div>
                                                        </div>
                                                        <label
                                                            htmlFor="af-account-full-name"
                                                            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                                        >
                                                            prescription
                                                        </label>
                                                        <div className="hs-tooltip inline-block">
                                                            <svg
                                                                className="hs-tooltip-toggle ms-1 inline-block size-3 text-gray-400 dark:text-neutral-600"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                            </svg>
                                                            <span
                                                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                                                                role="tooltip"
                                                            >
                                                                Displayed on public forums, such as Preline
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="sm:col-span-9">
                                                        <div className="sm:flex">
                                                            <textarea
                                                                id="prescription"
                                                                type="textarea"
                                                                onChange={reportForm.handleChange}
                                                                value={reportForm.values.prescription}
                                                                className=" border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                                placeholder="enter prescription"
                                                            ></textarea>
                                                            {
                                                                (reportForm.touched.prescription && reportForm.errors.prescription) && (
                                                                    <p className='my-2 text-sm text-red-500'>{report.errors.prescription}</p>
                                                                )
                                                            }


                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label
                                                            htmlFor="af-account-full-name"
                                                            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                                        >
                                                            Description
                                                        </label>
                                                        <div className="hs-tooltip inline-block">
                                                            <svg
                                                                className="hs-tooltip-toggle ms-1 inline-block size-3 text-gray-400 dark:text-neutral-600"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                            </svg>
                                                            <span
                                                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                                                                role="tooltip"
                                                            >
                                                                Displayed on public forums, such as Preline
                                                            </span>
                                                        </div>

                                                    </div>
                                                    {/* End Col */}
                                                    <div className="sm:col-span-7">
                                                        <div className="sm:flex">
                                                            <textarea
                                                                id="description"
                                                                type="textarea"
                                                                onChange={reportForm.handleChange}
                                                                value={reportForm.values.description}
                                                                className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                                placeholder="enter Description"
                                                            ></textarea>
                                                            {
                                                                (reportForm.touched.description && reportForm.errors.description) && (
                                                                    <p className='my-2 text-sm text-red-500'>{report.errors.description}</p>
                                                                )
                                                            }

                                                        </div>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="sm:col-span-3">
                                                        <label
                                                            htmlFor="af-account-full-name"
                                                            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                                        >
                                                            SuggestedTest
                                                        </label>

                                                    </div>
                                                    {/* End Col */}
                                                    <div className="sm:col-span-9">

                                                        <div className="sm:flex grid grid-cols-6 gap-20">
                                                            {
                                                                testList.map(
                                                                    test => (
                                                                        <div key={test}>
                                                                            <input onChange={(e) => { handleCheck(e.target.checked, test) }} type="checkbox" id={test} />
                                                                            <label htmlFor={test}>{test}</label>
                                                                        </div>
                                                                    )
                                                                )
                                                            }



                                                        </div>





                                                    </div>
                                                    {/* End Col */}






                                                </div>
                                                {/* End Grid */}
                                                <div className="mt-5 flex items-center justify-center ">

                                                    <button
                                                        type="submit"
                                                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                            )
                                        }
                                    }
                                </Formik>
                            ) : (
                                <p className='text-center my-10 font-bold text-2xl'>Loading..</p>
                            )
                        }

                    </div>
                    {/* End Card */}
                </div>
            </div>
            {/* End Card Section */}
        </>

    )
}

export default ViewReport;