
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [login, setLogin] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(login.email || "")) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!login.password || login.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const checkLogin = (data) => {
    axios.post("http://localhost:8080/CheckLogin", data).then(
      (response) => {
        alert("Login successful");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      },
      (error) => {
        alert("Invalid email or password");
        console.log(error);
      }
    );
  };

  const handleform = (e) => {
    e.preventDefault();

    if (validateForm()) {
      checkLogin(login);
    }
  };

  return (
    <>
      <Navbar />

      <main className="flex min-h-[85vh] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">

          {/* Heading */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg">
              P
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Login to manage your job applications.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleform} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => {
                  setLogin({ ...login, email: e.target.value });
                }}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={(e) => {
                  setLogin({ ...login, password: e.target.value });
                }}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />

              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
            >
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            New user?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Create an account
            </Link>
          </p>

        </div>
      </main>
    </>
  );
}
