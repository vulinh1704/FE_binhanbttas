import React, { useState } from "react";

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
} from "../../components/ui/form";
import { ACCEPTED_IMAGE_TYPES } from "../../constants/variables";
import { Input } from "../../components/ui/input";

const formSchema = z.object({
  title: z.string().min(1, { message: "Vui lòng nhập Tiêu đề" }),
  description: z.string().min(1, { message: "Vui lòng nhập mô tả" }),
  image: z
    .any()
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Vui lòng chọn ảnh nền có định dạng .jpg, .jpeg, .png and .webp"
    ),
  content: z.any(),
  type: z.string({ required_error: "Vui lòng chọn loại bài viết" }),
  createAt: z.string(),
});

const AdminHome = () => {
  const [imgUrl, setImgUrl] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      createAt: "",
    },
  });

  const checkImage = form.getValues("image");

  const handleGetImage = (e) => {
    const value = e.target.files[0];
    if (value) {
      setImgUrl(URL.createObjectURL(value));
    }
  };

  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div className="pt-[150px] w-full flex items-center justify-center px-4 mx-auto xl:max-w-[1410px]">
      <Form {...form}>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-between w-full"
        >
          <div className="w-full rounded-[20px] bg-bg p-8 flex flex-col gap-3">
            <h4 className="heading-4 font-bold text-secondary mb-5">
              Tạo bài viết mới
            </h4>
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Nhập Tiêu đề bài viết{" "}
                        <span className="text-red">*</span>
                      </h2>
                      <Input
                        placeholder="Nhập Tiêu đề bài viết"
                        onChange={(value) => field.onChange(value)}
                        className="w-full bg-white"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Nhập mô tả bài viết <span className="text-red">*</span>
                      </h2>
                      <Input
                        placeholder="Nhập mô tả"
                        onChange={(value) => field.onChange(value)}
                        className="w-full bg-white"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="image"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Thêm ảnh bìa <span className="text-red">*</span>
                      </h2>
                      {checkImage === undefined ? (
                        <Input
                          type="file"
                          onChange={(value) => {
                            field.onChange(value.target.files);
                            handleGetImage(value);
                          }}
                          className="w-full bg-white rounded-xl"
                        />
                      ) : (
                        <div className="w-fit h-fit p-1 border border-dashed rounded-xl border-line">
                          <img
                            src={imgUrl}
                            alt=""
                            className="max-w-full max-h-[500px] rounded-xl"
                          />
                        </div>
                      )}
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="type"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Chọn loại bài <span className="text-red">*</span>
                      </h2>
                      <Input
                        onChange={(value) => field.onChange(value)}
                        className="w-full bg-white"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="content"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Nhập nội dung <span className="text-red">*</span>
                      </h2>
                      <textarea
                        onChange={(value) => field.onChange(value)}
                        className="w-full border border-line bg-white h-[150px] lg:h-[300px] px-3 py-2 text-sm placeholder:text-sm text-text focus-visible:outline-primary/50 rounded-xl"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end">
              <Button type="submit" className="rounded-full px-20">
                Tạo
              </Button>
            </div>
          </div>
        </motion.form>
      </Form>
    </div>
  );
};

export default AdminHome;
