// src/components/SignIn.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const ParentsPortal = () => {
  return (
    <div
      style={{
        minHeight: "87vh",
        backgroundColor: "#f7f7f7",
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
      }}
    >
      <div className="w-full max-w-md bg-white p-10 shadow-md rounded">
        <h2 className="text-3xl font-bold mb-5 text-center">Parents Sign In</h2>
        <form className="flex flex-col">
          <label className="mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email" // Added placeholder
            className="border border-gray-300 p-2 mb-5 rounded"
            required
          />
          <label className="mb-2" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password" // Added placeholder
            className="border border-gray-300 p-2 mb-5 rounded"
            required
          />

          <button type="submit" className="primary-btn mb-5">Sign In</button>

          <p className="text-center">
            New User?{" "}
            <Link to="/ParentsSignUp" className="text-blue-500 underline hover:bg-gray-200 p-1 rounded transition duration-200">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ParentsPortal;
