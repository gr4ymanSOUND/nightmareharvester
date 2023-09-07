import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { loginUser } from "../axios-services";

const Login = ({ setToken, setUser, setIsLoginOpen, setIsNavOpen}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) =>{
      e.preventDefault()

      // quick pop-up prompt if the user left a field blank
      if (!username || !password) {
        alert('Please enter a username and/or password!')
        return;
      }

      // call API to attempt to log in
      const response = await loginUser(username, password);
      setToken(response.token);
      setUser(response.user);
      localStorage.setItem("nightmareHarvesterToken", response.token);

      // reset state for the form
      setUsername("");
      setPassword("");
      setIsLoginOpen(false);
      setIsNavOpen(false);
    }


  return (
    <div className='login-window'>
      <form className='login-form' onSubmit={submitHandler}>
          <div className="input-section">
            <input
              type="text"
              minLength={'6'}
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
              className="form-control"
              id="user"
              placeholder="UserName"
            />
          </div>
          <div className="input-section">
            <input
              type="password"
              minLength={'6'}
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              className="form-control"
              id="pass"
              placeholder="********"
            />
          </div>
          <div className='login-register-buttons'>
            <button className="login-button" type='submit'>Log In</button>
            <Link to="/Register" onClick={() => {
              setIsLoginOpen(false)
              setIsNavOpen(false)
              }}>New? Register Here</Link>
          </div>
      </form>
    </div>
  )
}

export default Login;