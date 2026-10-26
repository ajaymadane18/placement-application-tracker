
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[85vh] items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-gray-600">
            Login to continue to your dashboard.
          </p>

          <p className="mt-6 text-gray-600">
            Login form will be added in the next step.
          </p>

          <Link to="/register" className="mt-5 inline-block text-blue-600">
            New user? Create an account
          </Link>
        </div>
      </main>
    </>
  );
}
