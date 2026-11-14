
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

 const [profile, setProfile] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);

useEffect(() => {
  const token = localStorage.getItem("token");

  setIsLoggedIn(!!token);

  if (token) {
    axios.get("http://localhost:8080/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setProfile(response.data);
    })
    .catch((error) => {
      console.log("Unable to fetch profile", error);
      setProfile(null);
    });
  } else {
    setProfile(null);
  }
}, [location.pathname]);

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    setIsLoggedIn(false);
    setProfile({});
    setAccountOpen(false);

    navigate("/");
  };

  const fullname =
    profile?.register?.fullname || profile?.fullname || "User";

  const email =
    profile?.register?.email ||
    profile?.email ||
    localStorage.getItem("email") ||
    "";

  const navLink =
    "cursor-pointer text-sm font-medium text-slate-600 transition hover:text-blue-700";

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">

        <Link to="/" className="shrink-0 text-xl font-extrabold text-blue-700">
          Placement<span className="text-slate-800">Tracker</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <Link to="/" className={navLink}>Home</Link>

          <button onClick={() => handleSectionClick("features")} className={navLink}>
            Features
          </button>

          <button onClick={() => handleSectionClick("how-it-works")} className={navLink}>
            How It Works
          </button>

          <button onClick={() => handleSectionClick("upcoming")} className={navLink}>
            What's Coming
          </button>

          <button onClick={() => handleSectionClick("faq")} className={navLink}>
            FAQ
          </button>
        </div>

        <div className="flex shrink-0 items-center gap-2">

          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="rounded-lg px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
              >
                Dashboard
              </Link>

              {/* User Account */}
              <div className="relative">
                <button
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    {fullname.charAt(0).toUpperCase()}
                  </div>

                  <div className="hidden text-left sm:block">
                    <p className="text-sm font-semibold text-slate-800">
                      {fullname}
                    </p>
                    <p className="max-w-36 truncate text-xs text-slate-500">
                      {email}
                    </p>
                  </div>

                  <span className="text-xs text-slate-500">▼</span>
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">

                    <div className="border-b border-slate-100 pb-3">
                      <p className="font-semibold text-slate-800">
                        {fullname}
                      </p>
                      <p className="break-all text-sm text-slate-500">
                        {email}
                      </p>
                    </div>

                    <Link
                      to="/profile"
                      onClick={() => setAccountOpen(false)}
                      className="mt-2 block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-blue-50"
                    >
                      View Profile
                    </Link>

                    <Link
                      to="/updateProfile"
                      onClick={() => setAccountOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-blue-50"
                    >
                      Edit Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="mt-2 w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>

                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Get Started
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}
