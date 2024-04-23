import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const SectionHeader = ({ isShowButton = true, href, children, titleClass }) => {
  return (
    <div className="flex md:items-center items-start flex-col md:flex-row justify-between">
      <div className="flex flex-col md:gap-4 w-full">
        <h2 className={`big md:heading-5 font-roboto ${titleClass}`}>
          <strong>{children}</strong>
        </h2>
      </div>
      {isShowButton && (
        <Button
          asChild
          variant="ghost"
          className="md:text-lg items-center hover:bg-primary/70 hover:text-white justify-center gap-1"
        >
          <Link to={href}>
            Xem thêm
            <ArrowRightIcon className="max-h-3 mt-1" />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default SectionHeader;
