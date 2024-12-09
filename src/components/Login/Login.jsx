// src/components/Login/Login.jsx

import React, { useState } from "react";
import axios from "../../../axios";
import './Login.css';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/login", {
        username,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); 
        alert("Login successful");
      } else {
        alert("Failed to retrieve token");
      }
    } catch (error) {
      console.error("Error details:", error.response);
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
