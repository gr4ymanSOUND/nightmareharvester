import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './Header';
import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';
import Videos from './Videos';
import About from './About';
import Contact from './Contact'
import Footer from './Footer';
import AdminTools from './AdminTools';

// NO DB OR API STUFF YET
// import { getMe } from '../axios-services';

const App = () => {
  // state  and useEffect dealing with user details for logged in users
  const tokenFromStorage = localStorage.getItem('userToken');
  const [ token, setToken ] = useState(tokenFromStorage);
  const [ user, setUser ] = useState({});

  // useEffect(() => {
  //   const getUserInfo = async () => {
  //     const userInfo = await getMe(token);
  //     return setUser(userInfo);
  //   }
  //   if (token) {
  //     getUserInfo();
  //   }
  // }, [token]);

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
                    exact path="/contact"
                    element={
                      <Contact />
                    } 
                  />
                  <Route 
                    exact path="/register"
                    element={
                      token ? <Navigate to="/" replace /> :
                      <Register />
                    } 
                  />
                  <Route 
                    exact path="/admin"
                    element={
                      !user.isAdmin ? <Navigate to="/" replace /> :
                      <AdminTools user={user}/>
                    }
                  />
              </Routes>
            <Footer />
        </BrowserRouter>
    )
  }

export default App;