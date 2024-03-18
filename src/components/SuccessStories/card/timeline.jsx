import React from "react";

function Component() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex justify-center">
        <div className="w-2/3 mx-auto">
          <div className="flex flex-row w-full">
            {/* left col */}
            <div className="w-2/5 px-2 py-10">
              <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                <div className="text-gray-600 mb-2 flex justify-between">
                  <div className="font-bold">Svjatoslav Torn</div>
                  <div className="flex flex-row">
                    <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"></button>
                    <button className="text-red-500 hover:text-red-300 transition duration-200"></button>
                  </div>
                </div>
                <div className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  explicabo quae. Architecto blanditiis corrupti quam dicta,
                  libero, voluptas mollitia maxime eum consequatur esse fuga ab
                  soluta eveniet autem ipsum a.
                </div>
              </div>
            </div>
            {/* line column */}
            <div className="w-1/5  flex justify-center">
              <div className="relative flex h-full w-1 bg-[#c8a1f4] items-center justify-center">
                <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#9B3587] leading-none text-center bg-white font-thin">
                  {/* <div>20</div>
                  icon
                  <div>сентября</div> */}
                </div>
              </div>
            </div>
            {/* right column */}
            <div className="w-2/5 px-2 py-10 "></div>
          </div>
          {/* second row */}
          <div className="flex flex-row w-full">
            {/* left col */}
            <div className="w-2/5 px-2 py-10"></div>
            {/* line column */}
            <div className="w-1/5  flex justify-center">
              <div className="relative flex h-full w-1 bg-[#c8a1f4] items-center justify-center">
                <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#9B3587] leading-none text-center bg-white font-thin">
                  {/* <div>20</div>
                  icon 2
                  <div>сентября</div> */}
                </div>
              </div>
            </div>
            {/* right column */}
            <div className="w-2/5 px-2 py-10 ">
              <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                <div className="text-gray-600 mb-2 flex justify-between">
                  <div className="font-bold">Svetlana Torn</div>
                </div>
                <div className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                  velit sint sed? Quidem doloremque natus odio, quo id quos
                  repudiandae deserunt placeat perspiciatis facere ipsa nam,
                  minima eveniet unde excepturi.
                </div>
              </div>
            </div>
          </div>
          {/* third row */}
          <div className="flex flex-row w-full">
            {/* left col */}
            <div className="w-2/5 px-2 py-10">
              <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                <div className="text-gray-600 mb-2 flex justify-between">
                  <div className="font-bold">Svjatoslav Torn</div>
                  <div className="flex flex-row">
                    <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"></button>
                    <button className="text-red-500 hover:text-red-300 transition duration-200"></button>
                  </div>
                </div>
                <div className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique voluptas doloribus quos eius est maxime, veritatis
                  nisi vero esse. Aspernatur dignissimos iure nihil
                  consequuntur, esse maxime quibusdam culpa sint minus.
                </div>
              </div>
            </div>
            {/* line column */}
            <div className="w-1/5  flex justify-center">
              <div className="relative flex h-full w-1 bg-[#c8a1f4] items-center justify-center">
                <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#9B3587] leading-none text-center  bg-white font-thin">
                  {/* <div>20</div>
                  iccon 3
                  <div>сентября</div> */}
                </div>
              </div>
            </div>
            {/* right column */}
            <div className="w-2/5 px-2 py-10 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
