import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";
const LandingNewsItem = ({ href, img, title, des }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.9 }}
      className="w-full shadow-lg group hover:shadow-xl bg-bg rounded-xl h-fit flex flex-col gap-3"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={img}
          alt=""
          className="rounded-xl group-hover:scale-125 transition-transform duration-300 "
        />
      </div>

      <div className="flex flex-col pb-4 gap-3 px-4">
        <div>
          <h2 className="big font-semibold line-clamp-3">{title}</h2>
          {/* <p className="small font-normal line-clamp-4">{des}</p> */}
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
    </motion.div>
  );
};

export default LandingNewsItem;
