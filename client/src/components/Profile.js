// client/src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('/api/auth/profile', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setProfile(data);
      } else {
        alert(data.msg);
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <button onClick={() => navigate('/edit-profile')}>Edit Profile</button>
    </div>
  );
};

export default Profile;
