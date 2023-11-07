import React, { useState, useEffect } from 'react';

// axios imports will go here
import { getAllVideos, updateVideo, createNewVideo } from '../axios-services';


const VideoTool = ({token}) => {

  const [ videoList, setVideoList ] = useState([]);
  const [ formOpen, setFormOpen ] = useState('closed');
  const [ selectedVideoId, setSelectedVideoId ] = useState(0);
  const [ videoTitle, setVideoTitle ] = useState('');
  const [ videoDescription, setVideoDescription ] = useState('');
  const [ videoUrl, setVideoUrl ] = useState('');
  const [ videoStatus, setVideoStatus ] = useState('hidden');

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
    setSelectedVideoId(videoId);
    if (videoId == 0) {
      setFormOpen('add');
    } else {
      const [ video ] = videoList.filter((video, index)=>{ return video.id == videoId});
      setVideoTitle(video.title);
      setVideoDescription(video.description);
      setVideoUrl(video.video_url);
      // videos in the current database don't have a status
      // will update this after testing the new database build with the status column in place
      setVideoStatus(video.status ? video.status : 'hidden');
      setFormOpen('edit');
    }
  }

  const closeForm = () => {
    setSelectedVideoId(0);
    setVideoTitle('');
    setVideoDescription('');
    setVideoUrl('');
    setVideoStatus('hidden')
    setFormOpen('closed');
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const newVideoInfo = {
      title: videoTitle,
      description: videoDescription,
      video_url: videoUrl,
      status: videoStatus
    }

    if (formOpen == 'add') {
      const response = await createNewVideo(token, newVideoInfo);
      alert(`Your new video has been posted!`);
    } else {
      const response = await updateVideo(token, selectedVideoId, newVideoInfo)
      alert(`This video has been edited.`);
    }

    setSelectedVideoId(0);
    setVideoTitle('');
    setVideoDescription('');
    setVideoUrl('');
    setVideoStatus('hidden');
    setFormOpen('closed');

    const videos = await getAllVideos();
    setVideoList(videos);
  }

  return (
    <div className='admin-tool'>
      {
        formOpen == 'closed' ? null : (
          <div className='tool-form-container'>
            <form className='register-form' onSubmit={submitHandler}>
              <div className="input-section tool-heading">
                <button type="button" onClick={closeForm}>X</button>
              </div>
              <div className="input-section vertical">
                <label className="input-label">Title</label>
                <input
                  type="text"
                  value={videoTitle}
                  onChange={({ target: { value } }) => setVideoTitle(value)}
                  id="videoTitle"
                  placeholder="Title: Subtitle"
                />
              </div>
              <div className="input-section vertical">
                <label className="input-label">Description</label>
                <textarea
                  value={videoDescription}
                  onChange={({ target: { value } }) => setVideoDescription(value)}
                  id="videoDescription"
                  placeholder="This describes the video."
                />
              </div>
              <div className="input-section">
                <label className="input-label">**URL</label>
                <input
                  type="text"
                  value={videoUrl}
                  onChange={({ target: { value } }) => setVideoUrl(value)}
                  id="videoUrl"
                  placeholder="https://www.youtube.com/embed/....."
                />
              </div>
              <div style={{fontSize: ".65rem"}}>
                ** for the URL, click "Share" on the video, choose the "Embed" option, and then copy only the part inside the quotes next to "src="
              </div>
              <img style={{width: '80%'}}src={require('../img/vimeo_embedLink.png')}></img>
              <img style={{width: '80%'}}src={require('../img/youtube_embedLink.png')}></img>
              <div className="input-section other">
                <label className="input-label">Status</label>
                <select 
                  id="videoStatus"
                  name="videoStatus"
                  value={videoStatus}
                  onChange={({ target: { value } }) => setVideoStatus(value)}
                >
                  <option value="public">Public</option>
                  <option value="supporter">Supporter</option>
                  <option value="pinned">Pinned</option>
                  <option value="hidden">Hidden</option>
                </select>
              </div>
              <div className='form-submission-container'>
                <button className="login-button" type='submit'>Save and Submit Changes</button>
              </div>
            </form>
          </div>
        )
      }
      <div className='tool-list'>
        <div className='list-columns'>
          <div>Title</div>
          <div>Description</div>
          <div style={{flex: .5}}>status</div>
          <button className='tool-top-button' onClick={()=>{openForm(0)}}>+</button>
        </div>
        {
          videoList.map((video, index) => {
            return (
              <div id={video.id} key={video.id} className='list-entry'>
                <div>{video.title}</div>
                <div>{video.description}</div>
                <div style={{flex: .5}}>{video.status}</div>
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