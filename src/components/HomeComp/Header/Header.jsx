import React from "react";

import img2 from "../../../assets/1697046125657-removebg-preview 1.png";
import img3 from "../../../assets/Group 2608538.png";

const Header = ({ heading, text, button }) => {
  const gradientStyle = {
    backgroundImage:
      "radial-gradient(50% 50% at 50% 50%, rgba(155, 53, 135, 0.24) 50%, rgba(15, 5, 41, 0.6) 100%)",
    backgroundPosition: "right",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: "-3",
  };

  return (
    <div>
      <div className="pt-8 pb-2 my-1">
        {/* Check and define 'bg-gradient-radial' or replace it with appropriate Tailwind classes */}
        <section
          className="bg-gradient-radial w-[50%] h-[80%] absolute at-center  left-[-90px] top-[5px]"
          style={gradientStyle}
        ></section>

        <div className="flex flex-col p-2 md:p-5 m-2 md:m-3 md:flex-row items-stretchr">
          <div className="p-1 m-1 z-[1] self-center">
            <section className="p-3 md:p-5 m-2 md:m-4 font-sans md:text-5xl sm:text-4xl text-3xl font-black leading-10  text-[#F5F4F3]">
              {heading}
            </section>
            <section className="md:text-[34px] sm:text-3xl text-2xl p-3 leading-loose md:p-5 m-2 md:m-4 font-sans tracking-normal font-normal text-[#F5F4F3]">
              {text}
            </section>
            <section className="p-3  m-2  font-sans">
              {button ? (
                <button className="p-3 m-3 bg-gradient-to-t from-purple-900 to-pink-900 rounded-full text-white font-normal py-3 px-5 shadow-[rgba(13,_38,_76,_0.19)_0px_3px_10px] hover:shadow-[#c8a1f4] transition duration-500 ease-in-out">
                  Free Courses
                </button>
              ) : (
                <></>
              )}
            </section>
          </div>

          <div className="m-auto w-[100%] relative  top-[-20px] ">
            <div className="animate-bounce text-white absolute top-[50px]">
              <pre>this is prasad</pre>
            </div>
            <img
              src={img2}
              alt="header img"
              className="w-[100%] absolute top-[-10%]  rounded-full"
            />
            <img src={img3} alt="header img" className="rounded-xl w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
