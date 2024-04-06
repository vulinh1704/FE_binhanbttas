import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRightIcon } from "../assets/icons";

const Layout = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setIsScroll(false);
      } else {
        setIsScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <Navbar isScroll={isScroll} />
      <div className="">
        <Outlet></Outlet>
      </div>
      {visible && (
        <Button
          variant="ghost"
          className="bottom-[5%] rounded-full px-3 h-10 z-10 bg-line hover:bg-text hover:text-white fixed right-[5%]"
          onClick={scrollToTop}
        >
          <ArrowRightIcon className="-rotate-90" />
        </Button>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
