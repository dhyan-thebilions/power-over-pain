import React from "react";
// components
import Welcome from "../components/Welcome"
import MyStory from "../components/MyStory"
import Treatment from "../components/Treatment"
import Start from "../components/Start"
import Transformation from "../components/Transformation"
import Footer from "../components/Footer"
const AboutUs = () => {
    return (
        <React.Fragment>
            <Welcome />
            <MyStory />
            <Treatment /> 
            <Start />
            <Transformation />
            <Footer />
        </React.Fragment>
    )
};

export default AboutUs;
