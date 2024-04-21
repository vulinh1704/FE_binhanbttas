import React from "react";
import SectionLayout from "../../../SectionLayout";
import SectionHeader from "../../../SectionHeader";
import LandingNewsItem from "../../Comps/LandingNewsItem";
import { useQuery } from "@tanstack/react-query";
import { handleGetBlogs } from "../../../../services/blogs/blogs.service";
import LandingLoading from "../../Comps/LandingLoading";

const LandingNews = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await handleGetBlogs({
        params: {
          typeId: "959076434092032001",
        },
      });
      if (res) {
        return res.data.list;
      }
    },
  });

  const newData = data?.slice(0, 4);

  let content;

  if (isLoading) {
    content = <LandingLoading />;
  }

  if (data) {
    if (data.length > 0) {
      content = (
        <>
          <div className="hidden md:grid grid-cols-4 gap-5">
            {data.map((item) => (
              <LandingNewsItem
                key={item.id}
                href={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
          <div className="flex flex-col md:hidden gap-3">
            {newData.map((item) => (
              <LandingNewsItem
                key={item.id}
                href={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
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
      <SectionHeader
        href="/news"
        des="Giao thông, bất động sản, thời sự trong ngày."
      >
        Tin tức Bình Thuận
      </SectionHeader>
      {content}
    </SectionLayout>
  );
};

export default LandingNews;
