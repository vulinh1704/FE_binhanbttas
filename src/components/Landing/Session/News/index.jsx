import React from "react";
import SectionLayout from "../../../SectionLayout";
import SectionHeader from "../../../SectionHeader";
import LandingNewsItem from "../../Comps/LandingNewsItem";
import { LANDING_NEWS_DATA } from "./data";

const News = () => {
  return (
    <SectionLayout>
      <SectionHeader
        href="/news"
        des="Giao thông, Bất động sản, thời sự trong ngày."
      >
        Tin tức Bình Thuận
      </SectionHeader>
      <div className="flex flex-col md:flex-row gap-3">
        {LANDING_NEWS_DATA.map((item) => (
          <LandingNewsItem
            key={item.id}
            href={item.href}
            img={item.img}
            title={item.title}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default News;
