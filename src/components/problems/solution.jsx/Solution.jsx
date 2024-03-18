import React from 'react';

const Solution = () => {
  return (
    <div className="m-5 sm:m-10">
      <p className="text-2xl font-bold mb-5 sm:mb-10">Video solution for the problem</p>
      <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
        <iframe
          className="rounded-xl w-[300px] sm:w-[500px] sm:h-[315px] h-[215px]"
          src="https://www.youtube.com/embed/tO0tX9FCrss?si=y_67Pf1Y1f-A4lPy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Solution;
