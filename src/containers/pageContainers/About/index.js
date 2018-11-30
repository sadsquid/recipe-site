import React from 'react';
import './About.css';
import PhotoGrid from '../../../components/PhotoGrid';

const About = () => (
  <div className="About">
    <div className="About-content">
      <p className="About-quote">
        " We should have a site where we can show people pictures of{' '}
        <span className="About-bold">us</span>
        {' and '}
        <span className="About-bold">food</span>
        {' and '}
        <span className="About-bold">stuff</span> "
      </p>
      <PhotoGrid />
      <p className="About-quote" />
      <p className="About-maintext"> </p>
    </div>
  </div>
);

export default About;
