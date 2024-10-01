// src/components/ParentsPortal.jsx
import React from "react";

const ParentsPortal = () => {
  return (
    <div
      style={{
        minHeight: "87vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <div className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-5">Sign In</h2>
        <form className="flex flex-col">
          <label className="mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 p-2 mb-5"
            required
          />
          <label className="mb-2" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 p-2 mb-5"
            required
          />
          <button type="submit" className="primary-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default ParentsPortal;
