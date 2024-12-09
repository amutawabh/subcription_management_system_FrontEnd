// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Subscriptions from "./components/Subscriptions/Subscriptions";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/subscriptions">Subscriptions</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
