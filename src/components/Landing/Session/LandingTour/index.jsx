import React from "react";
import SectionLayout from "../../../SectionLayout";
import SectionHeader from "../../../SectionHeader";
import BauTrangLanding from "./bautrang";
import HonCauIslandLanding from "./honcauIsland";
import MuiNeLanding from "./muine";
import SealinkLanding from "./sealink";
const LandingTour = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-3 md:gap-5">
        <h2 className="heading-6 text-secondary md:heading-4 font-bold md:font-bold text-center">
          Các địa điểm du lịch nổi tiếng tại Bình Thuận
        </h2>
        <p className="text-text text-center pl-2 small md:big">
          Đi với người thân, vừa vui vừa thích
        </p>
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/bau-trang">Bàu Trắng</SectionHeader>{" "}
        <BauTrangLanding />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/honcauisland">Đảo Hòn Cau</SectionHeader>
        <HonCauIslandLanding />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/mui-ne">Mũi Né</SectionHeader> <MuiNeLanding />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/sealink">Thời sự trong ngày</SectionHeader>{" "}
        <SealinkLanding />
      </div>
    </SectionLayout>
  );
};

export default LandingTour;
