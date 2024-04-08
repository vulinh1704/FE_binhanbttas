import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, { message: "Vui lòng nhập tên" }),
  password: z.string().min(1, { message: "Password không chính xác!" }),
});

const Admin = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex gap-3 p-3 w-fit bg-line rounded-xl ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex justify-between w-full"
          >
            <div className="w-full rounded-[20px]  p-8 flex flex-col gap-3">
              <h4 className="heading-4 font-bold text-secondary mb-5">
                Admin đăng nhập
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
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Nhập Mật khẩu"
                        onChange={(value) => field.onChange(value)}
                        className="w-full bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-center mt-5">
                <Button type="submit" className="rounded-full px-20">
                  Gửi
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Admin;
