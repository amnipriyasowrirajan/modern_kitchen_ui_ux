import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.s_screw} alt="s_screw_image" className="s_screw__img" />
  </div>
);

export default SubHeading;
