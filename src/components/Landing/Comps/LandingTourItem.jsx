import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
const LandingTourItem = ({ imgBg, title, des, price, href }) => {
  return (
    <div className="w-full transition-transform duration-150 ease-in-out hover:translate-y-[-8px] hover:transform hover:shadow-lg max-w-[315px] gap-4 p-3 bg-bg rounded-xl flex flex-col">
      <img src={imgBg} alt="" className="rounded-xl" height={200} />
      <div className="flex flex-col gap-1">
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
      <div className="w-full flex items-center justify-center">
        <Button
          asChild
          variant="link"
          size="mini"
          className="hover:bg-line/70 w-fit !no-underline"
        >
          <Link to={href}>Xem thêm</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingTourItem;
