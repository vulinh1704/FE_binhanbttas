import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BANNER } from "./data";
const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full max-h-[900px] relative mt-[123px]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full">
          {BANNER.map((item) => (
            <CarouselItem key={item.id} className="w-full">
              <img src={item.img} alt="" className="w-full max-h-[900px]" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute flex flex-col gap-8 top-[40%] justify-center items-center -translate-x-1/2 left-1/2 translate-2-1/2">
        <h2 className="heading-2 w-full text-nowrap font-roboto text-white">
          <strong>Sẵn sàng cho cuộc phiêu lưu tiếp theo của bạn!</strong>
        </h2>
        <p className="heading-3 text-white font-roboto">
          Get ready for your next adventure!
        </p>
      </div>
    </div>
  );
};

export default Banner;
