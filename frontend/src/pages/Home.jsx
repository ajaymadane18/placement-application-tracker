
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[85vh] items-center justify-center bg-slate-50 px-6">
        <div className="max-w-3xl text-center">
          <p className="mb-4 font-semibold text-blue-600">
            YOUR JOB SEARCH, ORGANIZED
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Manage Your Job Applications in One Place
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
            Track companies, save job descriptions, monitor application
            status, and stay prepared for your next opportunity.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/register"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>
          </div>

          <div className="mt-12 grid gap-4 text-left md:grid-cols-3">
            <Feature
              title="Track Applications"
              description="Keep all your job applications organized."
            />
            <Feature
              title="Save Job Details"
              description="Store company names and job descriptions."
            />
            <Feature
              title="Monitor Progress"
              description="Track applied, interview, and selected statuses."
            />
          </div>
        </div>
      </main>
    </>
  );
}

function Feature({ title, description }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
