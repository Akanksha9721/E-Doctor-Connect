'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
const ISSERVER = typeof window === 'undefined';

const Profile = () => {
  const router = useRouter();
  const [doctorData, setDoctorData] = useState(null);
  const token =  !ISSERVER && localStorage.getItem('token');

  //couldinary image upload code//...
  const uploadImage = (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mypreset');
    formData.append('cloud_name', 'dcozy6hkg');

    axios.post('https://api.cloudinary.com/v1_1/dcozy6hkg/image/upload', formData)
      .then((result) => {
        console.log(result.data);
        // doctorForm.setFieldValue('image', result.data.url);
        submitForm({ 'avatar': result.data.url });
        toast.success('File Uploaded Successfully');
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to upload file');
      });
  }
  //token code//
  const fetchDoctorData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getdoctor`, {
      headers: {
        'x-auth-token': token
      }
    });
    console.log(res.data);
    setDoctorData(res.data);
  }

  useEffect(() => {
    fetchDoctorData();
  }, [])

  const submitForm = (values) => {
    console.log(values);
    console.log(token);

    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/doctor/update`, values, {
      headers: {
        'x-auth-token': token
      }
    })
      //  values
      .then((result) => {
        toast.success('Profile Updated successfully');
        // router.back();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to profile doctor');
      });
  }

  return (
    <>
      <>
        {/* Card Section */}
        <div className="   min-h-screen  bg-[url('https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61811.jpg?semt=ais_hybrid')] bg-cover bg-center   ">
          <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <h1 className='text-center font-bold  text-2xl'>DOCTOR PROFILE</h1>
            {
              doctorData !== null ? (
                <Formik initialValues={doctorData} onSubmit={submitForm}>
                  {

                    (doctorForm) => {
                      return (
                        <form onSubmit={doctorForm.handleSubmit}>
                          {/* Card */}

                          <div className=" bg-transprent  rounded-xl shadow-2xl dark:bg-neutral-900">
                            <div className="relative h-40 rounded-t-xl bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPD9iCdtman5XvT5IzzEFId3TnF9zINg1GQ&s')] bg-no-repeat bg-cover bg-center">

                            </div>
                            <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                              {/* Grid */}
                              <div className="space-y-4 sm:space-y-6">
                                <div>
                                  <label className="sr-only">Product photo</label>
                                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
                                    <img
                                      className="-mt-8 relative z-10 inline-block size-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-neutral-900"
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7HYBrCOpkB1q2Etvl-lzp0zchpOvPn4Q2g&s"
                                      alt="Avatar"
                                    />
                                    <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                                      <label
                                        htmlFor='avatar'
                                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-blue-200 text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                      >
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
                                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                          <polyline points="17 8 12 3 7 8" />
                                          <line x1={12} x2={12} y1={3} y2={15} />
                                        </svg>
                                        Upload logo
                                      </label>
                                      <input className='hidden' id="avatar" type="file" onChange={uploadImage} />

                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <label
                                    htmlFor="af-submit-app-project-name"
                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                                  >
                                    Doctor Name
                                  </label>
                                  <input
                                    id="name"
                                    type="text"
                                    onChange={doctorForm.handleChange}
                                    value={doctorForm.values.name}
                                    className="w-full p-3 border border-gray-500 rounded-lg bg-transparent focus:ring focus:ring-blue-200"
                                    placeholder="Enter "
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label
                                    htmlFor="af-submit-app-project-name"
                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                                  >
                                    Email
                                  </label>
                                  <input
                                    id="email"
                                    type="email"
                                    onChange={doctorForm.handleChange}
                                    value={doctorForm.values.email}
                                    className="w-full p-3 border border-gray-500 rounded-lg  bg-transparent bg-gray-100 cursor-not-allowed"
                                    placeholder="Enter   your email"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label
                                    htmlFor="af-submit-app-project-name"
                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                                  >
                                    Contact
                                  </label>
                                  <input
                                    id="contact"
                                    type="contact"
                                    onChange={doctorForm.handleChange}
                                    value={doctorForm.values.contact}
                                    className="w-full p-3 border border-gray-500 rounded-lg bg-transparent focus:ring focus:ring-blue-200"
                                    placeholder="Enter  your contact "
                                  />
                                </div>


                                <div className="space-y-2">
                                  <label
                                    htmlFor="af-submit-app-project-name"
                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                                  >
                                    Qualification
                                  </label>
                                  <input
                                    id="qualification"
                                    type="text"
                                    onChange={doctorForm.handleChange}
                                    value={doctorForm.values.qualification}
                                    className="w-full p-3 border border-gray-500 rounded-lg bg-transparent focus:ring focus:ring-blue-200"
                                    placeholder="Enter your qualification"
                                  />

                                </div>
                                <div className="space-y-2">
                                  <label
                                    htmlFor="af-submit-app-project-name"
                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                                  >
                                    Specilization
                                  </label>
                                  <input
                                    id="specilization"
                                    type="text"
                                    onChange={doctorForm.handleChange}
                                    value={doctorForm.values.specilization}
                                    className="w-full p-3 border  border-gray-500 rounded-lg bg-transparent focus:ring focus:ring-blue-200"
                                    placeholder="Enter  your specilization"
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor="af-submit-app-project-name"
                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                                  >
                                    Experience
                                  </label>
                                  <input
                                    id="experience"
                                    type="text"
                                    onChange={doctorForm.handleChange}
                                    value={doctorForm.values.experience}
                                    className="w-full p-3 border border-gray-500  rounded-lg bg-transparent focus:ring focus:ring-blue-200"
                                    placeholder="Enter your  experience"
                                  />
                                </div>
                                <div >
                                  <label
                                    htmlFor="af-submit-app-project-name"
                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                                  >
                                    fees
                                  </label>
                                  <input
                                    id="fees"
                                    type="number"
                                    onChange={doctorForm.handleChange}
                                    value={doctorForm.values.fees}
                                    className="w-full p-3 border border-gray-500  rounded-lg bg-transparent focus:ring focus:ring-blue-200"
                                    placeholder="Enter your  experience"
                                  />

                                </div>


                                <div>
                                  <label
                                    htmlFor="af-submit-app-project-name"
                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                                  >
                                    City
                                  </label>
                                  <input
                                    id="city"
                                    type="text"
                                    onChange={doctorForm.handleChange}
                                    value={doctorForm.values.city}
                                    className="w-full p-3 border border-gray-500 rounded-lg bg-transparent focus:ring focus:ring-blue-200"
                                    placeholder="Enter your city"
                                  />

                                </div>
                                <div className="space-y-2">





                                </div>



                              </div>
                              {/* End Grid */}
                              <div className="mt-5 flex justify-center gap-x-2">
                                <button
                                  type="submit"
                                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* End Card */}
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
        </div>
        {/* End Card Section */}
      </>

    </>

  )
}

export default Profile;