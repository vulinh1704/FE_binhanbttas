import img from "../../../../images/landing/bth.jpg";
import { v4 as uuidv4 } from "uuid";

export const LANDING_SERVICE_DATA = [
  {
    id: uuidv4(),
    title: "Tài xế lái xe",
    des: "Nhậu say, call ngay +84 867 046 286",
    img: img,
    containerClass: "",
    imgClass: "",
    textClass: "",
    href: "/drivers",
  },
  {
    id: uuidv4(),
    title: "Hướng dẫn viên du lịch tự do",
    des: "Hãy để chúng tôi, đồng hành cùng bạn trong mọi chuyến đi.",
    img: img,
    containerClass: "",
    imgClass: "md:order-2",
    textClass: "md:order-1 items-end",
    href: "/tour-guide",
  },
  {
    id: uuidv4(),
    title: "Việc làm tại Phan Thiết - Bình Thuận",
    des: "Còn chần chừ gì nữa, tìm việc ngay thôi nào!",
    img: img,
    containerClass: "",
    imgClass: "",
    textClass: "",
    href: "/career",
  },
];
