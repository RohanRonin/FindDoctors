import React from 'react';
import './MedicalServices.css';
import limg from '../../assets/images.jpg';
import { Link } from 'react-router-dom';
const MedicalServices = () => {
    return (
        <section className="medical-services">
            <div className="content-wrapper">
                <div className="image-container">
                    <div className="doctor-image">
                        {/* Replace 'doctor.png' with your image */}
                        <img src={limg} alt="Doctor with Patient" />

                        <div className="medical-icon">
                            {/* Replace 'medical-icon.png' with your image */}
                            <img src="medical-icon.png" alt="Medical Icon" />
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h2>About Us</h2>
                    <h1>Medical Services & Diagnostics</h1>
                    <p>Committed To Delivering High-Quality Medical & Diagnostics Services!</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <ul className="services-list">
                        <li>Ambulance Services</li>
                        <li>Pharmacy on Clinic</li>
                        <li>24/7 Medical Emergency</li>
                        <li>Oxizen on Wheel</li>
                        <li>On duty Doctors</li>
                    </ul>
                    <Link to="/user-login">
                    <button className="discover-button" >Discover More</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MedicalServices;
