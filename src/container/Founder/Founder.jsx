import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Founder.css';

const Founder = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.founder} alt="founder_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Designer's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__founder-content">
        <div className="app__founder-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Our core belief centers around the fusion of quality and affordability.</p>
        </div>
        <p className="p__opensans">At MB Design, we are unwavering in our commitment to a singular, driving goal: to provide the best quality kitchens at the most affordable cost. Our mission is to deliver a kitchen that not only impresses with its amazing finish but also excels in practicality and everyday usability. </p>
      </div>

      <div className="app__founder-sign">
        <p>Jeyaratnam</p>
        <p className="p__opensans">Designer & Founder</p>
      </div>
    </div>
  </div>
);

export default Founder;
