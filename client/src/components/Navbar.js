// client/src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Ensure this file exists and contains necessary styles

const Navbar = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await fetch('/api/auth/profile', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });

        // Check if response is OK (status code 200-299)
        if (!response.ok) {
          // Get the response text for debugging
          const text = await response.text();
          console.error('Response error:', text);
          // Optionally, you could check for specific status codes or content
          // and handle them accordingly
          return;
        }

        // Parse JSON response
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        setProfile(null);
        localStorage.removeItem('token');
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
        <li><Link to="/about">About</Link></li> {/* Example: Add other pages here */}
        <li><Link to="/contact">Contact</Link></li> {/* Example: Add other pages here */}
        {!profile ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        ) : (
          <>
            <li>
              <Link to="/profile">
                {/* Ensure you replace '/path-to-avatar.jpg' with the actual avatar path */}
                <img 
                  src={profile.avatar || '/path-to-default-avatar.jpg'} 
                  alt="Avatar" 
                  className="avatar" 
                />
                {profile.username}
              </Link>
            </li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
