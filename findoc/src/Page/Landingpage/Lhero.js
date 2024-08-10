import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lhero.css';


const Lhero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="text-container">
                    <h1>
                        Highest level of service you can find
                    </h1>
                    <h2>
                        Take <span>Care of Your</span> Health Now.
                    </h2>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                    <button 
                    className="explore-button" 
                    onClick={() => navigate("/default")} // Adjust the route path as necessary
                    >
                    Explore Our Service
                    </button>
                </div>
                <div className="image-container">
                    <img src="doctor.png" alt="Doctor with Patient" />
                </div>
            </div>
        </section>
    );
};

export default Lhero;
