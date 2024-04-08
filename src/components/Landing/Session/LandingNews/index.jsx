import React from "react";
import SectionLayout from "../../../SectionLayout";
import SectionHeader from "../../../SectionHeader";
import LandingNewsItem from "../../Comps/LandingNewsItem";
import { LANDING_NEWS_DATA } from "./data";

const LandingNews = () => {
  const newData = LANDING_NEWS_DATA.slice(0, 4);
  return (
    <SectionLayout>
      <SectionHeader
        href="/news"
        des="Giao thông, bất động sản, thời sự trong ngày."
      >
        Tin tức Bình Thuận
      </SectionHeader>
      <div className="hidden md:grid grid-cols-4 gap-5">
        {LANDING_NEWS_DATA.map((item) => (
          <LandingNewsItem
            key={item.id}
            href={item.href}
            img={item.img}
            title={item.title}
          />
        ))}
      </div>
      <div className="flex flex-col md:hidden gap-3">
        {newData.map((item) => (
          <LandingNewsItem
            key={item.id}
            href={item.id}
            img={item.img}
            title={item.title}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default LandingNews;
