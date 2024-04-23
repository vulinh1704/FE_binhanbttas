import React from "react";
import SectionLayout from "../../../SectionLayout";
import SectionHeader from "../../../SectionHeader";
import LandingTourItem from "../../Comps/LandingTourItem";
import { Carousel, CarouselContent, CarouselItem } from "../../../ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { handleGetBlogs } from "../../../../services/blogs/blogs.service";
import LandingLoading from "../../Comps/LandingLoading";

const LandingTour = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tour"],
    queryFn: async () => {
      const res = await handleGetBlogs({
        params: {
          typeId: "959076371645661185",
        },
      });
      if (res) {
        return res.data.list;
      }
    },
  });

  let content;

  if (isLoading) {
    content = <LandingLoading />;
  }

  if (data) {
    if (data.length > 0) {
      content = (
        <>
          <div className="lg:grid hidden justify-center place-items-center items-center grid-cols-4 gap-[15px] w-full">
            {data.map((item) => (
              <LandingTourItem
                href={item.id}
                // price={item.price}
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
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
                {data.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/4"
                  >
                    <LandingTourItem
                      // price={item.price}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </>
      );
    } else {
      content = (
        <h2 className="heading-5 font-bold text-center">
          Chưa có bài viết nào!
        </h2>
      );
    }
  }

  return (
    <SectionLayout>
      <SectionHeader href="/tours" des="Đi cùng người thân vừa vui vừa thích!">
        Các điểm đến thú vị tại Bình Thuận
      </SectionHeader>
      {content}
    </SectionLayout>
  );
};

export default LandingTour;
