import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { getAllUsers, editUser, removeUser, createUser } from '../axios-services';

const Register = ({ setToken, setUser}) => {
  
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [allowEmail, setAllowEmail] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [userStatus, setUserStatus] = useState('active');

  // listens to any submit event - either add or edit
  const submitHandler = async (e) => {
    e.preventDefault();

    if (userName=='' || userEmail=='' || userPassword=='') {
      alert('Please fill in all available fields before submitting');
      return;
    }

    const newUser = {
      userName: userName,
      password: userPassword,
      email: userEmail,
      allowEmail: allowEmail,
      status: userStatus
    }

    if (formType == 'add-user') {
      const response = await createUser(token, newUser);
      alert(`A new user for ${newUser.userName} has been created.`);
    }
    if (formType == 'edit-user') {
      delete newUser.password;
      const userId = currentSelected.id;
      const response = await editUser(token, userId, newUser)
      alert(`${newUser.userName} has been edited.`);
    }
    
    //reset form state after sumbission
    setUserName('');
    setUserPassword('');
    setUserEmail('');
    setAllowEmail(false);
    setIsChecked(false);
    setUserStatus('active')


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
        <div className="input-section">
          <label className="input-label">UserName</label>
          <input
            type="text"
            value={userName}
            onChange={({ target: { value } }) => setUserName(value)}
            className="form-control"
            id="userName"
            placeholder="user2023"
          />
        </div>
        <div className="input-section">
          <label className="input-label">Password</label>
          <input
            type="text"
            value={userPassword}
            onChange={({ target: { value } }) => setUserPassword(value)}
            className="form-control"
            id="password"
            placeholder="******"
          />
        </div>
        <div className="input-section">
          <label className="input-label">Email</label>
          <input
            type="text"
            value={userEmail}
            onChange={({ target: { value } }) => setUserEmail(value)}
            className="form-control"
            id="userEmail"
            placeholder="user2023@stratabore.com"
          />
        </div>
        <div className='input-section checkbox'>
          <label className='input-label'>Allow Email Notifications?</label>
          <input
            type="checkbox"
            id="allowEmail"
            name="allowEmail"
            checked={isChecked}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-section">
          <label className="input-label">Status</label>
          <select
            id="userStatus"
            name="userStatus"
            value={userStatus}
            onChange={({ target: { value } }) => setUserStatus(value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button className="submit-button" type='submit'>Save and Submit</button>
      </form>
    </div>
  )
}

export default Register;