import React from 'react';
import './Footer.css';
import facebook from '../../Assets/facebookIcon.svg'
import instagram from '../../Assets/instagramIcon.svg'
import naza from '../../Assets/naza_logo1.png'

const Footer = () => {

  let date = new Date().getFullYear();
  return (
    <div id="footer">
    <div className="footer-logo">
      <img src={naza} alt="logo" />
    </div>
    <div className="footer-links">
      <div className="footer-link">
        <div className="web-logos">
          <a href="https://www.facebook.com/nazifsalisu_official">
            <img src={facebook} alt="" className="web-logo"/>
          </a>
          <a href="https://www.instagram.com/nazifsalisu_official">
            <img src={instagram} alt="" className="web-logo"/>
          </a>
        </div>
        <h1 className='h-footer'>Nazif Salisu</h1>
        <div className='footer-copyright'>
          <p>&copy; {date} Nazif Salisu, All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Footer;
