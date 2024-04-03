import React from "react";
import icon from "../../../images/landing/travel.png";

const LandingTourItem = ({ imgBg, title, des, price }) => {
  return (
    <div className="w-full transition-transform duration-150 ease-in-out hover:translate-y-[-8px] hover:transform hover:shadow-lg max-w-[315px] max-h-[439px] gap-4 p-3 hover:bg-line bg-bg rounded-xl flex flex-col">
      <img src={imgBg} alt="" className="rounded-xl" height={200} />
      <div className="flex flex-col gap-2">
        <h2 className="heading-6 font-bold text-secondary truncate text-nowrap">
          {title}
        </h2>
        <p className="big font-normal text-green line-clamp-3 text-wrap truncate ">
          VND {price}
        </p>
        <p className="big font-normal text-text line-clamp-3 text-wrap truncate ">
          {des}
        </p>
      </div>
    </div>
  );
};

export default LandingTourItem;
