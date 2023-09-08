import React, { useState, useEffect } from 'react';

import { getAllVideos } from '../axios-services';

const Videos = () => {

  const [ videoList, setVideoList ] = useState([]);

  useEffect(() => {
    const getVideoList = async () => {
      const videos = await getAllVideos();
      return setVideoList(videos);
    }
    getVideoList();
  }, []);

  return (
    <div className="content-container">

      {
        videoList.map((video, index) => {
          return (
            <article id={video.id} key={video.id}>
              <div className="article-heading">
                <div className="emoji">🌙</div>
                <h2>
                  {video.title}
                </h2>
                <div className="emoji">🌙</div>
              </div>
              <div className="video-embed">
                <iframe className='responsive-iframe' src={video.video_url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p>
                {video.description}
              </p>
            </article>
          )
        })
      }
    </div>
  )

};

export default Videos;