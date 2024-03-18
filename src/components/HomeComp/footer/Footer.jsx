import React from "react";
import { footlinks } from "../../const/const";

const Footer = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full h-60 bg-black gap-4 ">
        <div className="h-max flex flex-row items-center justify-center gap-8  ">
          {footlinks.map((icon) => (
            <a
              key={icon.alt}
              href={icon?.link}
              //   target="_blank"
              className="rounded-full hover:scale-125  hover:border-black hover:border-[2px] transition-all"
              //   hover:invert duration-300 ease-in-out cursor-pointer
            >
              <img src={icon.src} alt={icon.alt} width={48} height={48} />
            </a>
          ))}
        </div>
        <div>
          <p className=" bg-black text-center text-white text-xs font-normal font-['Source Sans Pro'] ">
            © 2023 Coding Decoded. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
