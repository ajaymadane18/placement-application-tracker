
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

      setProfile(response.data);

    } catch (err) {
      console.error(err);
      setError("Unable to load your profile.");
    } finally {
      setLoading(false);
    }
  };

  // Handle loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-500 font-medium animate-pulse">
          Loading your profile...
        </p>
      </div>
    );
  }

  // Handle error
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
        <p className="text-red-600 font-medium">{error}</p>

        <button
          onClick={fetchProfile}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  const user = profile?.register || {};

  const fullName = user.fullname || "User";
  const email = user.email || localStorage.getItem("email") || "Not provided";

  const profileImage =
    profile?.profilePhoto ||
    "https://placehold.co/160x160?text=Profile";

  const getSocialUrl = (url) => {
    if (!url) return "";

    return url.startsWith("http") ? url : `https://${url}`;
  };

  const InfoItem = ({ label, value }) => (
    <div className="bg-slate-50 rounded-xl p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
        {label}
      </p>

      <p className="text-sm font-medium text-slate-800 break-words">
        {value || "Not provided"}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">

      <div className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">

          <div>
            <p>
              ACCOUNT
            </p>

            <h1 className="text-3xl font-bold text-slate-800">
              My Profile
            </h1>

            <p className="text-slate-500 mt-2">
              View and manage your personal information.
            </p>
          </div>

          <button
            onClick={() => navigate("/updateProfile")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            Edit Profile
          </button>

        </div>

        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">

          <div className="h-32 bg-gradient-to-r from-gray-400 to-indigo-600"></div>

          <div className="px-6 sm:px-10 pb-8">

            <div className="flex flex-col sm:flex-row sm:items-end gap-5 -mt-14">

              <img
                src={profileImage}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md bg-white"
              />

              <div className="pb-2">

                <h2 className="text-2xl font-bold text-slate-800">
                  {fullName}
                </h2>

                <p className="text-slate-500 mt-1">
                  {email}
                </p>

              </div>

            </div>

            {profile?.bio && (
              <p className="text-slate-600 mt-6 leading-relaxed">
                {profile.bio}
              </p>
            )}

          </div>

        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Personal Information
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Your basic personal details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <InfoItem label="Full Name" value={fullName} />

            <InfoItem label="Email Address" value={email} />

            <InfoItem label="Phone Number" value={profile?.phone} />

            <InfoItem label="Date of Birth" value={profile?.dateOfBirth} />

            <InfoItem label="Gender" value={profile?.gender} />

          </div>

        </div>

        {/* Address Information */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Address Information
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Your current location details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <InfoItem label="Address" value={profile?.address} />

            <InfoItem label="City" value={profile?.city} />

            <InfoItem label="State" value={profile?.state} />

            <InfoItem label="Country" value={profile?.country} />

            <InfoItem label="Pincode" value={profile?.pincode} />

          </div>

        </div>

        {/* Social Profiles */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Professional Profiles
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Your professional presence on the internet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* LinkedIn */}
            <div className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700 font-bold text-xl">
                in
              </div>

              <div className="min-w-0 flex-1">

                <p className="font-semibold text-slate-800">
                  LinkedIn
                </p>

                {profile?.linkedin ? (
                  <a
                    href={getSocialUrl(profile.linkedin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline break-all"
                  >
                    {profile.linkedin}
                  </a>
                ) : (
                  <p className="text-sm text-slate-400">
                    Not provided
                  </p>
                )}

              </div>

              {profile?.linkedin && (
                <span className="text-blue-600 text-lg">↗</span>
              )}

            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-slate-800 font-bold text-2xl">
                GH
              </div>

              <div className="min-w-0 flex-1">

                <p className="font-semibold text-slate-800">
                  GitHub
                </p>

                {profile?.github ? (
                  <a
                    href={getSocialUrl(profile.github)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline break-all"
                  >
                    {profile.github}
                  </a>
                ) : (
                  <p className="text-sm text-slate-400">
                    Not provided
                  </p>
                )}

              </div>

              {profile?.github && (
                <span className="text-slate-600 text-lg">↗</span>
              )}

            </div>

          </div>

        </div>

        {/* Bottom Edit Button */}
        <div className="flex justify-end pb-8">

          <button
            onClick={() => navigate("/updateProfile")}
            className="bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            Edit My Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;
