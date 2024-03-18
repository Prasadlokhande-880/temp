import ReviewCard from "../Review/Review";
import { reviews } from "../../const/const";
import { useEffect, useState } from "react";


const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = reviews.length - 1;
    } else if (newIndex >= reviews.length) {
      newIndex = newIndex % reviews.length;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let intervalFunc;
    if (autoplay) {
      intervalFunc = setInterval(() => {
        updateIndex((activeIndex + 1) % reviews.length);
      }, 3000);
    }
    return () => {
      clearInterval(intervalFunc);
    };
  }, [activeIndex, autoplay]);

  const handlePlayPauseToggle = () => {
    setAutoplay(!autoplay);
  };

  return (
    <section className="section flex justify-center items-center flex-col p-8">
      <div className="max-container"></div>
      <div className="">
        <div className="carousel">
          <div
            className="inner mb-4"
            style={{
              transform: `translate(-${activeIndex * 100}%)`,
            }}
          >
            {reviews.map((review, index) => {
              return <ReviewCard review={review} key={index} />;
            })}
          </div>

          <div className="carousel-buttons">
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              <span className="material-symbols-outlined text-textinfo">
                arrow_back_ios
              </span>{" "}
            </button>

            <div className="indicators">
              {reviews.map((item, index) => {
                return (
                  <button
                    className="indicator-buttons"
                    key={index}
                    onClick={() => {
                      updateIndex(index);
                    }}
                  >
                    <span
                      className={`material-symbols-outlined  ${
                        index === activeIndex
                          ? "indicator-symbol-active"
                          : "indicator-symbol"
                      }`}
                    >
                      radio_button_checked
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              <span className="material-symbols-outlined text-textinfo">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="justify-center flex">
        <button onClick={handlePlayPauseToggle}>
          <span className="material-symbols-outlined text-textinfo">
            {autoplay ? "pause" : "play_arrow"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
