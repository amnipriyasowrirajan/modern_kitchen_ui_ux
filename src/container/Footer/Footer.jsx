import React from 'react';
// import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">380 Finchdene Square,Unit 14,Scarborough, ON M1X IC9,Markham,Canada</p>
        <p className="p__opensans">+1 416-895-9528</p>
       
      </div>

      <div className="app__footer-links_logo">
        <img src={images.mb_logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Our clients are at the heart of what we do.&quot;</p>
        <img src={images.s_screw} alt="about_small_screw" className="s_screw__img" style={{ marginTop: 15 }} />
        {/* <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div> */}
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 07:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 05:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{(new Date().getFullYear())} MB Design. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
