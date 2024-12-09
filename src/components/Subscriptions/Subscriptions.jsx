// src/components/Subscriptions/Subscriptions.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          navigate("/login"); 
          return;
        }
        const response = await axios.get("/subscriptions", {
          headers: { Authorization: `Bearer ${token}` }, 
        });
        setSubscriptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubscriptions();
  }, [navigate]); 

  return (
    <div>
      <h1>Subscriptions</h1>
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub._id}>
            {sub.clientName} - {new Date(sub.endDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscriptions;
