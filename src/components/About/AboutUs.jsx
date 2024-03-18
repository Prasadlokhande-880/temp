import React from "react";
import Rectangle from "../../assets/Rectangle.png";

const Aboutt = () => {
  return (
    <section className="section">
      <div className="flex flex-col w-full h-auto p-0 lg:h-screen lg:flex-row  justify-between items-center px-32">
        <div className="flex flex-col  h-screen justify-between lg:w-2/5 ">
          <p className="m-0 text-primarytxt text-3xl font-semibold font-['Source Sans Pro'] ">
            About
          </p>
          <div className="m-0 text-secondarytxt text-xl font-normal font-['Source Sans Pro']">
            Hey everyone, this is Sunchit Dudeja, the youngest SDE-V at Adobe
            with 8+ years of experience as a system design architect and cloud
            architect. I am taken over more than 300+ interviews spread across
            SDE-1 to SDE-3 including engineering managers. I'm here to present
            Coding Decoded, a channel that will help you love engineering.
            <br />
            <br />I know you can do it! With my help, you'll be well on your way
            to becoming a better engineer and landing the job of your dreams.
            <br />
            <br />
            Join me on Coding Decoded today and start your journey to becoming a
            better engineer!
          </div>

          <button className="w-64 h-16 text-xl font-normal font-['Source Sans Pro'] m-2  bg-gradient-to-t from-purple-900 to-pink-900 rounded-full text-white px-5 shadow-[rgba(13,_38,_76,_0.19)_0px_3px_10px] hover:shadow-[#c8a1f4] transition duration-500 ease-in-out">
            View Channel
          </button>
        </div>
        <div className=" flex flex-col w-80  mb-0 justify-center border-dashed rounded-xl border-4 border-fuchsia-800 md:w-1/2 m-3 p-3">
          <img src={Rectangle} alt="" className="h-80" />
        </div>
      </div>
    </section>
  );
};

export default Aboutt;
