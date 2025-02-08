"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea"; 
import { toast } from "sonner";

const FORMSPARK_ACTION_URL = "https://submit-form.com/Ig0E1Azx";

const formSchema = z.object({
  title: z.string().optional(),
  fname: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z
    .string()
    .nonempty("Field is required")
    .email({ message: "Must be a valid email" }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

interface EnquiryFormProps {
  title?: string;
}

export default function EnquiryForm({ title }: EnquiryFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
      fname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async ({
    fname,
    email,
    message,
  }: z.infer<typeof formSchema>) => {
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title,
        fname,
        email,
        message,
      }),
    });
    toast(
      "Message succesful! Thank you for your interest we will get back to you as soon as possible."
    );
    form.reset();
  };

  return (
    <div className="my-1 ml-1 lg:w-1/2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-8">
          <input id="title" name="title" type="hidden" value={title} />
          <div className="grid md:grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="fname"
              render={({ field }) => (
                <FormItem className="mb-3 md:mb-0">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className="bg-muted"
                      name="fname"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-3 md:mb-0">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="bg-muted"
                      name="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-3 md:mb-0">
                <FormLabel>Your message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    {...field}
                    className="resize-none bg-muted"
                    name="message"
                    rows={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
