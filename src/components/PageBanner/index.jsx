import React from "react";

const PageBanner = ({ bg, title, isShowLink = false, pageName }) => {
  const bgBanner = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <div
      style={bgBanner}
      className="w-full mt-[75px] flex items-center justify-center xl:mt-0 xl:h-[810px] bg-cover h-[540px] "
    >
      <div className="flex flex-col gap-2 xl:gap-8 justify-center items-center">
        {isShowLink && (
          <div className="flex gap-2 items-center justify-center">
            <p className="text-line">Trang chủ</p>
            <div className="w-1 h-1 bg-yellow rounded-full" />
            <p className="text-white">{pageName}</p>
          </div>
        )}
        <h2 className="hidden text-center xl:block heading-2 w-full text-nowrap font-roboto text-white">
          <strong>{title}</strong>
        </h2>
        <h2 className="heading-5  block xl:hidden w-full text-center text-nowrap font-roboto text-white">
          <strong>{title}</strong>
        </h2>
      </div>
    </div>
  );
};

export default PageBanner;
