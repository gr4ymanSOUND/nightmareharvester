import React, { useState, useEffect } from 'react';

// axios imports will go here
import { getAllVideos } from '../axios-services';


const VideoTool = ({token}) => {

  const [ videoList, setVideoList ] = useState([]);
  const [ formOpen, setFormOpen ] = useState('closed');
  const [ selectedVideo, setSelectedVideo ] = useState({});

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
    if (videoId == 0) {
      console.log('trying to add video');
      setFormOpen('add');
    } else {
      const video = videoList.filter((video, index)=>{ return video.id == videoId});
      console.log('filtered video', video);
      setSelectedVideo(video);
      setFormOpen('edit');
    }
    
  }

  console.log('videoList', videoList);

  return (
    <div className='admin-tool'>
      {
        // put the code for the form here
      }
      <div className='tool-list'>
        <div className='list-columns'>
          <div>Title</div>
          <div>Description</div>
          <button className='add-video' onClick={()=>{openForm(0)}}>+</button>
        </div>
        {
          videoList.map((video, index) => {
            return (
              <div id={video.id} key={video.id} className='list-entry'>
                <div>{video.title}</div>
                <div>{video.description}</div>
                <button onClick={()=>{openForm(video.id)}}>Edit</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )

};

export default VideoTool;