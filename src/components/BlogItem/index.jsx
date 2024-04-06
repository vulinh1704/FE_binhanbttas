import React from "react";
import { motion } from "framer-motion";

const BlogItem = ({ img, title, des, createAt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 1.5 }}
      className="w-full flex gap-3 group xl:gap-10 relative z-10 items-center py-8 xl:py-[60px] border-b border-line"
    >
      <div className="overflow-hidden rounded-lg min-w-[100px] xl:w-[250px]">
        <img
          src={img}
          alt=""
          className="max-w-[100px] xl:max-w-full rounded-lg group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className=" flex flex-col w-full h-full gap-1 xl:gap-3">
        <h2 className="xl:heading-4 font-mont heading-6 leading-6 xl:font-bold line-clamp-2 group-hover:text-primary text-secondary font-bold">
          {title}
        </h2>
        <p className="line-clamp-3 font-semibold caption-1 xl:heading-6 group-hover:text-primary heading-6">
          {des}
        </p>
        <p className="w-full caption-2 font-normal">Tạo ngày: {createAt}</p>
      </div>
    </motion.div>
  );
};

export default BlogItem;
