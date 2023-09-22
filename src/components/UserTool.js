import React, { useState, useEffect } from 'react';

// axios imports will go here
import { getAllUsers, editUser } from '../axios-services';

const UserTool = ({token}) => {

  const [ formOpen, setFormOpen ] = useState(false);

  const [ userList, setUserList ] = useState([]);
  const [ selectedUser, setSelectedUser ] = useState({});
  const [ allowEmail, setAllowEmail ] = useState(false);
  const [ isAdmin , setIsAdmin ] = useState(false);
  const [ isEmailChecked, setIsEmailChecked ] = useState(false);
  const [ isAdminChecked, setIsAdminChecked ] = useState(false);
  const [ userStatus, setUserStatus ] = useState('');

  useEffect(() => {
    const getUserList = async () => {
      const users = await getAllUsers(token);
      setUserList(users);
    }
    if (token) {
      getUserList();
    }
  },[]);

  const openForm = (e) => {
    e.preventDefault();
    const userId = e.target.id;
    const [editingUser] = userList.filter((user, index)=>{
      return user.id == userId;
    });
    setSelectedUser(editingUser);

    const emailBool = editingUser.allow_email ? true : false;
    setAllowEmail(emailBool);
    setIsEmailChecked(emailBool)

    const adminBool = editingUser.is_admin ? true : false;
    setIsAdmin(adminBool);
    setIsAdminChecked(adminBool);

    setUserStatus(editingUser.status);

    setFormOpen(true);
  }

  const closeForm = () => {
    setSelectedUser({});
    setFormOpen(false);
  }

  const handleEmailChange = async (e) => {
    setAllowEmail(!allowEmail);
    setIsEmailChecked(!isEmailChecked);
  }

  const handleAdminChange = async (e) => {
    setIsAdmin(!isAdmin);
    setIsAdminChecked(!isAdminChecked);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      allow_email: allowEmail,
      is_admin: isAdmin,
      status: userStatus
    }

    const response = await editUser(token, selectedUser.id, newUser)
    alert(`${selectedUser.username}'s account has been edited.`);

    setSelectedUser({});
    setFormOpen(false);

    const users = await getAllUsers(token);
    setUserList(users);

  }

  const copyEmailAddresses = async () => {
    let text = '';
    const setText = (user) => {
      if (user.allow_email) {
        text += user.email + ';'
      }
    }
    userList.forEach(setText);
    text = text.slice(0, -1);
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <div className='admin-tool'>
      {
        formOpen ? (
          <div className='tool-form-container user'>
            <form className='register-form' onSubmit={submitHandler}>
              <div className="input-section tool-heading">
                <h3>Edit This Account: {selectedUser.username}</h3>
                <button type="button" onClick={closeForm}>X</button>
              </div>
              <div className='input-section other'>
                <label className='input-label'>Allow Email Notifications?</label>
                <input
                  className='checkbox'
                  type="checkbox"
                  id="allowEmail"
                  name="allowEmail"
                  checked={isEmailChecked}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="input-section other">
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
              <div className='input-section other'>
                <label className='input-label'>Admin?</label>
                <input
                  className='checkbox'
                  type="checkbox"
                  id="admin"
                  name="admin"
                  checked={isAdminChecked}
                  onChange={handleAdminChange}
                />
              </div>
              <div className='form-submission-container'>
                <button className="register-button" type='submit'>Save and Submit Changes</button>
              </div>
            </form>
          </div>
        ) : null
      }
      <div className='tool-list'>
      <div className='list-columns'>
          <div>Username</div>
          <div>Notifications</div>
          <div>Status</div>
          <div>Admin</div>
          {/*  alt button that's totally hidden from view, used for spacing in the header columns <button className='hidden-button'></button> */}
          <button className='tool-top-button' onClick={copyEmailAddresses}>Copy Emails</button>
        </div>
        {
          userList.map((user, index) => {
            return (
              <div id={user.username} key={user.id} className='list-entry'>
                <div>{user.username}</div>
                <div>{user.allow_email ? 'Yes' : 'No'}</div>
                <div>{user.status}</div>
                <div>{user.is_admin ? 'Yes' : 'No'}</div>
                <button id={user.id} onClick={openForm}>Edit</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )

};

export default UserTool;