import React from "react";
import SectionLayout from "../../../SectionLayout";
import SectionHeader from "../../../SectionHeader";
import LandingTourItem from "../../Comps/LandingTourItem";
import { Carousel, CarouselContent, CarouselItem } from "../../../ui/carousel";
import { LANDING_TOUR_DATA } from "./data";

const LandingTour = () => {
  return (
    <SectionLayout>
      <SectionHeader href="/tours" des="Đi cùng người thân vừa vui vừa thích!">
        Các điểm đến thú vị tại Bình Thuận
      </SectionHeader>
      <div className="lg:grid hidden justify-center place-items-center items-center grid-cols-4 gap-[15px] w-full">
        {LANDING_TOUR_DATA.map((item) => (
          <LandingTourItem
            href={item.href}
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
          <CarouselContent className="pr-3 gap-3 mr-2 sm:mr-3 md:mr-5">
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
