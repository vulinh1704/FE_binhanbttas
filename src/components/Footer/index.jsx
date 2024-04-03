import { Bg } from "../../assets/icons";
import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { LIST_MENU } from "../Navbar/data";

const Footer = () => {
  return (
    <div className="w-full mt-10">
      <Bg className="w-full h-10" />
      <footer className="w-full bg-background py-[100px] px-[200px] flex flex-col">
        <div className="pb-10 border-b border-line flex justify-between">
          <div className="flex flex-col px-10 gap-4 border-r border-line max-w-[400px]">
            <Logo textClass="text-text !heading-3" containerClass="h-[100px]" />
            <p className="text-sm font-medium text-text leading-6">
              Bình An BT là dự án khởi nghiệp mới cung cấp dịch vụ giao thông
              thông minh, các tour du lịch khám phá thiên nhiên, sản phẩm du
              lịch địa phương.
            </p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-5">
              <div className="w-[150px]">
                <h2 className="big text-text text-center">Trang</h2>
              </div>
              <div className="flex flex-col">
                {LIST_MENU.map((item) => (
                  <Button
                    asChild
                    key={item.id}
                    className="bg-transparent text-text hover:bg-transparent rounded-lg"
                  >
                    <Link to={item.href}>{item.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[150px]">
                <h2 className="big text-text text-center">Mạng xã hội</h2>
              </div>
              <div className="flex flex-col">
                <i class="fa-brands fa-facebook" style="color: #74C0FC;"></i>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[150px]">
                <h2 className="big text-text text-center">Thông tin</h2>
              </div>
              <div className="flex flex-col">
                <Button
                  asChild
                  className="bg-transparent text-text hover:bg-transparent rounded-lg"
                >
                  <Link to="/about-us">Về chúng tôi</Link>
                </Button>
                <Button
                  asChild
                  className="bg-transparent text-text hover:bg-transparent rounded-lg"
                >
                  <Link to="/contact">Liên hệ</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-text text-end caption-3 pt-10">
          Copyright © BinhAnBT 2024
        </p>
      </footer>
    </div>
  );
};

export default Footer;
