import SectionHeader from "../../../SectionHeader";
import SectionLayout from "../../../SectionLayout";
import { Bg, BgBottom } from "../../../../assets/icons";
import React from "react";

const LandingService = () => {
  return (
    <div className="w-full mt-10">
      <Bg className="w-full h-10 hidden md:block" />
      <SectionLayout className="bg-background md:pb-[100px]">
        <SectionHeader href="/service">Các dịch vụ của chúng tôi</SectionHeader>
      </SectionLayout>
      <BgBottom className="w-full hidden md:block h-10 mt-[-40px]" />
    </div>
  );
};

export default LandingService;
