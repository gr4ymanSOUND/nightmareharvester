import React, { useState, useEffect } from 'react';

const HomePage = () => {

  return (
    <div className="home-page">
      <div className="banner-container" id="nightmare-banner">
          <img src={require("../img/nightmareLogo.webp")} alt="Nightmare Banner" id="banner" />
        </div>

        <article>
          <div className="article-heading">
            <div className="emoji">🌙</div>
            <h2>
              Welcome to the Twisted Realm of the Nightmare Harvester
            </h2>
            <div className="emoji">🌙</div>
          </div>
          <p>
            We are collectors from the dark corridors of slumber, the weavers of unique tales that dance on the edge of dreams. With a heart that thrives in terror and a mind that feeds on the ethereal, we beckon you to delve into the enchanting trenches of your own subconscious.
          </p>
        </article>
    </div>
  )

};

export default HomePage;