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
import { Input } from "../../components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, { message: "Vui lòng nhập tên" }),
  email: z.string().email({ message: "Email không chính xác!" }),
  phone: z.string().min(1, { message: "Vui lòng nhập số điện thoại liên hệ" }),
  message: z.string().min(1, { message: "Vui lòng thông tin muốn phản hồi" }),
});

const AdminHome = () => {
  return (
    <div className="pt-[100px] w-full px-4 mx-auto xl:max-w-[1410px]">
      AdminCreateBlog
    </div>
  );
};

export default AdminHome;
