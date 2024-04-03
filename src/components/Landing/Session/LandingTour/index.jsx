import SectionLayout from "../../../SectionLayout";
import React from "react";
import SectionHeader from "../../../SectionHeader";
import LandingTourItem from "../../Comps/LandingTourItem";
import { Carousel, CarouselContent, CarouselItem } from "../../../ui/carousel";
import { LANDING_TOUR_DATA } from "./data";

const LandingTour = () => {
  console.log(LANDING_TOUR_DATA);
  return (
    <SectionLayout>
      <SectionHeader href="/tours" des="Đi cùng người thân vừa vui vừa thích!">
        Các điểm đến thú vị tại Bình Thuận
      </SectionHeader>
      <div className="lg:flex hidden justify-center items-center gap-[15px] w-full">
        {LANDING_TOUR_DATA.map((item) => (
          <LandingTourItem
            price={item.price}
            key={item.id}
            imgBg={item.imgBg}
            title={item.title}
            des={item.des}
          />
        ))}
      </div>
      <div className="lg:hidden">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="pr-3">
            {LANDING_TOUR_DATA.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2">
                <LandingTourItem
                  price={item.price}
                  imgBg={item.imgBg}
                  title={item.title}
                  des={item.des}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </SectionLayout>
  );
};

export default LandingTour;
