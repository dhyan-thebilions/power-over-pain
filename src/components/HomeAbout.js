import React from "react";
import "../styles/HomeAbout.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="home_about_wrapper">
        <div className="home_about_container">
          <div className="home_about_h1">
            About Payal Mehta
          </div>
          <img
            src="../assets/mystory_image.png"
            alt="home_about_image"
            className="home_about_image"
          />
          <div className="home_about_p">
            Payal is a certified physical therapist dedicated to helping people reclaim their lives from pain. With extensive experience in holistic healing, she empowers individuals to achieve true recovery by addressing the root cause of their pain
          </div>
          <button className="home_about_btn">Learn More About Payal</button>
        </div>
      </div>
    </React.Fragment>
  )
};

export default About;
