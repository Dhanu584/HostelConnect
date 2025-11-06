// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Today from "./pages/Today";
import TodayFaculty from "./pages/TodayFaculty";
import TodayCommittee from "./pages/TodayCommittee";
import Chats from "./pages/Chats";
import Help from "./pages/Help";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-16">
        <Routes>
          {/* Student Routes */}
          <Route path="/" element={<Today />} />
          <Route path="/today" element={<Today />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/help" element={<Help />} />

          {/* Authentication */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Faculty & Committee Routes */}
          <Route path="/faculty" element={<TodayFaculty />} />
          <Route path="/committee" element={<TodayCommittee />} />

          {/* Optional 404 Fallback */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "Poppins" }}>
                <h2>404 – Page Not Found</h2>
                <p>The page you’re looking for doesn’t exist.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
