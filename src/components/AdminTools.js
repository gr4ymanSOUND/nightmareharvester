import React, { useState, useEffect } from 'react';

// tool components
import UserTool from './UserTool';
import VideoTool from './VideoTool';

// axios imports will go here
import { getAllUsers, getAllVideos } from '../axios-services';


const AdminTools = ({token, user}) => {

  const [ userList, setUserList ] = useState([]);
  const [ videoList, setVideoList ] = useState([]);
  const [ whichTool, setWhichTool ] = useState('user-tool');

  useEffect(() => {
    const getLists = async () => {
      const users = await getAllUsers(token);
      const videos = await getAllVideos();
      setUserList(users);
      setVideoList(videos);
    }
    if (token) {
      getLists();
    }
  },[]);

  console.log('userList', userList);
  console.log('videoList', videoList);

  const setTool = (e) => {
    e.preventDefault();
    setWhichTool(e.target.id);
  }


  return (
    <div className='content-container'>
      {
        user.is_admin == 1 ? (
          <article>
            <div className='admin-buttons'>
              <button id='user-tool' onClick={setTool}>Users</button>
              <button id='video-tool'onClick={setTool}>Videos</button>
            </div>
            {
              whichTool == 'user-tool' ? <UserTool token={token} userList={userList}/> : <VideoTool token={token} videoList={videoList}/>
            }
          </article>
        ) : null
      }
    </div>
)

};

export default AdminTools;