import React from "react";
import AboutUS from "../components/About/AboutUs";
import WhyUs from "../components/About/WhyUs";
import Navbar from "../components/HomeComp/Navbar/Navbar";
import Footer from "../components/HomeComp/footer/Footer";
import Footer2 from "../components/HomeComp/footer/Footer2";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUS />
      <WhyUs />
      <Footer2/>
    </div>
  );
};

export default About;
