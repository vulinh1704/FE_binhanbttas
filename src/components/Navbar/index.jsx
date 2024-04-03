import React from "react";
import { LIST_MENU } from "./data";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../Logo";
import { HamburgerIcon } from "../../assets/icons";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import Sidebar from "../Sidebar";
import SearchInput from "../SearchInput";

const Navbar = ({ isScroll }) => {
  let location = useLocation();

  return (
    <header
      className={`fixed z-[10] top-0 w-full ${
        isScroll
          ? "bg-white border-b border-line"
          : "bg-white/30 backdrop-blur-[25px]"
      }`}
    >
      <div className="xl:flex items-center  justify-between hidden px-[200px] py-4 ">
        <Logo />
        <div className="flex gap-3">
          {LIST_MENU.map((item) => (
            <Button
              asChild
              key={item.id}
              className={`rounded-lg bg-transparent text-surface-1 hover:text-white ${
                location.pathname === item.href
                  ? "text-white bg-primary/70"
                  : ""
              }`}
            >
              <Link to={item.href}>{item.title}</Link>
            </Button>
          ))}
          <Button
            asChild
            className="bg-transparent text-surface-1 hover:text-white rounded-lg"
          >
            <Link to="/about-us">Về chúng tôi</Link>
          </Button>
          <Button
            asChild
            className="rounded-lg bg-transparent text-surface-1 hover:text-white"
          >
            <Link to="/contact">Liên hệ</Link>
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
