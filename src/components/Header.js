import React, { useState } from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom';

import Login from './Login';

const Header = ({ user, setUser, setToken }) => {

  const navigate = useNavigate();

  const [ isNavOpen, setIsNavOpen ] = useState(false);
  const [ isLoginOpen, setIsLoginOpen ] = useState(false);

  const openNav = (e) => {
    e.preventDefault();
    setIsNavOpen(isNavOpen => !isNavOpen);
  }

  const openLogin = (e) => {
    e.preventDefault();
    setIsLoginOpen(isLoginOpen => !isLoginOpen);
  }

  const openAccountDetails = (e) => {
    e.preventDefault();
    setIsNavOpen(false);
    navigate('/account', {replace: true});
  }

  const logOut = (e) => {
    e.preventDefault();
    setToken(null);
    setUser(null);
    localStorage.removeItem('nightmareHarvesterToken');
  }

    // think about adding something to style the currently active page?

    // how to image source src={require("../img/stratabore-logo-transparent.png")} 

  return (
    <header>
      <nav className="navbar" id="navcontainer">
        {/* <img id="logo" src={} alt="Logo" /> */}
        <div className="logo-container">
          <NavLink 
            to="/"
            onClick={() => setIsNavOpen(false)}
          >Nightmare Harvester</NavLink>
        </div>
        <div className={`other-nav ${isNavOpen ? "open" : ""}`}>
          <NavLink
            to="/Videos"
            onClick={() => setIsNavOpen(false)}
            className={({isActive}) => {
              return isActive ? 'active-link' : ''
            }}
          >Videos</NavLink>
          <NavLink
            to="/About"
            onClick={() => setIsNavOpen(false)}
            className={({isActive}) => {
              return isActive ? 'active-link' : ''
            }}         
            >About</NavLink>
          <NavLink
            to="/Contact"
            onClick={() => setIsNavOpen(false)}
            className={({isActive}) => {
              return isActive ? 'active-link' : ''
            }}          
            >Contact</NavLink>
          { Object.keys(user).length != 0 ? (
            <>
              <div className={'header-user'} onClick={openAccountDetails}>
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