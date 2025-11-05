import React, { useState } from "react";
import "../styles/Signin.css";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted:", { email, password });
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <h2 className="signin-title">Login</h2>

        <form onSubmit={handleSubmit} className="signin-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <div className="signin-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
