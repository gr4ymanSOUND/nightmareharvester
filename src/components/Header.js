import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Login from './Login';

const Header = ({ user, setUser, setToken }) => {

  const navigate = useNavigate();


  const [ isNavOpen, setIsNavOpen ] = useState(false);
  const [ isLoginOpen, setIsLoginOpen ] = useState(false);

  const openNav = () => {
    setIsNavOpen(isNavOpen => !isNavOpen);
  }

  const openLogin = (e) => {
    e.preventDefault();
    setIsLoginOpen(isLoginOpen => !isLoginOpen);
  }

  const openAccountDetails = (e) => {
    e.preventDefault();
    navigate('/account', {replace: true});
  }

  const logOut = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('userToken');
  }

    // think about adding something to style the currently active page?

    // make clicking on username take you to a user-info page
    // admins will have their tools there

    // how to image source src={require("../img/stratabore-logo-transparent.png")} 

  return (
    <header>
      <nav className="navbar" id="navcontainer">
        {/* <img id="logo" src={} alt="Logo" /> */}
        <div className="logo-container">
          <Link to="/" onClick={() => setIsNavOpen(false)}>Nightmare Harvester</Link>
        </div>
        <div className={`other-nav ${isNavOpen ? "open" : ""}`}>
          <Link to="/Videos" onClick={() => setIsNavOpen(false)}>Videos</Link>
          <Link to="/About" onClick={() => setIsNavOpen(false)}>About</Link>
          <Link to="/Contact" onClick={() => setIsNavOpen(false)}>Contact</Link>
          { user ? (
            <>
              <div className='header-user' onClick={openAccountDetails}>
                <div>
                  {user.username}
                </div>
              </div>
              <button className="user-button small" onClick={logOut}>Log Out</button>
            </>
            ) : (
                <button className="user-button" onClick={openLogin}>{isLoginOpen ? 'X' : 'Log In'}</button>
              )
            }
        </div>
        {
          isLoginOpen ? <Login setToken={setToken} setUser={setUser} setIsLoginOpen={setIsLoginOpen} setIsNavOpen={setIsNavOpen}/> : null
        }
      </nav>
        <div className="icon" onClick={openNav}>
          <i className="fa fa-bars"></i>
        </div>
    </header>
  )

}

export default Header;