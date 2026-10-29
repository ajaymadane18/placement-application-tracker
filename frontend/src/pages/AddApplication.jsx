import { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";

export default function AddApplication() {
  const [application, setApplication] = useState({
    companyName: "",
    jobRole: "",
    jobDescription: "",
    applicationDate: "",
    location: "",
    jobType: "",
    status: "Applied",
    jobLink: "",
  });

  const handleChange = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Application Details:", application);
    alert("Application details captured successfully!");

    setApplication({
      companyName: "",
      jobRole: "",
      jobDescription: "",
      applicationDate: "",
      location: "",
      jobType: "",
      status: "Applied",
      jobLink: "",
    });
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const labelStyle = "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <>
      <DashboardNavbar />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Add Job Application
            </h1>
            <p className="mt-2 text-gray-600">
              Record a new job opportunity and keep your placement journey
              organized.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8"
          >
            <div className="mb-7 border-b border-gray-100 pb-5">
              <h2 className="text-xl font-bold text-gray-900">
                Application Details
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Fill in the details of the job you applied for.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Company Name */}
              <div>
                <label className={labelStyle}>Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={application.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Infosys"
                  className={inputStyle}
                  required
                />
              </div>

              {/* Job Role */}
              <div>
                <label className={labelStyle}>Job Role *</label>
                <input
                  type="text"
                  name="jobRole"
                  value={application.jobRole}
                  onChange={handleChange}
                  placeholder="e.g. Java Developer"
                  className={inputStyle}
                  required
                />
              </div>

              {/* Application Date */}
              <div>
                <label className={labelStyle}>Application Date *</label>
                <input
                  type="date"
                  name="applicationDate"
                  value={application.applicationDate}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label className={labelStyle}>Job Location</label>
                <input
                  type="text"
                  name="location"
                  value={application.location}
                  onChange={handleChange}
                  placeholder="e.g. Pune"
                  className={inputStyle}
                />
              </div>

              {/* Job Type */}
              <div>
                <label className={labelStyle}>Job Type *</label>
                <select
                  name="jobType"
                  value={application.jobType}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                >
                  <option value="">Select job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className={labelStyle}>Application Status *</label>
                <select
                  name="status"
                  value={application.status}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview Scheduled">
                    Interview Scheduled
                  </option>
                  <option value="Selected">Selected</option>
                  <option value="Rejected">Rejected</option>
                  <option value="On Hold">On Hold</option>
                </select>
              </div>

              {/* Job Link */}
              <div className="sm:col-span-2">
                <label className={labelStyle}>Job Application Link</label>
                <input
                  type="url"
                  name="jobLink"
                  value={application.jobLink}
                  onChange={handleChange}
                  placeholder="https://company.com/careers/job"
                  className={inputStyle}
                />
              </div>

              {/* Job Description */}
              <div className="sm:col-span-2">
                <label className={labelStyle}>Job Description</label>
                <textarea
                  name="jobDescription"
                  value={application.jobDescription}
                  onChange={handleChange}
                  placeholder="Enter job responsibilities, required skills, salary, or other important details..."
                  rows="5"
                  className={inputStyle + " resize-y"}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col-reverse justify-end gap-3 border-t border-gray-100 pt-6 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  setApplication({
                    companyName: "",
                    jobRole: "",
                    jobDescription: "",
                    applicationDate: "",
                    location: "",
                    jobType: "",
                    status: "Applied",
                    jobLink: "",
                  })
                }
                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Clear Form
              </button>

              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
              >
                Save Application
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}