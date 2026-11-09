
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../Components/DashboardNavbar";
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

  return (
    <>
      <DashboardNavbar />

      <main className="min-h-screen bg-slate-50 p-6 md:p-10">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                My Applications
              </h1>

              <p className="mt-2 text-gray-600">
                Manage and track all your job applications in one place.
              </p>
            </div>

            <button
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
              onClick={fun}
            >
              + Add Application
            </button>
          </div>

          {/* Applications Table */}
          <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  All Applications
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your saved job application details.
                </p>
              </div>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                Total: {applications.length}
              </span>
            </div>

            {loading ? (
              <div className="py-12 text-center text-gray-500">
                Loading your applications...
              </div>
            ) : error ? (
              <div className="rounded-lg bg-red-50 p-5 text-center text-red-600">
                {error}
              </div>
            ) : applications.length === 0 ? (
              <div className="py-12 text-center">
                <div className="mb-3 text-5xl">📂</div>

                <h3 className="text-lg font-semibold text-gray-800">
                  No applications yet
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Start tracking your job search by adding your first application.
                </p>

                <button
                  onClick={fun}
                  className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
                >
                  + Add Your First Application
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1100px] text-left">

                  <thead>
                    <tr className="border-b bg-slate-50 text-sm text-gray-500">
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
                        className="border-b border-gray-100 transition hover:bg-blue-50/50"
                      >
                        <td className="px-4 py-4 font-semibold text-gray-800">
                          {app.companyName}
                        </td>

                        <td className="px-4 py-4 text-gray-600">
                          {app.jobRole}
                        </td>

                        <td className="px-4 py-4 text-gray-600">
                          {app.location}
                        </td>

                        <td className="px-4 py-4 text-gray-600">
                          {app.date}
                        </td>

                        <td className="px-4 py-4 text-gray-600">
                          {app.jobType}
                        </td>

                        <td className="px-4 py-4">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            app.applicationStatus?.toLowerCase() === "selected"
                              ? "bg-green-100 text-green-700"
                              : app.applicationStatus?.toLowerCase() === "rejected"
                              ? "bg-red-100 text-red-700"
                              : app.applicationStatus?.toLowerCase() === "interview"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {app.applicationStatus}
                          </span>
                        </td>

                        <td className="px-4 py-4">
                          {app.applicationLink ? (
                            <a
                              href={app.applicationLink.startsWith("http")
                                ? app.applicationLink
                                : `https://${app.applicationLink}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-blue-600 hover:underline"
                            >
                              Open Link ↗
                            </a>
                          ) : (
                            <span className="text-gray-400">N/A</span>
                          )}
                        </td>

                        <td className="max-w-xs px-4 py-4 text-sm text-gray-600">
                          {app.jobDescription || "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            )}

          </section>

        </div>
      </main>
    </>
  );
}
