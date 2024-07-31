import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/api/auth/profile', {
        headers: { 'Authorization': `Bearer ${token}` },
      })
      .then(res => res.json())
      .then(data => setUser(data.user))
      .catch(() => setUser(null));
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login">
          <LoginPage setUser={setUser} />
        </Route>
        <Route path="/signup">
          <SignupPage setUser={setUser} />
        </Route>
        <Route path="/profile">
          <ProfilePage user={user} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
