import React from 'react';

const Footer = () => {


    return (
        <footer>
            <div className="social-media">
              <a href='http://www.youtube.com' target="_blank">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
              <a href='http://www.twitter.com' target="_blank">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href='http://www.facebook.com' target="_blank">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a href='http://www.instagram.com' target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
            <div className="copyright">
              &copy; 2023 Nightmare Harvester - All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer;