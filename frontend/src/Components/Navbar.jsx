
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition duration-200 ${
      location.pathname === path
        ? "bg-white/20 text-white"
        : "text-blue-100 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <nav className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-extrabold text-blue-800 shadow-md">
            P
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">
              Placement<span className="text-cyan-300">Tracker</span>
            </h1>
            <p className="text-xs text-blue-200">
              Your career, organized.
            </p>
          </div>
        </Link>

        {/* Navigation links */}
        <div className="flex items-center gap-2">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/dashboard" className={linkStyle("/dashboard")}>
            Dashboard
          </Link>

          <Link to="/register" className={linkStyle("/register")}>
            Register
          </Link>

          <Link
            to="/login"
            className="ml-2 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md transition duration-200 hover:bg-cyan-300 hover:shadow-lg"
          >
            Login →
          </Link>
        </div>

      </div>
    </nav>
  );
}
