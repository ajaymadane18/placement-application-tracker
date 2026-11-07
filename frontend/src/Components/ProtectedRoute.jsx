import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {

    const token = localStorage.getItem("token");

    console.log("Token:", token);

    if (!token) {
        console.log("Unauthorized user - Redirecting to login");
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}