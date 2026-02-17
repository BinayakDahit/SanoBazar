import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Save user (demo)
    const user = { name: form.name, email: form.email };
    localStorage.setItem("sb_user", JSON.stringify(user));
    localStorage.setItem("sb_hasAccount", "true");

    alert("Sign up successful!");
    navigate("/login");
  };

  return (
    <div className="w-full">
      <section className="py-12">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white border rounded-md p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Sign Up</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full px-4 py-2.5 rounded-md border border-gray-300 outline-none focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full px-4 py-2.5 rounded-md border border-gray-300 outline-none focus:border-red-500"
                  required
                />
              </div>

              {/* Password with eye icon */}
              <div>
                <label className="text-sm font-semibold">Password</label>
                <div className="relative mt-2">
                  <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full px-4 py-2.5 pr-11 rounded-md border border-gray-300 outline-none focus:border-red-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-red-500"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password with eye icon */}
              <div>
                <label className="text-sm font-semibold">Confirm Password</label>
                <div className="relative mt-2">
                  <input
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full px-4 py-2.5 pr-11 rounded-md border border-gray-300 outline-none focus:border-red-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-red-500"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2.5 rounded-md font-semibold hover:bg-red-600 transition"
              >
                Create Account
              </button>

              <p className="text-sm text-gray-600 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-red-500 font-semibold hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;