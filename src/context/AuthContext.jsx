import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const loadUser = () => {
  try {
    const raw = localStorage.getItem("sb_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(loadUser);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("sb_loggedIn") === "true"
  );

  const hasAccount = !!user;

  const signup = ({ name, email, password }) => {
    const newUser = { name, email, password };
    localStorage.setItem("sb_user", JSON.stringify(newUser));
    localStorage.setItem("sb_loggedIn", "false");

    setUser(newUser);
    setIsLoggedIn(false);
  };

  const login = ({ email, password }) => {
    const stored = loadUser();
    if (!stored) return { ok: false, message: "No account found. Please sign up." };

    if (stored.email.toLowerCase() !== email.toLowerCase()) {
      return { ok: false, message: "Email not found." };
    }

    if (stored.password !== password) {
      return { ok: false, message: "Wrong password." };
    }

    localStorage.setItem("sb_loggedIn", "true");
    setUser(stored);
    setIsLoggedIn(true);
    return { ok: true };
  };

  const logout = () => {
    localStorage.setItem("sb_loggedIn", "false");
    setIsLoggedIn(false);
  };

  const value = useMemo(
    () => ({ user, isLoggedIn, hasAccount, signup, login, logout }),
    [user, isLoggedIn, hasAccount]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);