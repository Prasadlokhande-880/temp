import React from "react";
import img from "../../../assets/image 4.png";
import { footlinks } from "../../const/const";

const cardData = [
  {
    backgroundImage: "/img/card-left.jpg",
    person: {
      name: "John Doe",
      position: "Junior Analyst, Oracle",
      imageSrc: img,
      imageAlt: "card img",
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum sapien sed massa ultrices, vulputate viverra sapien molestie. Nam sit amet sodales enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum sapien sed massa ultrices, vulputate viverra sapien molestie. Nam sit amet sodales enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum sapien sed massa ultrices, vulputate viverra sapien molestie. Nam sit amet sodales enim.`,
  },
  {
    backgroundImage: "/img/card-left.jpg",
    person: {
      name: "John Doe",
      position: "Junior Analyst, Oracle",
      imageSrc: img,
      imageAlt: "card img",
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum sapien sed massa ultrices, vulputate viverra sapien molestie. Nam sit amet sodales enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum sapien sed massa ultrices, vulputate viverra sapien molestie. Nam sit amet sodales enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum sapien sed massa ultrices, vulputate viverra sapien molestie. Nam sit amet sodales enim.`,
  },
];

function CardComponent() {
  return (
    <div>
      {cardData.map((value, index) => (
        <div className="flex justify-center my-[70px] z-10" key={index}>
          <div className="text-gray-700 bg-white shadow-md bg-clip-border rounded-xl m-5 p-5 w-[80%]">
            <div className="flex flex-col md:flex-row self-center bg-clip-border rounded-xl p-[10px] m-[10px] border-[3px]  border-[#9B3587] gap-4">
              <div className="w-[100%] m-[10px]">
                <img
                  src={value.person.imageSrc}
                  className="p-2 m-auto w-[200px]"
                  alt={value.person.imageAlt}
                />
                <section className="p-1 m-1 text-center">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {value.person.name}
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {value.person.position}
                  </p>
                </section>
              </div>
              <div>
                <div className="p-3 mt-[20px] self-center">
                  <section className="font-sans text-base font-light leading-relaxed md:text-left sm:text-center text-left">
                    {value.description}
                  </section>
                </div>
                <div className="p-6 pt-0 flex justify-center md:justify-end">
                  {footlinks.map((link, idx) => (
                    <img
                      src={link.src}
                      className="w-[40px] md:w-[50px] p-1 m-1"
                      alt={link.alt}
                      key={idx}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
