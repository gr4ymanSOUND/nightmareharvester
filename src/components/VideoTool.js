import React, { useState, useEffect } from 'react';

// axios imports will go here
import { getAllVideos } from '../axios-services';


const VideoTool = ({token}) => {

  const [ videoList, setVideoList ] = useState([]);

  useEffect(() => {
    const getVideoList = async () => {
      const videos = await getAllVideos();
      setVideoList(videos);
    }
    if (token) {
      getVideoList();
    }
  },[]);

  const openForm = (videoId) => {
    console.log('video id', videoId);
  }

  console.log('videoList', videoList);

  return (
    <div className='admin-tool'>
      <h2>Videos</h2>
      <div className='tool-list'>
        <div className='list-columns'>
          <div>Title</div>
          <div>Description</div>
          <button></button>
        </div>
        {
          videoList.map((video, index) => {
            return (
              <div id={video.id} key={video.id} className='list-entry'>
                <div>{video.title}</div>
                <div>{video.description}</div>
                <button onClick={() => {openForm(video.id)}}>Edit</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )

};

export default VideoTool;