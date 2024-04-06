import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { blockInvalidChar } from "../../utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  name: z.string().min(1, { message: "Vui lòng nhập tên" }),
  email: z.string().email({ message: "Email không chính xác!" }),
  phone: z.string().min(1, { message: "Vui lòng nhập số điện thoại liên hệ" }),
  message: z.string().min(1, { message: "Vui lòng thông tin muốn phản hồi" }),
});

const FormContact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
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
            Nhập thông tin
          </h4>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nhập tên"
                    onChange={(value) => field.onChange(value)}
                    className="w-full bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nhập email"
                    onChange={(value) => field.onChange(value)}
                    className="w-full bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nhập số điện thoại"
                    onChange={(value) => field.onChange(value)}
                    className="w-full bg-white"
                    onKeyDown={blockInvalidChar}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    placeholder="Nhập câu hỏi"
                    onChange={(value) => field.onChange(value)}
                    className="w-full border border-line bg-white h-[150px] lg:h-[300px] px-3 py-2 text-sm placeholder:text-sm text-text focus-visible:outline-primary/50 rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end">
            <Button type="submit" className="rounded-full px-20">
              Gửi
            </Button>
          </div>
        </div>
      </motion.form>
    </Form>
  );
};

export default FormContact;
