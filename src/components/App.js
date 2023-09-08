import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './Header';
import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';
import Videos from './Videos';
import About from './About';
import Footer from './Footer';
import AccountDetails from './AccountDetails';
import AdminTools from './AdminTools';

// NO DB OR API STUFF YET
import { getMe } from '../axios-services';

const App = () => {
  // state  and useEffect dealing with user details for logged in users
  const tokenFromStorage = localStorage.getItem('nightmareHarvesterToken');
  const [ token, setToken ] = useState(tokenFromStorage);
  const [ user, setUser ] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await getMe(token);
      return setUser(userInfo);
    }
    if (token) {
      getUserInfo();
    }
  }, [token]);

  //contains the routes for each main page
    return (
        <BrowserRouter>
            <Header
              user={user}
              setUser={setUser}
              setToken={setToken}
            />
              <Routes>
                  <Route 
                    exact path="/"
                    element={
                      <HomePage />
                    } 
                  />
                  <Route 
                    exact path="/videos"
                    element={
                      <Videos />
                    } 
                  />
                  <Route 
                    exact path="/about"
                    element={
                      <About />
                    } 
                  />
                  <Route 
                    exact path="/register"
                    element={
                      token ? <Navigate to="/" replace /> :
                      <Register setToken={setToken} setUser={setUser}/>
                    } 
                  />
                  {/* the database currently doesn't have an isAdmin set up for the user, so this won't work. we don't have any admin tools set up anyway, so that's fine */}
                  <Route 
                    exact path="/admin"
                    element={
                      user.is_admin != 1 ? <Navigate to="/" replace /> :
                      <AdminTools user={user}/>
                    }
                  />
                  <Route 
                    exact path="/account"
                    element={
                      Object.keys(user).length == 0 ? <Navigate to="/" replace /> :
                      <AccountDetails token={token} user={user} setUser={setUser}/>
                    }
                  />
              </Routes>
            <Footer />
        </BrowserRouter>
    )
  }

export default App;