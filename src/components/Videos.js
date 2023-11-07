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


  // <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/881452979?h=9354605bb5&title=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>


  return (
    <div className="content-container">
      {/* YouTube version */}
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
                  <iframe className='responsive-iframe' src={video.video_url} title="Video Player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <p>
                  {video.description}
                </p>
              </article>
            )
          }
        })
      }
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  )

};

export default Videos;