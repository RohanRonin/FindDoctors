import React, { useState, useEffect } from 'react';

import NavBar from '../Components/NavBar/NavBar';
import './EventPage.css';

import image1 from '../Assert/Onco.webp';
import image2 from '../Assert/logo.png';
import image3 from '../Assert/logo.png';

const images = [image1, image2, image3];

const EventPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="event-page">
      <NavBar />
      <div className="slide-show-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className="content">
        <h1>Upcoming and Past Events</h1>
        <p>Explore all the upcoming and past events here. Stay informed about health fairs, awareness campaigns, seminars, and more.</p>
      </div>
    </div>
  );
};

export default EventPage;
