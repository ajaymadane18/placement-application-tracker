
import { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Fetch logged-in user's profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:8080/api/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const linkStyle = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-white/20 text-white shadow-inner"
        : "text-blue-100 hover:bg-white/10 hover:text-white"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    navigate("/login");
  };

  const fullName =
    profile?.register?.fullname || "User";

  const email =
    profile?.register?.email ||
    localStorage.getItem("email") ||
    "";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 shadow-lg">

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">

        {/* Logo */}
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-xl font-bold text-white shadow-md">
            P
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Placement<span className="text-blue-400">Tracker</span>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-2">

          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/statistics" className={linkStyle}>
            Statistics
          </NavLink>

          <NavLink to="/dashboard" className={linkStyle}>
            Dashboard
          </NavLink>

          {/* User Profile Dropdown */}
          <div className="relative">

            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 font-bold text-white">
                {fullName.charAt(0).toUpperCase()}
              </div>

              <div className="hidden text-left sm:block">
                <p className="max-w-[130px] truncate text-sm font-semibold">
                  {fullName}
                </p>
                <p className="max-w-[130px] truncate text-xs text-blue-200">
                  {email}
                </p>
              </div>

              <span className="text-xs">
                {showProfileMenu ? "▲" : "▼"}
              </span>
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">

                <div className="border-b border-slate-100 bg-slate-50 px-4 py-4">
                  <p className="font-bold text-slate-800">
                    {fullName}
                  </p>
                  <p className="mt-1 break-all text-xs text-slate-500">
                    {email}
                  </p>
                </div>

                <div className="space-y-1 p-2">

                  <Link
                    to="/profile"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span>👤</span>
                    View Profile
                  </Link>

                  <Link
                    to="/updateProfile"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span>✏️</span>
                    Edit Profile
                  </Link>

                </div>
              </div>
            )}

          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="ml-1 rounded-lg border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 transition-all duration-200 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}
