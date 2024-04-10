import axios from "axios";
import { BASE_URL } from "../axios-client";
import Cookies from "js-cookie";
const ENDPOINT = "blogs";

const token = Cookies.get("token");

export const handleCreateBlogs = async (body) => {
  try {
    return await axios.post(`${BASE_URL}/${ENDPOINT}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
};
