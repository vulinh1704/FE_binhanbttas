import React from "react";

const SectionLayout = ({ className, children }) => {
  return (
    <div
      className={`md:px-10 py-[60px] md:py-20 xl:px-[200px] px-5 flex flex-col gap-8 2xl:gap-[60px] ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionLayout;
