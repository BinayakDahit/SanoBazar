import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const navItemClass = ({ isActive }) =>
  `cursor-pointer transition-all pb-1 border-b-[3px] ${
    isActive
      ? "border-red-500 text-red-500"
      : "border-transparent text-black hover:text-red-500"
  }`;

const Navbar = ({ cartItem = [], isLoggedIn = false, hasAccount = true }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/products?search=${encodeURIComponent(q)}`);
  };

  const authTo = hasAccount ? "/login" : "/signup";
  const authLabel = hasAccount ? "Login" : "Sign Up";

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div>
          <Link to="/">
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">Sano</span> Bazar
            </h1>
          </Link>
        </div>

        {/* menu + search + cart + auth */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            <NavLink to="/" end className={navItemClass}>
              <li>Home</li>
            </NavLink>

            <NavLink to="/products" className={navItemClass}>
              <li>Products</li>
            </NavLink>

            <NavLink to="/about" className={navItemClass}>
              <li>About</li>
            </NavLink>

            <NavLink to="/contact" className={navItemClass}>
              <li>Contact</li>
            </NavLink>
          </ul>

          {/* Small & attractive Search */}
          <form onSubmit={handleSearch}>
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden focus-within:border-red-500">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search"
                className="w-28 md:w-40 px-3 py-1.5 text-sm outline-none"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-red-500 text-white hover:bg-red-600 transition-all"
                aria-label="Search"
              >
                <IoSearchOutline className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Cart (same active underline effect) */}
          <NavLink to="/cart" className={navItemClass}>
            <div className="relative">
              <IoCartOutline className="h-7 w-7" />
              <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-xs">
                {cartItem?.length ?? 0}
              </span>
            </div>
          </NavLink>

          {/* Auth: Profile OR single button (Sign Up -> Login) */}
          {isLoggedIn ? (
            <NavLink to="/profile" className={navItemClass}>
              <div className="flex items-center gap-2 font-semibold">
                <FiUser className="h-6 w-6" />
                <span className="hidden sm:inline">Profile</span>
              </div>
            </NavLink>
          ) : (
            <Link
              to={authTo}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all"
            >
              {authLabel}
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;