import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Login from './Login';

const Header = ({ user, setUser, setToken }) => {

    const [ isNavOpen, setIsNavOpen ] = useState(false);
    const [ isLoginOpen, setIsLoginOpen ] = useState(false);
  
    const openNav = () => {
      setIsNavOpen(isNavOpen => !isNavOpen);
    }

    const openLogin = () => {
      setIsLoginOpen(isLoginOpen => !isLoginOpen);
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
                <Link to="/">Nightmare Harvester</Link>
              </div>
            <div className={`other-nav ${isNavOpen ? "open" : ""}`}>
                <Link to="/Videos">Videos</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                { !user ? (
                    <div className='header-user'>
                      {user.userName}
                      <button onClick={logOut}>Log Out</button>
                    </div>
                  ) : (
                    <div className='header-user'>
                      <button onClick={openLogin}>Log In</button>
                    </div>
                    )
                  }
            </div>
            {
              isLoginOpen ? <Login setToken={setToken} setUser={setUser}/> : null
            }
          </nav>
            <div className="icon" onClick={openNav}>
              <i className="fa fa-bars"></i>
            </div>
        </header>
    )

}

export default Header;