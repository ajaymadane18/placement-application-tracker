
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import AddApplication from "./pages/AddApplication";
import ProtectedRoute from "./Components/ProtectedRoute";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addApplication" element={<AddApplication />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
