import React, { useState, useEffect } from 'react';

import { getAllVideos } from '../axios-services';

const Videos = ({token}) => {

  const [ videoList, setVideoList ] = useState([]);
  const [ pinnedVid, setPinnedVid ] = useState();

  useEffect(() => {
    const getVideoList = async () => {
      const videos = await getAllVideos();
      setVideoList(videos);
      const pinnedVids = videos.filter((video) => {
        return video.status == 'pinned'
      });
      const pinnedVid = pinnedVids[0];
      setPinnedVid(pinnedVid);
    }
    getVideoList();
  }, [token]);


  return (
    <div className="content-container">
      {
        pinnedVid ? (
          <article id={pinnedVid.id} key={pinnedVid.id}>
            <div className='vid-icon pin'>
              <i className="fa-solid fa-thumbtack"></i>
            </div>
            <div className="article-heading">
              <div className="emoji">☾</div>
              <h2>
                {pinnedVid.title}
              </h2>
              <div className="emoji">☾</div>
            </div>
            <div className="video-embed">
              <iframe className='responsive-iframe' src={pinnedVid.video_url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p>
              {pinnedVid.description}
            </p>
          </article>
        ) : null
      }
      

      {
        videoList.map((video, index) => {
          if (video.status == 'hidden') {
            return;
          }
          if (video.status == 'public' || (video.status == 'supporter' && token)) {
            return (
              <article id={video.id} key={video.id}>
                {
                  video.status == 'supporter' ? <div className='vid-icon'>
                  <i className="fa-solid fa-user-lock"></i></div> : null
                }
                <div className="article-heading">
                  <div className="emoji">☾</div>
                  <h2>
                    {video.title}
                  </h2>
                  <div className="emoji">☾</div>
                </div>
                <div className="video-embed">
                  <iframe className='responsive-iframe' src={video.video_url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <p>
                  {video.description}
                </p>
              </article>
            )
          }
        })
      }
    </div>
  )

};

export default Videos;