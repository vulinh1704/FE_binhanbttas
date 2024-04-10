import Cookies from "js-cookie";

const token = Cookies.get("token");
export const BASE_URL = "https://binhanbttas-be.onrender.com";

export const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};
