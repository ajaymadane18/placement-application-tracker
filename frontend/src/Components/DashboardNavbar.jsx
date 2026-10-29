import { NavLink, useNavigate } from "react-router-dom";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-white/20 text-white shadow-inner"
        : "text-blue-100 hover:bg-white/10 hover:text-white"
    }`;

  const handleLogout = () => {
    navigate("/login");
  };

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

          <NavLink to="/profile" className={linkStyle}>
            Profile
          </NavLink>

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