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
import { Container } from "../styledcomps/container";

const FORMSPARK_ACTION_URL = "https://submit-form.com/Ig0E1Azx";

const formSchema = z.object({
  fname: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z
    .string()
    .nonempty("Field is required")
    .email({ message: "Must be a valid email" }),
  subject: z.string().min(3, {
    message: "Please enter a subject.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async ({
    fname,
    email,
    subject,
    message,
  }: z.infer<typeof formSchema>) => {
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fname,
        email,
        subject,
        message,
        // values,
      }),
    });
    toast(
      "Message succesful! Thank you for your interest we will get back to you as soon as possible."
    );
    form.reset();
  };

  return (
    <Container>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-8">
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
            name="subject"
            render={({ field }) => (
              <FormItem className="mb-3 md:mb-0">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Please enter a subject"
                    {...field}
                    className="bg-muted"
                    name="subject"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    rows={5}
                    name="message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Container>
  );
}
