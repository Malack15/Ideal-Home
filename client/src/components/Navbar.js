// client/src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch('/api/auth/profile', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setProfile(data);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setProfile(null);
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!profile ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/profile">
              <img src="/path-to-avatar.jpg" alt="Avatar" className="avatar" />
              {profile.username}
            </Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
