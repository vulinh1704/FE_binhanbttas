import React, { useState } from "react";
import PaginationComps from "../components/PaginationComps";
import { useQuery } from "@tanstack/react-query";
import { handleGetBlogs } from "../services/blogs/blogs.service";

const Search = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  localStorage.setItem("page", page);
  //   const searchValue = localStorage.getItem("search");
  //   console.log(searchValue);
  //   const { data, isLoading } = useQuery({
  //     queryKey: ["search", page, searchValue],
  //     queryFn: async () => {
  //       const res = await handleGetBlogs({
  //         params: {
  //           page: page,
  //           title: searchValue,
  //         },
  //       });
  //       if (res) {
  //         setTotalPages(res.data.totalPage);
  //         return res.data.list;
  //       }
  //     },
  //   });
  //   console.log(data);

  return (
    <div className="pt-[150px] w-full px-4 mx-auto xl:max-w-[1410px]">
      <h2 className=" mb-10 font-bold md:font-bold small md:big">
        Kết quả tìm kiếm cho: aaa
      </h2>
      <div className="flex flex-col gap-3 mb-10">
        {/* {blogs.map((item) => (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center w-full bg-[#ffb3c6]/20 px-4 py-3 rounded-2xl">
            <div className="flex gap-5 xl:gap-10 w-full items-center ">
              <img
                src={item.image}
                alt=""
                className="max-w-[100px] max-h-[100px] sm:max-w-[300px] sm:max-h-[300px] object-contain rounded-lg"
              />
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-0 sm:gap-2">
                  <p className="big xl:font-bold xl:heading-5">{item.title}</p>
                  <p className="small font-normal">
                    Loại bài viết: {item.type.name}
                  </p>
                  <p className="small xl:big">{item.description}</p>
                  <p className="small font-normal">
                    Ngày tạo: {formatTime(item.timeAt)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                className="bg-primary/70 hover:bg-primary sm:h-10 h-8"
              >
                <Link to={`/${item.id}`} className="w-full">
                  Xem chi tiết
                </Link>
              </Button>
              <Button
                className="bg-red/70 hover:bg-red sm:h-10 h-8"
                onClick={() => handleRemoveBlog(item.id)}
              >
                Xoá
              </Button>
            </div>
          </div>
        ))} */}
      </div>
      <PaginationComps setPage={setPage} totalPages={1} />
    </div>
  );
};

export default Search;
