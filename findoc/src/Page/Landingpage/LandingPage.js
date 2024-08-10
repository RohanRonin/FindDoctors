import React from "react";
import Hero from "./Lhero";
import Feature from "../Landingpage/Feature";
import OurDoctors from "./MedicalServices";
import NavBar from "../Landingpage/Lnavbar";
import ProcessSteps from "./ProcessSteps";
const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <OurDoctors />
      <Feature />
      <ProcessSteps />
    </>
  );
};

export default LandingPage;
