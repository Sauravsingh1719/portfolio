"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "./hooks/use-toast";
import { ToastContainer } from "@/components/ToastContainer";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

export function ThreeDCard() {
  const { toast, toasts, removeToast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: any, e: React.FormEvent) => {
    e.preventDefault(); // Ensures no default form action
    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully.",
          type: "success",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error!",
        description:
          "There was an error sending your message. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Overlay for Loading State */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-md z-50">
          <img
            src="/images/rocket.gif"
            alt="Loading..."
            className="h-64 w-64"
          />
        </div>
      )}

      <div className="bg-neutral-600 text-black flex flex-wrap justify-center shadow-lg shadow-gray-500 relative">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:bg-gray-100 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-10 border">
            <h1 className="font-bold text-black py-5 flex flex-wrap">
              Have an idea or a project in mind? Drop me a message, and let's
              connect to bring it to life!
            </h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <CardItem translateZ="50">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your Name"
                            {...field}
                            className="w-full sm:w-96 px-3 py-2 border rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardItem>

                <CardItem translateZ="60">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your Email"
                            {...field}
                            className="w-full sm:w-96 px-3 py-2 border rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardItem>

                <CardItem translateZ="60">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your Phone Number"
                            {...field}
                            type="number"
                            className="w-full sm:w-96 px-3 py-2 border rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardItem>

                <CardItem translateZ="60">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter your Message"
                            rows={4}
                            {...field}
                            className="w-full sm:w-96 px-3 py-2 border rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardItem>
                <CardItem translateZ="60">
                  <button
                    type="submit"
                    className={`${
                      loading ? "bg-white text-black" : "bg-black text-white"
                    }rounded flex items-center justify-center`}
                    disabled={loading}
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      "Contact"
                    )}
                  </button>
                </CardItem>
              </form>
            </Form>
            <ToastContainer toasts={toasts} removeToast={removeToast} />
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
