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
    <nav className="navbar-loggedin">
      <div className="navbar-left">
        <ul className="links">
          <li className="logo"><Link to="/explore">flipr</Link></li>
          <li className="explorelink"><Link to="/explore">Explore</Link></li>
          <li className="explorelink"><Link to="/myphotos">My Photos</Link></li>
          <li className="explorelink"><Link to="/create">Upload Photo</Link></li>
        </ul>
      </div>
      <div className="loggedin">
        <div className="navbar-right">
          <ul className="greetinglogout">
            <li className="dropbtn">Hello, {currentUser.fname}!</li>
            <li><a className="dropdown-content" onClick={logout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )

  return currentUser ? loggedinLinks() : sessionLinks();
}

export default Navbar;
