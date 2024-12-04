import React, { useState } from "react";
import axios from "../axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/register", {
        username,
        password,
        role,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;