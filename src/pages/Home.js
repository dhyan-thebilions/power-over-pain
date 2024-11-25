import React from "react";
// components
import HomeWelcome from "../components/HomeWelcome";
import HomeStart from "../components/HomeStart";
import Transformation from "../components/Transformation";
import HomeAbout from "../components/HomeAbout";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <HomeWelcome />
      <HomeStart />
      <Transformation />
      <HomeAbout />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
