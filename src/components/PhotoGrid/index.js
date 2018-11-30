import React from 'react';
import './PhotoGrid.css';

const PhotoGrid = () => (
  <div className="PhotoGrid">
    <div className="PhotoGrid-row">
      <div className="PhotoGrid-column">
        <img className="widthSet" src="/images/bb-4.jpg" alt="bb4" />
        <img className="widthSet" src="/images/bb-12.jpg" alt="bb12" />
        <img className="widthSet" src="/images/bb-9.jpg" alt="bb9" />
        <img className="widthSet" src="/images/bb-13.jpg" alt="bb13" />
      </div>
      <div className="PhotoGrid-column">
        <img className="widthSet" src="/images/bb-11.jpg" alt="bb11" />
        <img className="widthSet" src="/images/bb-8.jpg" alt="bb8" />
        <img className="widthSet" src="/images/bb-14.gif" alt="bb14" />
        <img className="widthSet" src="/images/bb-15.jpg" alt="bb15" />

        <img className="widthSet" src="/images/bb-7.jpg" alt="bb7" />
      </div>
      <div className="PhotoGrid-column">
        <img className="widthSet" src="/images/bb-5.jpg" alt="bb5" />
        <img className="widthSet" src="/images/bb-3.jpg" alt="bb3" />
        <img className="widthSet" src="/images/bb-10.jpg" alt="bb10" />
        <img className="widthSet" src="/images/bb-2.jpg" alt="bb2" />
        <img className="widthSet" src="/images/bb-1.jpg" alt="bb1" />
        <img className="widthSet" src="/images/bb-6.jpg" alt="bb6" />
      </div>
    </div>
  </div>
);

export default PhotoGrid;
