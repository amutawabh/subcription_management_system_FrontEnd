// src/components/Register/Register.jsx

import React, { useState } from "react";
import { addUser } from "../../services/userService"; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await addUser({ username, password, role }); // استخدام addUser
      setSuccess("User registered successfully!");
      setError("");
      setUsername("");
      setPassword("");
      setRole("employee");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "An error occurred");
      setSuccess("");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
