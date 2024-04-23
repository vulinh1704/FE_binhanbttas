import React from "react";
import LandingNewsItem from "../../Comps/LandingNewsItem";
import { useQuery } from "@tanstack/react-query";
import { handleGetBlogs } from "../../../../services/blogs/blogs.service";
import LandingLoading from "../../Comps/LandingLoading";
const RealEstate = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["realEstate"],
    queryFn: async () => {
      const res = await handleGetBlogs({
        params: {
          typeId: "962716131661348865",
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
        <div className="flex flex-col md:flex-row gap-3">
          {newData.map((item) => (
            <LandingNewsItem
              key={item.id}
              href={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      );
    } else {
      content = (
        <h2 className="big font-bold flex justify-center text-center">
          Chưa có bài viết nào!
        </h2>
      );
    }
  }
  return <>{content}</>;
};

export default RealEstate;
