
import { Link, useNavigate } from "react-router-dom";
import DashboardNavbar from "../Components/DashboardNavbar";


export default function Dashboard() {
     const navigate=useNavigate()
       const fun=()=>{
        navigate("/addApplication")
       }
  return (
    <>
    <DashboardNavbar/>

      <main className="min-h-screen bg-slate-50 p-6 md:p-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard
              </h1>
              <p className="mt-2 text-gray-600">
                Welcome! Keep your job search on track.
              </p>
            </div>

            <button
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              onClick={fun}
            >
              + Add Application
            </button>
          </div>

        
          <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Recent Applications
            </h2>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b text-sm text-gray-500">
                    <th className="px-3 py-3">Company</th>
                    <th className="px-3 py-3">Job Role</th>
                    <th className="px-3 py-3">Applied Date</th>
                    <th className="px-3 py-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td colSpan="4" className="px-3 py-10 text-center text-gray-500">
                      No applications yet. Start tracking your job search!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link
              to="/register"
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              Create an account to get started
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}


