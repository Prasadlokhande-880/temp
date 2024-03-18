import React from 'react'
import Navbar from '../components/HomeComp/Navbar/Navbar'
import Footer from '../components/HomeComp/footer/Footer'
import Header from '../components/HomeComp/Header/Header'
import CardComponent from '../components/SuccessStories/card/card'
import Footer2 from "../components/HomeComp/footer/Footer2";
import Timeline from '../components/SuccessStories/card/timeline'
import Heading from "../components/HomeComp/Heading/Heading";

const SuccessStories = () => {
  return (
    <div>
        <Navbar/>
        <Header heading={"Success Stories"} text={"Hear from students about their experience of getting their dream job in their dream company!"} button={false}/>
        <CardComponent/>
        <Heading
          headtext={"OurPrinciples"}
          subhead={
            "We believe in our audience and would value them the most. Your support is our biggest assets"
          }
        />
        <Timeline/>
        <Footer2/>
    </div>
  )
}

export default SuccessStories
