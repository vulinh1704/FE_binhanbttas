import React from "react";
import SectionLayout from "../components/SectionLayout";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { SOCIAL_MEDIA } from "../components/Footer/data";
import zl from "../images/footer-img/zalo.png";
import qrzl from "../images/footer-img/qrzalo.jpg";
import FormContact from "../components/Form/FormContact";

const Contact = () => {
  return (
    <SectionLayout className="mt-[82px] lg:flex-row">
      <div className="flex flex-col gap-3 lg:gap-5 w-full">
        <h2 className="heading-5 lg:heading-4 font-roboto text-secondary lg:font-bold font-bold">
          Kết nối với chúng tôi
        </h2>
        <div className="flex flex-col gap-1 lg:gap-3">
          <p className="big">+84 867 046 286</p>
          <p className="big">tmdvbinhanbt@gmail.com</p>
          <div className="flex gap-4">
            {SOCIAL_MEDIA.map((item) => (
              <Button
                asChild
                key={item.id}
                target="_blank"
                className="bg-transparent px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg"
              >
                <Link to={item.href}>
                  <img src={item.icon} alt="" width={30} height={30} />
                  {item.title}
                </Link>
              </Button>
            ))}
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-transparent px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg">
                  <img src={zl} alt="" width={30} height={30} />
                  Zalo
                </Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="end" className="w-fit p-2">
                <img src={qrzl} alt="" width={200} height={200} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <FormContact />
    </SectionLayout>
  );
};

export default Contact;
