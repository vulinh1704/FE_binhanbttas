import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../Logo";
import { HamburgerIcon } from "../../assets/icons";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import Sidebar from "../Sidebar";
import SearchInput from "../SearchInput";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";
import { LIST_TOUR_MENU, LIST_SERVICE_MENU, LIST_NEWS_MENU } from "./data";

const Navbar = ({ isScroll }) => {
  let location = useLocation();
  return (
    <header
      className={`fixed top-0 z-50 w-full shadow-2xl ${
        isScroll ? "bg-white " : "bg-white/30 backdrop-blur-[25px]"
      }`}
    >
      <div className="xl:flex items-center  justify-between hidden px-[100px] 2xl:px-[200px] py-4 ">
        <Logo />
        <div className="flex gap-3">
          <Button
            asChild
            className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
              location.pathname === "/"
                ? `text-white ${isScroll ? "text-primary" : ""}`
                : ""
            } ${isScroll ? "hover:text-primary" : ""}`}
          >
            <Link to="/">Trang chủ</Link>
          </Button>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button
                className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
                  location.pathname === "/sealink" ||
                  location.pathname === "/mui-ne" ||
                  location.pathname === "/bau-trang" ||
                  location.pathname === "/honcauisland"
                    ? `text-white ${isScroll ? "text-primary" : ""}`
                    : ""
                } ${isScroll ? "hover:text-primary" : ""}`}
              >
                Du lịch
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="px-0">
              <div className="flex flex-col gap-3">
                {LIST_TOUR_MENU.map((item) => (
                  <Link
                    to={item.href}
                    className={`hover:bg-primary/60 hover:text-white h-10 flex items-center justify-center ${
                      location.pathname === item.href
                        ? "bg-primary/60 text-white"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button
                className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
                  location.pathname === "/tour-guide" ||
                  location.pathname === "/drivers" ||
                  location.pathname === "/career"
                    ? `text-white ${isScroll ? "text-primary" : ""}`
                    : ""
                } ${isScroll ? "hover:text-primary" : ""}`}
              >
                Dịch vụ
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="px-0">
              <div className="flex flex-col gap-3">
                {LIST_SERVICE_MENU.map((item) => (
                  <Link
                    to={item.href}
                    className={`hover:bg-primary/60 hover:text-white h-10 flex items-center justify-center ${
                      location.pathname === item.href
                        ? "bg-primary/60 text-white"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button
                className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
                  location.pathname === "/news" ||
                  location.pathname === "/real-estate" ||
                  location.pathname === "/traffic"
                    ? `text-white ${isScroll ? "text-primary" : ""}`
                    : ""
                } ${isScroll ? "hover:text-primary" : ""}`}
              >
                Tin tức
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="px-0">
              <div className="flex flex-col gap-3">
                {LIST_NEWS_MENU.map((item) => (
                  <Link
                    to={item.href}
                    className={`hover:bg-primary/60 hover:text-white h-10 flex items-center justify-center ${
                      location.pathname === item.href
                        ? "bg-primary/60 text-white"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
          <Button
            asChild
            className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
              location.pathname === "/about-us"
                ? `text-white ${isScroll ? "text-primary" : ""}`
                : ""
            } ${isScroll ? "hover:text-primary" : ""}`}
          >
            <Link to="/about-us">Về chúng tôi</Link>
          </Button>
          <Button
            asChild
            className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
              location.pathname === "/contact" ? `text-primary` : ""
            } ${isScroll ? "hover:text-primary" : ""}`}
          >
            <Link to="/contact">Phản hồi</Link>
          </Button>
        </div>
        <SearchInput />
      </div>
      <div className="flex xl:hidden border-b border-line items-center justify-between px-4 py-3">
        <Logo />
        <Sheet>
          <SheetTrigger>
            <HamburgerIcon />
          </SheetTrigger>
          <SheetContent side="left" className="bg-bg">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
