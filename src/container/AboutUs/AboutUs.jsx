import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.MB} alt="MB_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.s_screw} alt="about_small_screw" className="screw__img" />
        <p className="p__opensans">With over three decades of unwavering dedication to excellence, we are the trusted name in kitchen design, closet solutions, and general renovations. At MB Design, Our belief in offering high-quality solutions at reasonable costs has made us a trusted choice for countless homeowners.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.screw} alt="about_screw" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Journey</h1>
        <img src={images.s_screw} alt="about_small_screw" className="screw__img" />
        <p className="p__opensans">Our journey began 30 years ago when we embarked on a mission to redefine kitchens, closets, and living spaces. Since then, we have left an indelible mark in the industry, transforming countless houses into homes and revolutionizing the art of kitchen and interior design.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
