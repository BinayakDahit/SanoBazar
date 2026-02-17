import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold">Profile</h1>
      <p className="text-gray-700 mt-3">
        Name: <span className="font-semibold">{user?.name}</span>
      </p>
      <p className="text-gray-700">
        Email: <span className="font-semibold">{user?.email}</span>
      </p>

      <button
        onClick={logout}
        className="mt-6 px-6 py-2.5 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;