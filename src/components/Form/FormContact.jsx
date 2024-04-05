import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  message: z.string(),
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-between w-full"
      >
        <div className="w-full rounded-[20px] bg-bg p-8 flex flex-col gap-5">
          <h4 className="heading-4 mb-10">Nhập thông tin</h4>
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
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    placeholder="Nhập câu hỏi"
                    onChange={(value) => field.onChange(value)}
                    className="w-full border border-line bg-white h-[300px] px-3 py-2 text-sm placeholder:text-sm text-text focus-visible:outline-primary/50 rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center">
            <Button type="submit" className="rounded-full px-20">
              Gửi
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormContact;
