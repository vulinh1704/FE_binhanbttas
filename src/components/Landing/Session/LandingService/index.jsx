import SectionHeader from "../../../SectionHeader";
import SectionLayout from "../../../SectionLayout";
import { Bg, BgBottom } from "../../../../assets/icons";
import React from "react";
import LandingServiceItem from "../../Comps/LandingServiceItem";
import { LANDING_SERVICE_DATA } from "./data";

const LandingService = () => {
  return (
    <div className="w-full mt-10">
      <Bg className="w-full h-10 hidden md:block" />
      <SectionLayout className="bg-background md:pb-[100px]">
        <SectionHeader href="/service">Các dịch vụ của chúng tôi</SectionHeader>
        <div className="relative flex items-center md:justify-center">
          {/* <div className="left-2/25 w-[2px] relative left-1/10 -translate-x-1/10 h-[450px] xl:h-[810px] bg-line" /> */}
          <div className="flex flex-col w-full justify-center items-center gap-[55px] md:gap-20">
            {LANDING_SERVICE_DATA.map((item) => (
              <LandingServiceItem
                key={item.id}
                containerClass={item.containerClass}
                imgClass={item.imgClass}
                textClass={item.textClass}
                title={item.title}
                des={item.des}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </SectionLayout>
      <BgBottom className="w-full hidden md:block h-10 mt-[-40px]" />
    </div>
  );
};

export default LandingService;
