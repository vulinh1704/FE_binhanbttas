import React from "react";
import SectionLayout from "../../../SectionLayout";
import SectionHeader from "../../../SectionHeader";
import News from "./news";

const LandingNews = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-3 md:gap-5">
        <h2 className="heading-6 text-secondary md:heading-4 font-bold md:font-bold text-center">
          Tin tức Bình Thuận
        </h2>
        <p className="text-text text-center pl-2 small md:big">
          Giao thông, bất động sản, thời sự trong ngày.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/news">Thời sự trong ngày</SectionHeader> <News />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/news">Thời sự trong ngày</SectionHeader> <News />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/news">Thời sự trong ngày</SectionHeader> <News />
      </div>
    </SectionLayout>
  );
};

export default LandingNews;
