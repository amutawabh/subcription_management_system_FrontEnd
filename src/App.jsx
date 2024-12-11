import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AddSubscription from './components/AddSubscription/AddSubscription';
import UserManagement from './components/UserManagement/UserManagement';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-subscription" element={<AddSubscription />} />
      <Route path="/edit-subscription/:id" element={<AddSubscription />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/edit-subscription/:id" element={<AddSubscription />} />

  
    </Routes>
  );
};

export default App;