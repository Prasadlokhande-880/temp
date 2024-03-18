import React from "react";

const ready = () => {
  return (
    <div className="w-[90%] m-auto mt-4 bg-slate-900 p-4 rounded-[20px] flex justify-between items-center">
      <div className="w-[80%]">
        <h3 className="text-primarytxt text-3xl font-semibold font-['Source Sans Pro'] m-2 p-2">
          Ready to join?
        </h3>
        <p className="text-secondarytxt text-xl font-normal font-['Source Sans Pro'] m-2 p-2">
          Learn from experienced and knowledgeable instructors who are experts
          in his respective fields, ensuring high quality education.
        </p>
      </div>
      <div>
        <a href="/Courses">
          <button
            type="button"
            id="text"
            className="border-gradient bg-[#0F0529] text-white px-6 py-2 m-3 border-2 rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_3px_10px] hover:shadow-[#c8a1f4] transition duration-500 ease-in-out"
          >
            Register Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default ready;
