import React from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/button";
import { ACCEPTED_IMAGE_TYPES } from "../../constants/variables";
import { Input } from "../../components/ui/button";

const formSchema = z.object({
  title: z.string().min(1, { message: "Vui lòng nhập Tiêu đề" }),
  description: z.string().min(1, { message: "Vui lòng nhập mô tả" }),
  image: z.any().refine((file) => {
    const fileType = file?.type;
    return ACCEPTED_IMAGE_TYPES.includes(fileType);
  }, "File ảnh không hợp lệ"),
  type: z.string({ required_error: "Vui lòng chọn loại bài viết" }),
  createAt: z.string(),
});

const AdminHome = () => {
  return (
    <div className="pt-[100px] w-full px-4 mx-auto xl:max-w-[1410px]">
      AdminCreateBlog
    </div>
  );
};

export default AdminHome;
