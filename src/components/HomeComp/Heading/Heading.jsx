import React from "react";

const Heading = ({ headtext, subhead }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-8">
        <div className="text-primarytxt text-3xl font-semibold font-['Source Sans Pro'] m-2 text-center ">
          {headtext}
        </div>
        <div className="">
          <img
            className="scale-90"
            src={
              "https://res.cloudinary.com/dt3lzix8e/image/upload/v1704134522/Line_2_xtj6iv.png"
            }
          />
        </div>
        <div className="text-secondarytxt text-xl font-normal font-['Source Sans Pro'] m-2 text-center">
          {subhead}
        </div>
      </div>
    </>
  );
};

export default Heading;
