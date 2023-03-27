import React, { useState, useEffect } from 'react';
import wdPic from '../components/assets/images/WDIWDpic.png';
import weatherdashPic from '../components/assets/images/weatherdashPic.png';
import marketPlacePic from '../components/assets/images/MarketPlacepic.png';
import hpFanPagePic from '../components/assets/images/HrryPotterFanPage.png';
import dayPlannerPic from '../components/assets/images/dayplannerPic.png';
import noteTakerPic from '../components/assets/images/notetakerhp.png';

function SlideShow() {
  const [currentImg, setCurrentImg] = useState(0);
  const images = [
    wdPic,
    weatherdashPic,
    marketPlacePic,
    hpFanPagePic,
    dayPlannerPic,
    noteTakerPic,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((currentImg + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
}, [currentImg, images.length]);

return (
  <div className="slideshow-container">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`${"Image" + index + 1}`}
        className={`slideshow-image ${
          index === currentImg ? 'active' : 'inactive'
        }`}
      />
    ))}
  </div>
);
}

export default SlideShow;