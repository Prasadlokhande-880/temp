import { statistics } from "../../const/const";
import { useState, useEffect } from "react";
import Linkedin from "../../../assets/Linkedin.svg";
import polygon from "../../../assets/Polygon.svg";


const formatNumber = (number) => {
  if (number < 1000) {
    return number;
  } else {
    return Math.floor(number / 1000) + "k";
  }
};

const Statistics = () => {
  const [animatedStatistics, setAnimatedStatistics] = useState({
    youtube: 0,
    linkedin: 0,
    instagram: 0,
    telegram: 0,
  });
  useEffect(() => {
    const animationDuration = 3500;
    const targetStatistics = {
      youtube: 10000,
      linkedin: 500,
      instagram: 250000,
      telegram: 250000,
    };

    const stepDuration = animationDuration / 100;

    const updateStatistics = (currentStep) => {
      if (currentStep >= 100) {
        setAnimatedStatistics(targetStatistics);
      } else {
        setTimeout(() => {
          const percentage = (currentStep + 1) / 100;
          setAnimatedStatistics({
            youtube: Math.floor(percentage * targetStatistics.youtube),
            linkedin: Math.floor(percentage * targetStatistics.linkedin),
            instagram: Math.floor(percentage * targetStatistics.instagram),
            telegram: Math.floor(percentage * targetStatistics.telegram),
          });
          updateStatistics(currentStep + 5);
        }, stepDuration);
      }
    };

    updateStatistics(0);
  }, []);

  return (
    <section className="section">
      <div className="flex flex-row justify-evenly items-center md:mx-20 my-6 flex-wrap">
        {statistics.map((stat) => (
          <div key={stat.label}>
            <div className="flex flex-row justify-center items-center hover:scale-110 transition-all  ">
              <img
                src={polygon}
                alt="icon"
                className=" scale-110 relative -z-1"
              />
              <div className="absolute    flex flex-col items-center">
                <img src={Linkedin} alt="icon" className=" h-16 w-16 m-2" />
                <p className="text-zinc-400 text-4xl font-black font-['Source Sans Pro'] mb-2">
                  {formatNumber(animatedStatistics[stat.label.toLowerCase()])}+
                </p>
                <p className="leading-7 text-textinfo text-xs font-normal font-['Source Sans Pro'] font-Source Sans Pro']">
                  {stat.info}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Statistics;
