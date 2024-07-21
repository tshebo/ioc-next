"use client";
import React, { useRef, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertSuccessful } from "@/components/component/alert";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);

    try {
      if (form.current) {
        // Send Email
        await emailjs.sendForm(
          "service_e77viqg",
          "template_vy09n8k",
          form.current,
          "G8N3YyLXXwsMoVWN5"
        );
        setShowAlert(true);
        reset();

        // Hide the alert after 2 seconds
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    } catch (error) {
      alert("Failed to send the message, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
        <h3 className="mb-4 text-2xl font-bold text-[#1F2937]">Contact Us</h3>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[120px]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
        {showAlert && (
          <AlertSuccessful
            title="Success!"
            description="Your message has been sent successfully."
          />
        )}
      </div>
    </div>
  );
}