
import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Register = () => {
     const navigate = useNavigate();
    const [register, Setregister] = useState({});
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(register.email || "")) {
            newErrors.email = "Enter a valid email address";
        }

        // Password validation
        const passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if (!passwordPattern.test(register.password || "")) {
            newErrors.password =
                "Use 8+ characters with uppercase, lowercase, number and special character";
        }

        // Confirm password validation
        if (
            !register.confirmpassword ||
            register.password !== register.confirmpassword
        ) {
            newErrors.confirmpassword = "Passwords do not match";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleform = (e) => {
        e.preventDefault();

        if (validateForm()) {
            postRegister(register);
        }
    };

    const postRegister = (data) => {
        axios.post("http://localhost:8080/saveRegister", data).then(
            (response) => {
                console.log(response);
                console.log("success");
                alert("Registration successful")
                 setTimeout(() => {
        navigate("/login");
      }, 1500);
            },
            (error) => {
                console.log(error);
                console.log("error");
                alert("Something went wrong")
            }
        );
    };

    return (
        <>
            <Navbar />

            <div className="flex min-h-[85vh] items-center justify-center  from-blue-50 via-white to-indigo-100 px-4 py-00">

                <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">

                    {/* Heading */}
                    <div className="mb-7 text-center">
                        

                        <h1 className="text-3xl font-bold text-gray-900">
                            Create Account
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Start organizing your job applications today.
                        </p>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleform} className="space-y-5">

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                name="fullname"
                                onChange={(e) => {
                                    Setregister({
                                        ...register,
                                        fullname: e.target.value
                                    });
                                }}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Email Address
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your email"
                                name="email"
                                onChange={(e) => {
                                    Setregister({
                                        ...register,
                                        email: e.target.value
                                    });
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
                                placeholder="Enter password"
                                name="password"
                                onChange={(e) => {
                                    Setregister({
                                        ...register,
                                        password: e.target.value
                                    });
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

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm your password"
                                name="confirmpassword"
                                onChange={(e) => {
                                    Setregister({
                                        ...register,
                                        confirmpassword: e.target.value
                                    });
                                }}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                required
                            />

                            {errors.confirmpassword && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.confirmpassword}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            Login
                        </a>
                    </p>

                </div>
            </div>
        </>
    );
};

export default Register;
