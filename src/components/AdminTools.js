import React, { useState, useEffect } from 'react';

// tool components
import UserTool from './UserTool';
import VideoTool from './VideoTool';

// axios imports will go here
import { getAllUsers, getAllVideos } from '../axios-services';


const AdminTools = ({token, user}) => {

  const [ whichTool, setWhichTool ] = useState('user-tool');

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

  const setTool = (e) => {
    e.preventDefault();
    setWhichTool(e.target.id);
  }

  console.log('which tool?', whichTool);


  return (
    <div className='content-container'>
      <div className='admin-buttons'>
        <button 
          id='user-tool' 
          onClick={setTool} 
          className={whichTool == 'user-tool' ? 'active-tool' : ''}
        >Users</button>
        <button 
          id='video-tool'
          onClick={setTool}
          className={whichTool == 'video-tool' ? 'active-tool' : ''}
        >Videos</button>
      </div>
      <article className='admin-article'>
        {
          (whichTool === 'user-tool') ? <UserTool token={token} userList={userList} setUserList={setUserList}/> : <VideoTool token={token}/>
        }
      </article>
    </div>
)

};

export default AdminTools;