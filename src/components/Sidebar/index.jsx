import React from "react";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { LIST_MENU } from "../Navbar/data";
import { ArrowRightIcon } from "../../assets/icons";
import { SheetClose } from "../ui/sheet";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="border-b border-line flex flex-col gap-5 pb-3">
        <Logo />
        <SearchInput />
      </div>
      <div className="flex flex-col gap-3">
        {LIST_MENU.map((item) => (
          <SheetClose asChild>
            <Button
              key={item.id}
              asChild
              variant="ghost"
              className="text-lg text-black justify-between border-b border-line"
            >
              <Link to={item.href}>
                {item.title}{" "}
                <ArrowRightIcon className="max-w-[14px] max-h-[14px]" />
              </Link>
            </Button>
          </SheetClose>
        ))}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-black">
              Về chúng tôi
            </AccordionTrigger>
            <AccordionContent>
              <SheetClose asChild>
                <Link to="/about-us">Thông tin</Link>
              </SheetClose>
            </AccordionContent>
            <AccordionContent>
              <SheetClose asChild>
                <Link to="/contact">Phản hồi</Link>
              </SheetClose>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
