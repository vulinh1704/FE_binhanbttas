import PaginationComps from "../../components/PaginationComps";
import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const AdminListBlogs = ({ token }) => {
  useEffect(() => {
    const getBlog = async () => {
      //   const res = await handleGetBlogs();
    };
  }, []);
  if (token === undefined) {
    return <Navigate to="/admin" replace />;
  }
  return (
    <div className="pt-[150px] w-full px-4 mx-auto xl:max-w-[1410px]">
      <h2 className="text-center mb-10 font-bold md:font-bold text-[#ffb3c6] heading-5 md:heading-4">
        Phản hồi từ người truy cập
      </h2>
      <div className="flex flex-col gap-3 mb-10">
        <Link to="/">
          <div className="flex gap-3 w-full items-center bg-bg px-8 py-5 rounded-2xl">
            <div>anh</div>
            <div className="flex flex-col gap-3">
              <div className="">
                <p className="big xl:font-bold xl:heading-5">Tiêu đề</p>
                <p className="small xl:big">Mô tả</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <PaginationComps totalPages={5} />
    </div>
  );
};

export default AdminListBlogs;
