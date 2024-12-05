import React, { useEffect, useState } from "react";
import axios from "../../axios";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }
        const response = await axios.get("/subscriptions", {
          headers: { Authorization: `Bearer ${token}` }, // صيغة التوكن المرسل
        });
        setSubscriptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubscriptions();
  }, []);

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