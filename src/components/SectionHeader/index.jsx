import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const SectionHeader = ({
  isShowButton = true,
  href,
  children,
  des,
  titleClass,
}) => {
  return (
    <div className="flex md:items-center gap-3 md:gap-0 items-start flex-col md:flex-row justify-between">
      <div className="flex flex-col md:gap-4">
        <h2
          className={`heading-6 md:heading-4 text-secondary font-roboto ${titleClass}`}
        >
          <strong>{children}</strong>
        </h2>
        <p className="text-text pl-2 small md:max-w-[500px] md:big">{des}</p>
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
