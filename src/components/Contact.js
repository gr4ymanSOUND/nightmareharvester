import React, { useState, useEffect } from 'react';

const About = () => {

  return (
    <div className="content-container">


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
          </p>
          <ul>
              <li>email contact</li>
              <li>phone number</li>
              <li>social media</li>
            </ul>
          
        </article>
    </div>
  )

};

export default About;