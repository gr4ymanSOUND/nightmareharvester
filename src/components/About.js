import React, { useState, useEffect } from 'react';

const About = () => {

  return (
    <div className="home-page">
      <div className="banner-container" id="nightmare-banner">
          <img src={require("../img/nightmareLogo.webp")} alt="Nightmare Banner" id="banner" />
        </div>

        <article>
          <div className="article-heading">
            <div className="emoji">🌙</div>
            <h2>
              About the Project
            </h2>
            <div className="emoji">🌙</div>
          </div>
          <p>
            this is a thing with videos about dreams and nightmares
          </p>

          {/* this 2nd article had to be inside the first container because the homepage styling is applying, putting any article in an ABSOLUTE position instead of stacking them in a flex column */}

          <div className="article-heading">
            <div className="emoji">🌙</div>
            <h2>
              About the People
            </h2>
            <div className="emoji">🌙</div>
          </div>
          <p>
            we are people that have dreams and nightmares sometimes
          </p>
        </article>
    </div>
  )

};

export default About;