import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createUser, loginUser } from '../axios-services';

const Register = ({ setToken, setUser}) => {
  
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [allowEmail, setAllowEmail] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [userStatus, setUserStatus] = useState('active');

  // listens to any submit event - either add or edit
  const submitHandler = async (e) => {
    e.preventDefault();

    if (username=='' || userEmail=='' || userPassword=='') {
      alert('Please fill in all available fields before submitting');
      return;
    }

    // we need to set the key for allowEmail here to be spelled the proper way for the SQL database ---> allow_email
    const newUser = {
      username: username,
      password: userPassword,
      email: userEmail,
      allow_email: allowEmail,
      status: userStatus
    }

    // first create the user, then actually log them in right after
    const createdUser = await createUser(newUser);

    const response = await loginUser(newUser.username, newUser.password);
    setToken(response.token);
    setUser(response.user);
    localStorage.setItem("nightmareHarvesterToken", response.token);
    
    //reset form state after sumbission
    setUsername('');
    setUserPassword('');
    setUserEmail('');
    setAllowEmail(false);
    setIsChecked(false);
    setUserStatus('active');

    // redirect after submission
    navigate('/', {replace: true});
  };

    // checkboxes require separate state for the "checked" attribute and the actual value it is supposed to represent
  const handleEmailChange = async (e) => {
    setAllowEmail(!allowEmail);
    setIsChecked(!isChecked);
  }


  return (
    <div className='content-container'>
      <form className='register-form' onSubmit={submitHandler}>
        <div className='register-header'>
          <p style={{textAlign: "left"}}>
            Creating an account on our site gets you early access to our video content, along with the opportunity to sign up for our emailing list to get updates on our project and special offers.
          </p>
          <p style={{textAlign: "left"}}>
            We have a lot more planned for the future, so sign up and get on our email list to be the first to know!
          </p>
          <div className="article-heading">
            <h2>Enter Your Details to Create an Account</h2>
          </div>
        </div>
        <div className='form-text-fields'>
          <div className="input-section vertical">
            <label className="input-label">Username</label>
            <input
              type="text"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
              className="form-control"
              id="username"
              placeholder="user2023"
            />
          </div>
          <div className="input-section vertical">
            <label className="input-label">Password</label>
            <input
              type="password"
              value={userPassword}
              onChange={({ target: { value } }) => setUserPassword(value)}
              className="form-control"
              id="password"
              placeholder="******"
            />
          </div>
          <div className="input-section vertical">
            <label className="input-label">Email</label>
            <input
              type="text"
              value={userEmail}
              onChange={({ target: { value } }) => setUserEmail(value)}
              className="form-control"
              id="userEmail"
              placeholder="user2023@website.com"
            />
          </div>
        </div>
        <div className='input-section other'>
          <label className='input-label'>Allow Email Notifications?</label>
          <input
            className='checkbox'
            type="checkbox"
            id="allowEmail"
            name="allowEmail"
            checked={isChecked}
            onChange={handleEmailChange}
          />
        </div>
        <div className='form-submission-container'>
          <button className="register-button" type='submit'>Create Your Account</button>
        </div>
      </form>
    </div>
  )
}

export default Register;