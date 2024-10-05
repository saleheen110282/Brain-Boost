import React from "react";

const Payment = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "87vh",
        backgroundColor: "#f7f7f7",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>
        Complete Your Payment
      </h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <label
          style={{
            marginBottom: "10px",
            fontSize: "1rem",
            color: "#666",
          }}
        >
          Name on Card
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        />

        <label
          style={{
            marginBottom: "10px",
            fontSize: "1rem",
            color: "#666",
          }}
        >
          Card Number
        </label>
        <input
          type="text"
          placeholder="xxxx-xxxx-xxxx-xxxx"
          style={{
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        />

        <label
          style={{
            marginBottom: "10px",
            fontSize: "1rem",
            color: "#666",
          }}
        >
          Expiry Date
        </label>
        <input
          type="text"
          placeholder="MM/YY"
          style={{
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        />

        <label
          style={{
            marginBottom: "10px",
            fontSize: "1rem",
            color: "#666",
          }}
        >
          CVV
        </label>
        <input
          type="text"
          placeholder="CVV"
          style={{
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        />

        <button
          type="submit"
          className="primary-btn"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
