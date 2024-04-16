import React from "react";
import bgBanner from "../images/bg-header.jpg";
import SectionLayout from "../components/SectionLayout";
import PageBanner from "../components/PageBanner";
import bg from "../images/contact/ngt.jpg";
import { CircleIcon } from "../assets/icons";

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
          <div className="relative z-20">about us</div>
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
