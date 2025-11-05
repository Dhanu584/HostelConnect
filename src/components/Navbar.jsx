import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Set the current active page based on URL
  const [active, setActive] = useState(location.pathname);

  const handleNavClick = (path) => {
    setActive(path);
    navigate(path);
  };

  return (
    <nav className="navbar">
      {/* Left side: Brand name */}
      <div className="nav-left" onClick={() => navigate("/")}>
        <h1>HostelConnect</h1>
      </div>

      {/* Middle: Navigation links */}
      <div className="nav-center">
        <button
          className={active === "/today" ? "active" : ""}
          onClick={() => handleNavClick("/today")}
        >
          Today
        </button>
        <button
          className={active === "/chats" ? "active" : ""}
          onClick={() => handleNavClick("/chats")}
        >
          Chats
        </button>
        <button
          className={active === "/help" ? "active" : ""}
          onClick={() => handleNavClick("/help")}
        >
          Help
        </button>
      </div>

      {/* Right side: Sign in + Sign up + Hamburger */}
      <div className="nav-right">
        <button className="signin-btn" onClick={() => navigate("/signin")}>
          Sign In
        </button>
        <button className="signup-btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
