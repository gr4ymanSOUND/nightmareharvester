import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { loginUser } from "../axios-services";

const Register = ({ setToken, setUser}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) =>{
      e.preventDefault()

      // quick pop-up prompt if the user left a field blank
      if (!userName || !password) {
        alert('Please enter a username and/or password!')
        return;
      }

      // call API to attempt to log in
      // const response = await loginUser(userName, password);
      // setToken(response.token);
      // setUser(response.user);
      // localStorage.setItem("userToken", response.token);

      // reset state for the form
      setUserName("");
      setPassword("");
    }


  return (
    <div className='Register-window'>
      <form className='Register-form' onSubmit={submitHandler}>
          <div className="input-section">
            <input
              type="text"
              minLength={'6'}
              value={userName}
              onChange={({ target: { value } }) => setUserName(value)}
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
          <button className="Register-button" type='submit'>Create Account</button>
      </form>
    </div>
  )
}

export default Register;