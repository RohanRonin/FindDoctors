import React from "react";

import "./Home.css";
import NavBar from "./NavBar";


const Home = () => {
  return (
    <>
    <NavBar/>
      <img
        src="https://telegra.ph/file/175dee0b21336504a8282.jpg"
        className="doctor-amma"
        alt="HealthConnect"
      />
      <div className="description">
        <h1 style={{ fontSize: 50 }}>Welcome to FindDoc</h1>
        <p className="subheading">
          Your Gateway to Premier Healthcare Services
        </p>
        <p className="details">
          At <span className="health">FindDoc</span>, we are dedicated to
          providing you with the highest quality of healthcare services, right
          at your fingertips. Our platform connects you with an extensive
          network of top-rated hospitals and specialists, ensuring that you
          receive the best care possible.
        </p>
      </div>


    </>
  );
};

export default Home;
