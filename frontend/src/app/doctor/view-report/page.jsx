'use client';
import { IconCheckbox } from '@tabler/icons-react';
import { useFormik } from 'formik';
import React from 'react'

const ViewReport = () => {


    const reportForm = useFormik({
        initialValues: {
            prescription: '',
            description: '',
            SuggestedTest: ''

        },
    });
    return (
        <>
            {/* Card Section */}
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                {/* Card */}
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200 text-center">
                            Report
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">

                        </p>
                    </div>
                    <form onSubmit={reportForm.handleSubmit}>
                        {/* Grid */}
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                            <div className="sm:col-span-3">
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
                                        id="precription"
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
                            <div className="sm:col-span-9">
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

                                <div className="sm:flex">
                                    <input
                                        id="suggestedTest"
                                        type="checkbox"
                                        onChange={reportForm.handleChange}
                                        value={reportForm.values.suggestedTest}
                                        className=" border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="enter prescription"
                                    />{
                                        (reportForm.touched.suggestedTest && reportForm.errors.suggestedTest) && (
                                            <p className='my-2 text-sm text-red-500'>{report.errors.suggestedTest}</p>
                                        )
                                    }

                                </div>

                            </div>
                            {/* End Col */}

                            <div className="sm:col-span-3">

                            </div>

                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <input
                                        id="suggestedTest"
                                        type="checkbox"
                                        className=" border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="enter prescription"
                                    />
                                </div>
                            </div>




                        </div>
                        {/* End Grid */}
                        <div className="mt-5 flex justify-end gap-x-2">
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
                {/* End Card */}
            </div>
            {/* End Card Section */}
        </>

    )
}

export default ViewReport;