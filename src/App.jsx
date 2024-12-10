// src/App.jsx

import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Components
import Login from './components/Login/Login'; 
import Register from './components/Register/Register';
import Subscriptions from './components/Subscriptions/Subscriptions';
import NavBar from './components/NavBar/NavBar';


// Services
import * as authService from './services/authService';
import * as SubscriptionsService from './services/SubscriptionsService';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser()); 
  const navigate = useNavigate();


  const handleSignout = () => {
    authService.signout();
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
 
    if (user) {
      console.log('User authenticated:', user);
    }
  }, [user]);

  return (
    <AuthedUserContext.Provider value={user}>
      <div className="page-container">
        <header>
          <NavBar user={user} handleSignout={handleSignout} />
        </header>
        <main className="content">
          <Routes>
            {user ? (
              <>
                <Route path="/" element={<Login user={user} />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
              </>
            )}
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 Your App. All Rights Reserved.</p>
        </footer>
      </div>
    </AuthedUserContext.Provider>
  );
};

export default App;
