import React from "react";
import Banner from "../components/Landing/Session/Banner";
import LandingTour from "../components/Landing/Session/LandingTour";
import LandingService from "../components/Landing/Session/LandingService";
import News from "../components/Landing/Session/News";

const Landing = () => {
  return (
    <>
      <Banner />
      <LandingTour />
      <LandingService />
      <News />
    </>
  );
};

export default Landing;
