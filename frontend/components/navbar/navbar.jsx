import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className="navbar">
      <div className="login-signup">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign up</Link></li>
      </div>
    </nav>
  );
  const loggedinLinks = () => (
    <nav className="navbar">
      <div className="loggedin">
        <li>Hi, {currentUser.fname}</li>
        <li><a onClick={logout}>Logout</a></li>
      </div>
    </nav>
  )

  return currentUser ? loggedinLinks() : sessionLinks();
}

export default Navbar;
