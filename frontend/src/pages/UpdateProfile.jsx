
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    profilePhoto: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    dateOfBirth: "",
    gender: "",
    linkedin: "",
    github: "",
    bio: ""
  });

  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Load existing profile
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8080/api/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = response.data;

      setProfile({
        profilePhoto: data.profilePhoto || "",
        phone: data.phone || "",
        address: data.address || "",
        city: data.city || "",
        state: data.state || "",
        country: data.country || "",
        pincode: data.pincode || "",
        dateOfBirth: data.dateOfBirth || "",
        gender: data.gender || "",
        linkedin: data.linkedin || "",
        github: data.github || "",
        bio: data.bio || ""
      });

    } catch (err) {
      console.error(err);
      setError("Unable to load your profile.");
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value
    });
  };

  // Handle profile image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Image size must be less than 2MB.");
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setError("");
  };

  // Save profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError("");
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:8080/api/profile",
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage("Profile updated successfully!");

      setTimeout(() => {
        navigate("/profile");
      }, 1000);

    } catch (err) {
      console.error(err);
      setError("Failed to update profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-500 font-medium">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto">

        {/* Page Header */}
        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600 mb-2">
            ACCOUNT SETTINGS
          </p>

          <h1 className="text-3xl font-bold text-slate-800">
            Update Your Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your personal information and professional details.
          </p>

        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

          {/* Profile Photo Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-8 sm:px-10">

            <div className="flex flex-col sm:flex-row items-center gap-6">

              <div className="relative">

                <img
                  src={
                    imagePreview ||
                    profile.profilePhoto ||
                    "https://placehold.co/120x120?text=Profile"
                  }
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                />

                <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 shadow-md">

                  <span className="text-lg">+</span>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                </label>

              </div>

              <div className="text-center sm:text-left">

                <h2 className="text-xl font-semibold text-slate-800">
                  Profile Photo
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Upload a professional photo for your account.
                </p>

                <p className="text-xs text-slate-400 mt-2">
                  JPG, PNG or other image formats. Maximum 2MB.
                </p>

              </div>

            </div>

          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10">

            {/* Messages */}
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {message && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                {message}
              </div>
            )}

            {/* Personal Information */}
            <div className="mb-10">

              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Personal Information
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Add your basic personal details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    name="dateOfBirth"
                    value={profile.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Gender
                  </label>

                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

              </div>

            </div>

            {/* Address Information */}
            <div className="mb-10 border-t border-slate-200 pt-8">

              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Address Information
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Where are you currently located?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Address
                  </label>

                  <textarea
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Enter your full address"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={profile.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Country
                  </label>

                  <input
                    type="text"
                    name="country"
                    value={profile.country}
                    onChange={handleChange}
                    placeholder="Enter country"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    value={profile.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

              </div>

            </div>

            {/* Professional Information */}
            <div className="mb-10 border-t border-slate-200 pt-8">

              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Professional Information
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Share your professional profiles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    LinkedIn Profile
                  </label>

                  <input
                    type="url"
                    name="linkedin"
                    value={profile.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    GitHub Profile
                  </label>

                  <input
                    type="url"
                    name="github"
                    value={profile.github}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    About Yourself
                  </label>

                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Write a short introduction about yourself..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  />
                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="border-t border-slate-200 pt-6 flex flex-col-reverse sm:flex-row justify-end gap-4">

              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60 transition shadow-sm"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default UpdateProfile;
