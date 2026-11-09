
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function AddApplication() {
  const [application,setApplication]=useState({})

  const handleform=(e)=>{
      e.preventDefault()
      postApplication(application)
  }

  const postApplication=(application)=>{
    const token=localStorage.getItem("token")

    axios.post("http://localhost:8080/addApplication",application,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(
      (response)=>{
        alert("application submited")
      },(error)=>{
        console.log("somthing went wrong");
      }
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white shadow-lg shadow-blue-200">
            <span>+</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Add New Application
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Keep track of your job applications in one place.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-10">

          <div className="mb-7 border-b border-slate-100 pb-5">
            <h2 className="text-xl font-semibold text-slate-800">
              Application Details
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Enter the details of the job you applied for.
            </p>
          </div>

          <form onSubmit={handleform} className="space-y-6">

            {/* Company and Job Role */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. TCS"
                  name="companyName"
                  onChange={(e)=>{
                    setApplication({...application,companyName:e.target.value})
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Job Role
                </label>
                <input
                  type="text"
                  placeholder="e.g. Java Developer"
                  name="jobRole"
                  onChange={(e)=>{
                    setApplication({
                      ...application,jobRole:e.target.value
                    })
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Date and Location */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Application Date
                </label>
                <input
                  type="text"
                  placeholder="Enter date"
                  name="date"
                  onChange={(e)=>{
                    setApplication({
                      ...application,date:e.target.value
                    })
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pune"
                  name="location"
                  onChange={(e)=>{
                    setApplication({
                      ...application,location:e.target.value
                    })
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Job Type and Status */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Job Type
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full Time"
                  name="jobType"
                  onChange={(e)=>{
                    setApplication({
                      ...application,jobType:e.target.value
                    })
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Application Status
                </label>
                <input
                  type="text"
                  placeholder="e.g. Applied"
                  name="applicationStatus"
                  onChange={(e)=>{
                    setApplication({
                      ...application,applicationStatus:e.target.value
                    })
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Application Link */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Application Link
              </label>
              <input
                type="text"
                placeholder="https://company.com/careers"
                name="applicationLink"
                onChange={(e)=>{
                  setApplication({
                    ...application,applicationLink:e.target.value
                  })
                }}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Job Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Job Description
              </label>
              <textarea
                placeholder="Enter job description, required skills, responsibilities..."
                name="jobDescription"
                rows="5"
                onChange={(e)=>{
                  setApplication({
                    ...application,jobDescription:e.target.value
                  })
                }}
                className="w-full resize-y rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Submit Button */}
            <div className="border-t border-slate-100 pt-6">
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:translate-y-0"
              >
                Save Application →
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Your application details will be saved securely.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AddApplication
