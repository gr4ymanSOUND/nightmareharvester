import React from 'react';

const Footer = () => {


    return (
        <footer>
            <div className="social-media">
              <a href='https://www.youtube.com/@NightmareHarvester' target="_blank">
              <i className="fa-brands fa-youtube"></i>
              </a>
              <a href='https://vimeo.com/user201179187' target="_blank">
                <i class="fa-brands fa-vimeo"></i>            
              </a>
              <a href='https://www.tiktok.com/@nightmare_harvester' target="_blank"> 
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href='https://www.facebook.com/nightmareharvester' target="_blank">
                <i className="fa-brands fa-square-facebook"></i>              
              </a>
              <a href='https://www.instagram.com/nightmareharvester/' target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="copyright">
              &copy; 2023 Nightmare Harvester - All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer;