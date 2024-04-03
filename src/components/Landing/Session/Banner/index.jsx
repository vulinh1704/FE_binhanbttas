import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BANNER } from "./data";
import { Button } from "../../../ui/button";
import { Link } from "react-router-dom";

const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full mt-[75px] xl:mt-0 xl:h-[900px] h-[500px] relative ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full">
          {BANNER.map((item) => (
            <CarouselItem key={item.id} className="w-full">
              <img
                src={item.img}
                alt=""
                className="w-full xl:h-[900px] h-[500px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute flex flex-col gap-2 xl:gap-8 top-[40%] justify-center items-center -translate-x-1/2 left-1/2 translate-2-1/2">
        <h2 className="hidden xl:block heading-2 w-full text-nowrap font-roboto text-white">
          <strong>Sẵn sàng cho cuộc phiêu lưu tiếp theo của bạn !</strong>
        </h2>
        <h2 className="heading-5 block xl:hidden w-full text-center text-nowrap font-roboto text-white">
          <strong>
            Sẵn sàng cho cuộc phiêu lưu <br /> tiếp theo của bạn !
          </strong>
        </h2>
        <p className="heading-6 xl:heading-3 text-white font-roboto">
          Get ready for your next adventure !
        </p>
        <Button
          asChild
          className="xl:px-[50px] xl:h-[65px] xl:mt-5 xl:py-7 xl:text-xl px-[20px] py-4 bg-primary hover:bg-primary/70"
        >
          <Link to="/contact">Liên hệ với chúng tôi</Link>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
