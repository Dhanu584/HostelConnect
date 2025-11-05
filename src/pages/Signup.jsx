import React, { useState } from "react";
import "../styles/Signup.css";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaIdBadge,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState(""); // "", "student", "faculty", "committee"
  const navigate = useNavigate(); // ✅ navigation function

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleBack = () => {
    setSelectedRole("");
  };

  // ✅ Navigate to Signin page
  const goToSignin = () => {
    navigate("/signin");
  };

  // Common Input Component
  const InputField = ({ icon: Icon, type, placeholder }) => (
    <div className="flex items-center bg-[#4f86a0] rounded-full px-4 py-3 mb-4">
      <Icon className="text-white mr-3" />
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent outline-none text-white placeholder-white flex-1"
      />
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2e6d91] text-white px-4">
      {!selectedRole ? (
        // STEP 1: Role Selection Buttons
        <div className="flex flex-col gap-6 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-6">HostelConnect</h1>

          <button
            onClick={() => handleRoleSelect("student")}
            className="bg-white text-[#2e6d91] font-bold py-5 rounded-xl text-xl hover:scale-105 transition-transform"
          >
            Hostel Student
          </button>

          <button
            onClick={() => handleRoleSelect("faculty")}
            className="bg-white text-[#2e6d91] font-bold py-5 rounded-xl text-xl hover:scale-105 transition-transform"
          >
            Hostel Faculty
          </button>

          <button
            onClick={() => handleRoleSelect("committee")}
            className="bg-white text-[#2e6d91] font-bold py-5 rounded-xl text-xl hover:scale-105 transition-transform"
          >
            Committee
          </button>
        </div>
      ) : (
        // STEP 2: Role-Specific Signup Form
        <div className="w-full max-w-md bg-[#2e6d91] text-center">
          <h2 className="text-4xl font-semibold mb-8">Sign Up</h2>

          {/* ========== COMMITTEE FORM ========== */}
          {selectedRole === "committee" && (
            <>
              <InputField icon={FaUser} type="text" placeholder="Committee Name" />
              <InputField icon={FaInstagram} type="text" placeholder="Instagram ID" />
              <InputField icon={FaLock} type="password" placeholder="Password" />

              <button className="w-full bg-[#b9ced9] text-black font-semibold py-3 rounded-full hover:opacity-90 transition-opacity">
                Register
              </button>

              <div className="flex items-center justify-between text-sm mt-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Remember Me
                </label>
                <p className="underline cursor-pointer">Terms & conditions</p>
              </div>

              <p className="mt-6">
                Have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={goToSignin} // ✅ navigate on click
                >
                  Login
                </span>
              </p>
            </>
          )}

          {/* ========== HOSTEL STUDENT FORM ========== */}
          {selectedRole === "student" && (
            <>
              <InputField icon={FaUser} type="text" placeholder="Full Name" />
              <InputField icon={FaEnvelope} type="email" placeholder="College Email" />
              <InputField icon={FaPhone} type="text" placeholder="Phone Number" />
              <InputField icon={FaIdBadge} type="text" placeholder="Room Number / Hostel Name" />
              <InputField icon={FaLock} type="password" placeholder="Password" />

              <button className="w-full bg-[#b9ced9] text-black font-semibold py-3 rounded-full hover:opacity-90 transition-opacity">
                Register
              </button>

              <div className="flex items-center justify-between text-sm mt-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Remember Me
                </label>
                <p className="underline cursor-pointer">Terms & conditions</p>
              </div>

              <p className="mt-6">
                Have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={goToSignin} // ✅ navigate on click
                >
                  Login
                </span>
              </p>
            </>
          )}

          {/* ========== HOSTEL FACULTY FORM ========== */}
          {selectedRole === "faculty" && (
            <>
              <InputField icon={FaUser} type="text" placeholder="Full Name" />
              <InputField icon={FaEnvelope} type="email" placeholder="Official Email" />
              <InputField icon={FaPhone} type="text" placeholder="Phone Number" />
              <InputField icon={FaIdBadge} type="text" placeholder="Department / Hostel Wing" />
              <InputField icon={FaLock} type="password" placeholder="Password" />

              <button className="w-full bg-[#b9ced9] text-black font-semibold py-3 rounded-full hover:opacity-90 transition-opacity">
                Register
              </button>

              <div className="flex items-center justify-between text-sm mt-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Remember Me
                </label>
                <p className="underline cursor-pointer">Terms & conditions</p>
              </div>

              <p className="mt-6">
                Have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={goToSignin} // ✅ navigate on click
                >
                  Login
                </span>
              </p>
            </>
          )}

          {/* BACK BUTTON */}
          <button
            onClick={handleBack}
            className="mt-8 text-sm underline text-gray-200 hover:text-white"
          >
            ← Back to Role Selection
          </button>
        </div>
      )}
    </div>
  );
};

export default Signup;
