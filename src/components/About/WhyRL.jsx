import React from "react";
import Rectangle from "../../assets/Rectangle.png";
const WhyRL = ({ number, title, text }) => {
  return (
    <section className="section">
      <div className="flex flex-col-reverse items-center justify-center w-full h-max xl:flex-row xl:py-8 xl:px-48 xl:justify-between">
        <div className="w-full flex flex-row justify-center xl:justify-start items-center xl:w-1/2">
          <img src={Rectangle} alt="" />
        </div>
        <div className="flex flex-col w-3/4 h-[90%]  items-center justify-center py-16  hover:scale-110 transition-all md:w-[42%]">
          <div className="flex flex-col gap-8   items-start w-full h-max mb-8 sm:flex-row sm:items-center">
            <div className="flex flex-col bg-[#5F5870] justify-center items-center p-3 rounded-full text-center  text-textinfo text-5xl font-black font-['Source Sans Pro'] sm:p-6">
              {number}
            </div>
            <p className="text-textinfo text-4xl font-bold font-['Source Sans Pro']  ">
              {title}
            </p>
          </div>
          <div className="w-full">
            <p className=" text-secondarytxt text-base font-normalfont-['Source Sans Pro']">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRL;
