import React, { useState, useEffect } from 'react';

// axios imports will go here
import { getAllUsers } from '../axios-services';


const UserTool = ({token}) => {

  const [ userList, setUserList ] = useState([]);


  useEffect(() => {
    const getUserList = async () => {
      const users = await getAllUsers(token);
      setUserList(users);
    }
    if (token) {
      getUserList();
    }
  },[]);

  const openForm = (userId) => {
    console.log('user id', userId);
  }

  console.log('userList', userList);

  return (
    <div className='admin-tool'>
      <h2>Users</h2>
      <div className='tool-list'>
      <div className='list-columns'>
          <div>Username</div>
          <div>Email Notifications</div>
          <div>Status</div>
          <div>Admin</div>
          <button></button>
        </div>
        {
          userList.map((user, index) => {
            return (
              <div id={user.id} key={user.id} className='list-entry'>
                <div>{user.username}</div>
                <div>{user.allow_email ? 'Yes' : 'No'}</div>
                <div>{user.status}</div>
                <div>{user.is_admin ? 'Yes' : 'No'}</div>
                <button onClick={() => {openForm(user.id)}}>Edit</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )

};

export default UserTool;