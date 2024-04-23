import { v4 as uuidv4 } from "uuid";

export const LIST_MENU = [
  { id: uuidv4(), title: "Du lịch", href: "/tours" },
  { id: uuidv4(), title: "Dịch vụ", href: "/service" },
  { id: uuidv4(), title: "Tin tức", href: "/news" },
];

export const LIST_TOUR_MENU = [
  { id: uuidv4(), title: "Mũi Né", href: "/mui-ne" },
  { id: uuidv4(), title: "Bàu Trắng", href: "/bau-trang" },
  { id: uuidv4(), title: "Đảo Hòn Cau", href: "/honcauisland" },
  { id: uuidv4(), title: "Sealink", href: "/sealink" },
];
export const LIST_SERVICE_MENU = [
  { id: uuidv4(), title: "Tài xế", href: "/drivers" },
  { id: uuidv4(), title: "Hướng dẫn viên", href: "/tour-guide" },
  { id: uuidv4(), title: "Nghề nghiệp", href: "/career" },
];
export const LIST_NEWS_MENU = [
  { id: uuidv4(), title: "Bất động sản", href: "/real-estate" },
  { id: uuidv4(), title: "Tin tức", href: "/news" },
  { id: uuidv4(), title: "Giao thông", href: "/traffic" },
];
