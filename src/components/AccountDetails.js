import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { editUser, removeUser, loginUser } from '../axios-services';

const AccountDetails = ({ token, setToken, user, setUser}) => {

  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [allowEmail, setAllowEmail] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setUserEmail(user.email);
    setAllowEmail(user.allow_email ? true : false)
    setIsChecked(user.allow_email ? true : false)
  },[user]);

  // listens to any submit event - either add or edit
  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      email: userEmail,
      allow_email: allowEmail,
    }

    // check if we are editing the password, and make sure they include the old password if they are
    if (newPassword && !oldPassword) {
      alert('You must confirm your old password first before you can set a new one.');
      return
    }
    if (newPassword && oldPassword) {
      newUser.oldPassword = oldPassword;
      newUser.password = newPassword;
    }

    const response = await editUser(token, user.id, newUser)
    alert(`Your account has been edited.`);
    // should set user with response so there is new state for the form to use
    setUser(response);

  };

    // checkboxes require separate state for the "checked" attribute and the actual value it is supposed to represent
  const handleEmailChange = async (e) => {
    setAllowEmail(!allowEmail);
    setIsChecked(!isChecked);
  }

  // this will contain the axios call for deleting the current user. it should just deactivate their account
  const deleteAccount = async (e) => {
    e.preventDefault();
    if (confirm(`Are you sure you want to delete your account?`)) {
      try {
        const result = await removeUser(token, user.id);
      alert(`Your account has been deleted. To recover the account later, you can register again with the same username and email address.`);
      } catch (error) {
        alert('problem deleting account')
      }
    }

    setToken(null);
    localStorage.removeItem('nightmareHarvesterToken');

    window.scrollTo(0,0);
    navigate('/', {replace: true});
  }

  const goToAdmin = (e) => {
    e.preventDefault();
    window.scrollTo(0,0);
    navigate('/admin', {replace: true});
  }


  return (
    <div className="content-container">
      <form className='register-form' onSubmit={submitHandler}>
        <div className='account-detail-header'>
          <h2>Hello {user.username}!</h2>
          {
            user.is_admin != 1 ? null : <button className='register-button' id='admin-tool-button' onClick={goToAdmin}>Admin Tools</button>
          }
        </div>
        <div className="input-section">
          <h3>Edit Your Account: </h3>
        </div>
        <div className='form-text-fields'>
          <div className="input-section vertical">
            <label className="input-label">Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={({ target: { value } }) => setOldPassword(value)}
              className="form-control"
              id="old-password"
              placeholder="******"
            />
          </div>
          <div className="input-section vertical">
            <label className="input-label">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={({ target: { value } }) => setNewPassword(value)}
              className="form-control"
              id="new-password"
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
          <button className="register-button" type='submit'>Save and Submit Changes</button>
          <button className="register-button" onClick={deleteAccount}>Delete Account</button>
        </div>
      </form>
    </div>
  )

}

export default AccountDetails;