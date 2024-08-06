// HomePage.js
import React, { useState, useEffect } from 'react';
import HospitalCard from "../../Components/HospitalCards/HospitalCard";
import DoctorCard from "../../Components/HospitalCards/HospitalCard";
import './HomePage.css';
import NavBar from "../../Components/NavBar/NavBar";
import image1 from '../../Assert/Onco.webp';
import image2 from '../../Assert/City.jpg';
import image3 from '../../Assert/City.jpg'; // Add more images as needed

const images = [image1, image2, image3];

const topRatedHospitals = [
  {
    id: 1,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/1cf2a543d67ff270eef04.jpg",
  },
  {
    id: 2,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  {
    id: 3,
    name: "Kilpauk Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/96e0d65c056e003ca98c2.jpg",
  },
  {
    id: 4,
    name: "Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  // Add more hospitals as needed
];

const topRatedDoctors = [
  {
    id: 1,
    name: "Dr. Sharmila",
    specialty: "Cardiology",
    location: "Coimbatore",
    image: "https://graph.org/file/40e4a1407d30d3e51295a.jpg",
  },
  {
    id: 2,
    name: "Dr. Pavithran",
    specialty: "Neurology",
    location: "Madurai",
    image: "https://graph.org/file/0bcd57c3960e76ad33a55.jpg",
  },
  // Add more doctors as needed
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <div className="home-des">
        <div className="intro-section">
          <div className="intro-text">
            <h2><span style={{ color: 'red' }}>Welcome to FinDoc</span></h2>
            <h1>Your Health, Your Location, Your Choice</h1>
            <p>At FinDoc, we believe in making healthcare accessible and convenient for everyone. Whether you're new in town, traveling, or just need to find the best medical facilities near you, FinDoc is here to help.</p>
          </div>
          <div className="intro-image">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
        </div>
      </div>
      <div className="top-rated-section">
        <h2>Top Rated Hospitals</h2>
        <div className="hospital-cards-container">
          {topRatedHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} {...hospital} />
          ))}
        </div>

        <h2>Top Rated Doctors</h2>
        <div className="doctor-cards-container">
          {topRatedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
