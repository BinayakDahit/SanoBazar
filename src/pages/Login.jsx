import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      alert("Login successful!");
      navigate("/profile");
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <section className="py-12">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white border rounded-md p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Login</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="mt-2 w-full px-4 py-2.5 rounded-md border border-gray-300 outline-none focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Password</label>
                <div className="relative mt-2">
                  <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2.5 pr-11 rounded-md border border-gray-300 outline-none focus:border-red-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-red-500"
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              <button className="w-full bg-red-500 text-white py-2.5 rounded-md font-semibold hover:bg-red-600 transition">
                Login
              </button>

              <p className="text-sm text-gray-600 text-center">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-red-500 font-semibold hover:underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;