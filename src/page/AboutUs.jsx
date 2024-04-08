import React from "react";
import bgBanner from "../images/bg-header.jpg";
import SectionLayout from "../components/SectionLayout";
import PageBanner from "../components/PageBanner";
import BlogItem from "../components/BlogItem";
import { LIST_TOURS_DATA } from "../components/BlogItem/data";
import bg from "../images/contact/ngt.jpg";
import { CircleIcon } from "../assets/icons";
import PaginationComps from "../components/PaginationComps";

const AboutUs = () => {
  return (
    <>
      <PageBanner
        isShowLink={true}
        pageName="Về chúng tôi"
        bg={bgBanner}
        title="Thông tin về chúng tôi !"
      />
      <div className="relative w-full">
        <SectionLayout className="mt-[-100px] xl:!px-[300px] 2xl:!px-[400px] md:px-20 !gap-0 2xl:!gap-0 justify-center items-center bg-white xl:rounded-[120px]">
          {LIST_TOURS_DATA.map((item) => (
            <BlogItem
              key={item.id}
              title={item.title}
              des={item.des}
              img={item.img}
              createAt={item.createAt}
            />
          ))}
          <PaginationComps
            totalPages={5}
            className="xl:justify-end justify-center mt-10"
          />
        </SectionLayout>
        <img
          src={bg}
          alt=""
          className="absolute left-0 w-full max-h-[200px] top-[20%]"
        />
        <img
          src={bg}
          alt=""
          className="absolute left-0 w-full max-h-[200px] top-[60%]"
        />
        <CircleIcon className="hidden xl:block absolute top-[5%] right-[10%]" />
        <CircleIcon className="hidden xl:block absolute top-[70%] left-[10%]" />
        <CircleIcon className="hidden xl:block absolute top-[90%] right-[10%]" />
      </div>
    </>
  );
};

export default AboutUs;
