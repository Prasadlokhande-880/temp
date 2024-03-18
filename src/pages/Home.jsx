import React, { useState, Suspense } from "react";
import Navbar from "../components/HomeComp/Navbar/Navbar";
import Header from "../components/HomeComp/Header/Header";
import Ourprinciples from "../components/HomeComp/OurPrinciples/OurPrinciples";
import Heading from "../components/HomeComp/Heading/Heading";
import Testimonials from "../components/HomeComp/Testimonials/Testimonials";
import Sat from "../components/HomeComp/sat/sat";
import Footer2 from "../components/HomeComp/footer/Footer2";
import Review2 from "../components/HomeComp/Review/Review2";
import Ready from "../components/HomeComp/readytojoin/ready";
import OrbitalComponent from "../components/orbital/orbitalhtml";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Navbar menuOpen={menuOpen} onToggleMenu={toggleMenu} />

      <div className={menuOpen ? "hidden" : ""}>
        <Header
          heading={"Coding Decoded"}
          text={
            "Hear from students about their experience of getting their dream job in their dream company!"
          }
          button={true}
        />

        <Heading
          headtext={"Our Principles"}
          subhead={
            "We believe in our audience and would value them the most. Your support is our biggest assets"
          }
        />
        <Ourprinciples />
        <Heading
          headtext={"Testimonials"}
          subhead={
            "We are a growing community. Here’s what people have say about us!"
          }
        />
        <Sat />

        <Ready />
        <Testimonials />
        <Footer2 />
      </div>
    </div>
  );
};

export default Home;
