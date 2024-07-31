import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling the navbar

const Navbar = ({ user }) => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      {!user ? (
        <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </>
      ) : (
        <>
          <li><Link to="/profile">{user.username}</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </>
      )}
    </ul>
  </nav>
);

export default Navbar;
