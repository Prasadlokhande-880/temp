import { useState } from "react";

const ReviewCard = ({ review }) => {
  const [viewMoreFeedback, setViewMoreFeedback] = useState(false);
  return (
    <div
      className="inline-flex justify-center items-center flex-col mt-6 hover:scale-110 duration-300 dark:bg-slate-800 transition ease-in-out sm:w-full "
      // style={{ width: "100%" }}
    >
      <div className="flex flex-row justify-center items-center sm:w-80  h-96 ">
        <div className=" bg-[#B8AABB] flex flex-col justify-center items-center rounded-2xl w-[86%] h-[88%]">
          <img
            src={review.imgURL}
            alt="customer"
            className="rounded-full object-cover mb-4 border-black border-b-4 border-r-4"
            width={120}
            height={120}
          />
          <p className="mt-1 text-slate-900 text-center text-xl font-semibold font-['Source Sans Pro']">
            {review.customerName}
          </p>
          <div className="mb-2 h-6 text-center text-slate-900 text-base font-light font-['Source Sans Pro']">
            <p className="">{review.college}</p>
          </div>

          <article
            className={`${
              viewMoreFeedback
                ? "h-auto overflow-auto"
                : "h-[82px] overflow-hidden"
            } carousel-item-text mt-2 text-center text-zinc-900 text-xs font-normal font-['Source Sans Pro']`}
          >
            {review.feedback}
          </article>
          <p
            className="inline-block text-sm cursor-pointer text-blue-600  transition-all duration-300 hover:underline"
            onClick={() => setViewMoreFeedback((prev) => !prev)}
          >
            ...{viewMoreFeedback ? "view less" : "view more"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
