import React, { useState } from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom';

import Login from './Login';

const Header = ({ user, setUser, setToken }) => {

  const navigate = useNavigate();

  const [ isNavOpen, setIsNavOpen ] = useState(false);
  const [ isLoginOpen, setIsLoginOpen ] = useState(false);

  const openNav = (e) => {
    e.preventDefault();
    if (!isLoginOpen) setIsNavOpen(isNavOpen => !isNavOpen)
  }

  const openLogin = (e) => {
    e.preventDefault();
    setIsLoginOpen(isLoginOpen => !isLoginOpen);
    setIsNavOpen(isNavOpen => !isNavOpen);
  }

  const openAccountDetails = (e) => {
    e.preventDefault();
    setIsNavOpen(false);
    window.scrollTo(0,0);
    navigate('/account', {replace: true});
  }

  const logOut = (e) => {
    e.preventDefault();
    setToken(null);
    localStorage.removeItem('nightmareHarvesterToken');
    setIsNavOpen(false);
  }

  const navLinkClick = () => {
    setIsNavOpen(false);
    window.scrollTo(0,0);
  }

    // think about adding something to style the currently active page?

    // how to image source src={require("../img/stratabore-logo-transparent.png")} 

  return (
    <header>
      <nav className="navbar" id="navcontainer">
        <div className="home-link">
          <NavLink 
            to="/"
            onClick={navLinkClick}
          ><div>Nightmare Harvester</div>
          </NavLink>
        </div>
        <div className={`other-nav ${isNavOpen ? "open" : ""}`}>
          <NavLink
            to="/videos"
            onClick={navLinkClick}
            className={({isActive}) => {
              return isActive ? 'active-link' : ''
            }}
          ><div>Videos</div>
          </NavLink>

          <NavLink
            to="/about"
            onClick={navLinkClick}
            className={({isActive}) => {
              return isActive ? 'active-link' : ''
            }}         
          ><div>About</div>
          </NavLink>

          <NavLink
            to="/merch"
            onClick={navLinkClick}
            className={({isActive}) => {
              return isActive ? 'active-link' : ''
            }}         
          ><div>Merch</div>
          </NavLink>

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
        <div className="icon" onClick={openNav}>
          <i className="fa fa-bars"></i>
        </div>
      </nav>
        
    </header>
  )

}

export default Header;