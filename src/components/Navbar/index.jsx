import React from "react";
import { LIST_MENU } from "./data";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../Logo";
import { HamburgerIcon } from "../../assets/icons";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import Sidebar from "../Sidebar";
import SearchInput from "../SearchInput";

const Navbar = () => {
  let location = useLocation();
  return (
    <header className="fixed z-[10] top-0 w-full bg-white">
      <div className="xl:flex items-center  justify-between hidden px-[200px] py-4 border-b border-line">
        <Logo />
        <SearchInput />
        <div className="flex gap-3">
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
      </div>
      <div className="hidden xl:flex gap-10 bg-bg py-1 item-center justify-center border-b border-line">
        {LIST_MENU.map((item) => (
          <Button
            asChild
            variant="ghost"
            size="mini"
            textSize="small"
            className={`small font-bold rounded-lg  ${
              item.href === location.pathname
                ? "bg-primary/20 text-primary hover:bg-blue/25"
                : "text-text"
            }`}
          >
            <Link key={item.id} to={item.href}>
              {item.title}
            </Link>
          </Button>
        ))}
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
