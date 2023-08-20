import React, { useState, useEffect } from 'react';

const Videos = () => {

  return (
    <div className="content-container">


        <article>
          <div className="article-heading">
            <div className="emoji">🌙</div>
            <h2>
              Video Title Here
            </h2>
            <div className="emoji">🌙</div>
          </div>
          <div className="video-embed">
            <iframe className='responsive-iframe' src="https://www.youtube-nocookie.com/embed/o9yIgEzZvVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <p>
            Extra video description stuff can go here, or we can add some form of react/like button to get more interaction.
          </p>
        </article>
    </div>
  )

};

export default Videos;