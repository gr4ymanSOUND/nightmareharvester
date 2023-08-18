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
              How to Contact Us
            </h2>
            <div className="emoji">🌙</div>
          </div>
          <p>
            This will have a list of:
            <ul>
              <li>email contact</li>
              <li>phone number</li>
              <li>social media</li>
            </ul>
          </p>
          
        </article>
    </div>
  )

};

export default About;