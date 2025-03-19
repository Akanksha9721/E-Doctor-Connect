'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewReport = () => {
  const [reportData, setReportData] = useState(null);
  const { id } = useParams();

  const fetchReportData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/report/getbyappointment/${id}`);
    console.log(res.data);
    setReportData(res.data);
  }

  useEffect(() => {
    fetchReportData();
  }, [])

  if (reportData === null) {
    return 'Report not found';
  }

  return (
    <>
      <h1 className='text-center font-bold  text-2xl '>Report</h1>
     
      {/* List */}
      <div className='bg-yellow-100  w-[800px] h-[250px] text-center  px-4 py-10 mx-auto'>
      <div className='max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto'>


        <div className="space-y-3 center">
          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="   text-centertext-2xl block text-sm text-gray-500 dark:text-neutral-500">
                name:
              </span>
            </dt>
            <dd>
              <ul>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">

                  {reportData.name}
                </li>

              </ul>
            </dd>
          </dl>
          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm  text-gray-500  dark:text-neutral-500">
                prescription:
              </span>
            </dt>
            <dd>
              <ul>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">

                  {reportData.prescription}
                </li>

              </ul>
            </dd>
          </dl>
          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                Description:
              </span>
            </dt>
            <dd>
              <ul>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">

                  {reportData.description}
                </li>


              </ul>
            </dd>
          </dl>
          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                SuggestedTest
              </span>
            </dt>
            <dd>
              <ul>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">

                  {reportData.suggestedTest}
                </li>


              </ul>
            </dd>
          </dl>
       
          <dl className="flex flex-col sm:flex-row gap-1">


          </dl>
        </div>
      </div>
      </div>
      {/* End List */}
    </>

  )
}

export default viewReport;