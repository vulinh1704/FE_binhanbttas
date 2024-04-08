import { v4 as uuidv4 } from "uuid";

export const LIST_MENU = [
  { id: uuidv4(), title: "Trang chủ", href: "/" },
  { id: uuidv4(), title: "Du lịch", href: "/tours" },
  { id: uuidv4(), title: "Dịch vụ", href: "/service" },
  { id: uuidv4(), title: "Tin tức", href: "/news" },
];
