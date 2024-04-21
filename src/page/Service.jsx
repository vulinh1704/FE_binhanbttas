import React, { useState } from "react";
import bgBanner from "../images/bg-header.jpg";
import SectionLayout from "../components/SectionLayout";
import PageBanner from "../components/PageBanner";
import BlogItem from "../components/BlogItem";
import bg from "../images/contact/ngt.jpg";
import { CircleIcon } from "../assets/icons";
import PaginationComps from "../components/PaginationComps";
import { useQuery } from "@tanstack/react-query";
import { handleGetBlogs } from "../services/blogs/blogs.service";
import BlogItemSkeleton from "../components/BlogItemSkeleton";

const Service = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["service", page],
    queryFn: async () => {
      const res = await handleGetBlogs({
        params: {
          typeId: "959076394405298177",
          page: page,
        },
      });
      if (res) {
        setTotalPages(res.data.totalPage);
        return res.data;
      }
    },
  });

  let content;

  if (isLoading) {
    content = <BlogItemSkeleton />;
  }

  if (data) {
    if (data.list.length > 0) {
      content = (
        <>
          {data.list.map((item) => (
            <BlogItem
              href={item.id}
              key={item.id}
              title={item.title}
              des={item.description}
              img={item.image}
              createAt={item.timeAt}
            />
          ))}
          <PaginationComps
            setPage={setPage}
            totalPages={totalPages}
            className="xl:justify-end justify-center mt-10"
          />
        </>
      );
    } else {
      content = (
        <h2 className="heading-5 relative z-20 font-bold text-center">
          Chưa có bài viết nào!
        </h2>
      );
    }
  }

  return (
    <>
      <PageBanner
        isShowLink={true}
        pageName="Dịch vụ"
        bg={bgBanner}
        title="Các dịch vụ của chúng tôi !"
      />
      <div className="relative w-full">
        <SectionLayout className="mt-[-100px] xl:!px-[200px] 2xl:!px-[300px] md:px-20 !gap-0 2xl:!gap-0 justify-center items-center bg-white xl:rounded-[120px]">
          {content}
        </SectionLayout>
        <img
          src={bg}
          alt=""
          className="absolute xl:rounded-[120px] left-0 w-full max-h-[200px] top-[20%]"
        />
        <img
          src={bg}
          alt=""
          className="absolute xl:rounded-[120px] left-0 w-full max-h-[200px] top-[60%]"
        />
        <CircleIcon className="hidden xl:block absolute top-[5%] right-[10%]" />
        <CircleIcon className="hidden xl:block absolute top-[70%] left-[10%]" />
        <CircleIcon className="hidden xl:block absolute top-[90%] right-[10%]" />
      </div>
    </>
  );
};

export default Service;
