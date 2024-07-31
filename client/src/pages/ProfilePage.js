// client/src/pages/ProfilePage.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated from useHistory to useNavigate
import axios from 'axios';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate(); // Updated from useHistory to useNavigate

  useEffect(() => {
    // Replace with your API endpoint
    axios.get('/api/profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  const handleLogout = () => {
    // Replace with your API endpoint
    axios.post('/api/logout')
      .then(() => {
        // Perform any additional logout steps if needed
        navigate('/login'); // Updated from history.push to navigate
      })
      .catch(error => console.error('Error logging out:', error));
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h1>Welcome, {profile.name}</h1>
      <p>Email: {profile.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
