import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hhero.css';

const Hhero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="text-container">
                    <h1>The Art of Healthcare Starts Right Now</h1>
                    <h2>We offer <span className="highlight">complete</span> Healthcare services.</h2>
                    <p>
                        It is not only the medicine that cures and recovers your health earlier, 
                        it is the Healthcare team who loves the art of treatment with love.
                    </p>
                    <button 
                        className="explore-button" 
                        onClick={() => navigate("/user-login")} 
                    >
                        Explore Our Service
                    </button>
                </div>
                <div className="image-container">
                    <img src="doctor.png" alt="Doctor" />
                </div>
            </div>
            <div className="features-container">
                <div className="feature-item">
                    <img src="icon1.png" alt="Qualified Doctor" />
                    <h3>Qualified Doctor</h3>
                    <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
                </div>
                <div className="feature-item">
                    <img src="icon2.png" alt="Emergency Help" />
                    <h3>Emergency Help</h3>
                    <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
                </div>
                <div className="feature-item">
                    <img src="icon3.png" alt="Modern Equipment" />
                    <h3>Modern Equipment</h3>
                    <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
                </div>
                <div className="feature-item">
                    <img src="icon4.png" alt="Family Medicine" />
                    <h3>Family Medicine</h3>
                    <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
                </div>
            </div>
        </section>
    );
};

export default Hhero;
