
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fun = () => {
    navigate("/addApplication");
  };

  const getApplication = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:8080/getApplication",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setApplications(response.data);
      setError("");

    } catch (error) {
      console.log("Something went wrong:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
      } else {
        setError("Unable to load applications. Please try again.");
      }

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApplication();
  }, []);

  // Dynamic application statistics
  const totalApplications = applications.length;

  const appliedCount = applications.filter(
    app => app.applicationStatus?.toLowerCase() === "applied"
  ).length;

  const interviewCount = applications.filter(
    app => app.applicationStatus?.toLowerCase().includes("interview")
  ).length;

  const selectedCount = applications.filter(
    app => app.applicationStatus?.toLowerCase() === "selected"
  ).length;

  const rejectedCount = applications.filter(
    app => app.applicationStatus?.toLowerCase() === "rejected"
  ).length;

  const getStatusStyle = (status) => {
    const value = status?.toLowerCase();

    if (value === "selected") {
      return "bg-green-100 text-green-700";
    } else if (value === "rejected") {
      return "bg-red-100 text-red-700";
    } else if (value?.includes("interview")) {
      return "bg-purple-100 text-purple-700";
    } else if (value === "applied") {
      return "bg-blue-100 text-blue-700";
    } else {
      return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <main className="px-4 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Welcome Header */}
          <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 p-7 text-white shadow-lg md:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="font-medium text-blue-200">
                  YOUR CAREER WORKSPACE
                </p>

                <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  Welcome to Your Dashboard!
                </h1>

                <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                  Keep your job search organized, manage your applications
                  and track every opportunity in one place. Stay consistent
                  and take one step closer to your career goals.
                </p>

                <button
                  onClick={fun}
                  className="mt-7 rounded-xl bg-white px-6 py-3 font-bold text-blue-800 shadow-md transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  + Add New Application
                </button>
              </div>

              <div className="hidden rounded-2xl border border-white/20 bg-white/10 p-8 text-center md:block">
                <div className="text-5xl">🚀</div>
                <h3 className="mt-4 text-xl font-bold">
                  Keep Moving Forward
                </h3>
                <p className="mt-2 text-sm text-blue-100">
                  Every application is an opportunity.
                </p>
              </div>
            </div>
          </section>

          {/* Application Statistics */}
          <section className="mt-8">
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-slate-900">
                Application Overview
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                A quick overview of your job search progress.
              </p>
            </div>

            {loading ? (
              <p className="py-6 text-slate-500">
                Loading application overview...
              </p>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-slate-500">
                    Total Applications
                  </p>
                  <h3 className="mt-4 text-3xl font-extrabold text-blue-700">
                    {totalApplications}
                  </h3>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-slate-500">Applied</p>
                  <h3 className="mt-4 text-3xl font-extrabold text-blue-600">
                    {appliedCount}
                  </h3>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-slate-500">Interviews</p>
                  <h3 className="mt-4 text-3xl font-extrabold text-purple-600">
                    {interviewCount}
                  </h3>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-slate-500">Selected</p>
                  <h3 className="mt-4 text-3xl font-extrabold text-green-600">
                    {selectedCount}
                  </h3>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-slate-500">Rejected</p>
                  <h3 className="mt-4 text-3xl font-extrabold text-red-600">
                    {rejectedCount}
                  </h3>
                </div>

              </div>
            )}
          </section>

          {/* My Applications */}
          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  My Applications
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  View and manage all your saved job opportunities.
                </p>
              </div>

              <button
                onClick={fun}
                className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                + Add Application
              </button>
            </div>

            {loading ? (
              <div className="py-12 text-center text-slate-500">
                Loading your applications...
              </div>
            ) : error ? (
              <div className="rounded-xl bg-red-50 p-5 text-center text-red-600">
                {error}
              </div>
            ) : applications.length === 0 ? (
              <div className="py-14 text-center">
                <div className="mb-4 text-5xl">📂</div>

                <h3 className="text-xl font-bold text-slate-800">
                  Your Application List Is Empty
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                  Start organizing your job search. Add your first job
                  application and keep all its important details in one place.
                </p>

                <button
                  onClick={fun}
                  className="mt-6 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
                >
                  + Add Your First Application
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1100px] text-left">

                  <thead>
                    <tr className="border-b bg-slate-50 text-sm text-slate-500">
                      <th className="px-4 py-4">Company</th>
                      <th className="px-4 py-4">Job Role</th>
                      <th className="px-4 py-4">Location</th>
                      <th className="px-4 py-4">Applied Date</th>
                      <th className="px-4 py-4">Job Type</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-4 py-4">Application Link</th>
                      <th className="px-4 py-4">Job Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    {applications.map((app) => (
                      <tr
                        key={app.application_id}
                        className="border-b border-slate-100 transition hover:bg-blue-50/50"
                      >
                        <td className="px-4 py-4 font-semibold text-slate-800">
                          {app.companyName}
                        </td>

                        <td className="px-4 py-4 text-slate-600">
                          {app.jobRole}
                        </td>

                        <td className="px-4 py-4 text-slate-600">
                          {app.location}
                        </td>

                        <td className="px-4 py-4 text-slate-600">
                          {app.date}
                        </td>

                        <td className="px-4 py-4 text-slate-600">
                          {app.jobType}
                        </td>

                        <td className="px-4 py-4">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(app.applicationStatus)}`}>
                            {app.applicationStatus}
                          </span>
                        </td>

                        <td className="px-4 py-4">
                          {app.applicationLink ? (
                            <a
                              href={
                                app.applicationLink.startsWith("http")
                                  ? app.applicationLink
                                  : `https://${app.applicationLink}`
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-blue-600 hover:underline"
                            >
                              Open Link ↗
                            </a>
                          ) : (
                            <span className="text-slate-400">N/A</span>
                          )}
                        </td>

                        <td className="max-w-xs px-4 py-4 text-sm text-slate-600">
                          {app.jobDescription || "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            )}
          </section>

          {/* Future AI Features */}
          <section className="mt-10">
            <div className="mb-6">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                COMING SOON
              </span>

              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                Your Future AI Career Assistant
              </h2>

              <p className="mt-2 max-w-2xl text-slate-500">
                We are planning intelligent tools to help you understand job
                requirements, improve your resume and prepare for interviews.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
                <div className="text-3xl">🤖</div>
                <h3 className="mt-4 font-bold text-slate-900">
                  AI Job Analyzer
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Analyze job descriptions and understand required skills,
                  responsibilities and qualifications.
                </p>
                <span className="mt-4 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                  Planned
                </span>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
                <div className="text-3xl">🎯</div>
                <h3 className="mt-4 font-bold text-slate-900">
                  AI Resume Matcher
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Compare your resume with job requirements and discover
                  potential skill gaps.
                </p>
                <span className="mt-4 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                  Planned
                </span>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
                <div className="text-3xl">🎤</div>
                <h3 className="mt-4 font-bold text-slate-900">
                  AI Interview Preparation
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Generate role-specific interview questions and practice
                  technical and HR answers.
                </p>
                <span className="mt-4 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                  Planned
                </span>
              </div>

            </div>
          </section>

          {/* Footer */}
          <footer className="mt-10 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-700 p-8 text-center text-white">
            <h2 className="text-2xl font-bold">
              Every Application Is a New Opportunity.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-blue-100">
              Stay organized, keep learning and prepare yourself for the next
              step in your career journey.
            </p>
          </footer>

          <div className="py-8 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Placement Application Tracker.
            Keep building your future.
          </div>

        </div>
      </main>
    </div>
  );
}
