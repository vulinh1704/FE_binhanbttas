import React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
const LandingTourItem = ({ imgBg, title, des, price, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ translateY: -8 }}
      transition={{ type: "spring", duration: 1.5 }}
      className="w-full ease-in-out hover:shadow-lg gap-2 p-3 bg-bg rounded-xl flex flex-col"
    >
      <img src={imgBg} alt="" className="rounded-xl" />
      <div className="flex flex-col">
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
    </motion.div>
  );
};

export default LandingTourItem;
