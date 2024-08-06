import React from "react";
import Hero from "./Lhero";
import Review from "./Review";
import  './LandingPage.css';
import NavBar from "../../Components/NavBar/NavBar";
const LandingPage = () => {
  return (
    <>
    <NavBar />
      <Hero />
    </>
  );
};

export default LandingPage;
