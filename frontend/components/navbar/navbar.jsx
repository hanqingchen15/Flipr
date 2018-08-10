import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className="navbar">
      <div className="logo"><Link to="/">flipr</Link></div>
      <div className="login-signup">
      <li className="loginlink"><Link to="/login">Log In</Link></li>
      <li className="shift"><Link to="/signup" className="signupbutton">Sign Up</Link></li>
      </div>
    </nav>
  );
  const loggedinLinks = () => (
    <nav className="navbar">
      <div className="logo"><Link to="/">flipr</Link></div>
      <div className="loggedin">
        <li>Hi, {currentUser.fname}</li>
        <li><a onClick={logout}>Logout</a></li>
      </div>
    </nav>
  )

  return currentUser ? loggedinLinks() : sessionLinks();
}

export default Navbar;
