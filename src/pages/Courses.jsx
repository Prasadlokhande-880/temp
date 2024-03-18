import React from "react";
import Courses from "../components/Courses/Courses";
import Navbar from "../components/HomeComp/Navbar/Navbar";
import Footer2 from "../components/HomeComp/footer/Footer2";

const Courses1 = () => {
  return (
    <div>
      <Navbar />
      <Courses />
      <div className="mt-[100px]">
        <Footer2 />
      </div>
    </div>
  );
};

export default Courses1;
