import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from './NavBar'; // Adjust the import path as necessary
import "./Events.css"
import NewsCard from '../Component/NewsCard';
import AboutUs from './AboutUs';

const EventPage = () => {
  const events = [
    {
      image: 'https://graph.org/file/b0e894be7bf70ef6a53e8.jpg',
      title: 'International Medical Expo 2024',
      date: '15-18 Aug 2024',
      description: 'A comprehensive event showcasing the latest advancements in medical technology and healthcare solutions.',
      location: 'Chennai Trade Centre, Chennai',
      link: '#',
    },
    {
      image: 'https://graph.org/file/b0e894be7bf70ef6a53e8.jpg',
      title: 'Cardiology Conference 2024',
      date: '2 Aug 2024',
      description: 'An in-depth conference covering the latest research, treatments, and innovations in cardiology.',
      link: '#',
    },
    {
      image: 'https://graph.org/file/b0e894be7bf70ef6a53e8.jpg',
      title: 'Mental Health Awareness Seminar',
      date: 'Every Sunday till September | 4PM - 6PM',
      description: 'A seminar focused on raising awareness and providing resources for mental health support.',
      discount: 'Free Entry for Students',
      link: '#',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <NavBar />
      <div className="event-page">
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="event-slide">
              <img src={event.image} alt={event.title} />
              <div className="event-details">
                <h2>{event.title}</h2>
                <p>{event.date}</p>
                <p>{event.description}</p>
                {event.discount && <p>{event.discount}</p>}
                <a href={event.link} className="book-now">
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <NewsCard />
      <AboutUs />
    </div>
  );
};

export default EventPage;
