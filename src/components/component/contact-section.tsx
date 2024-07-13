import React from "react";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F0F4FF] to-[#F7F4FF] py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-[#1F2937] md:text-4xl lg:text-5xl">
            Reach Out for Support
          </h2>
          <p className="text-[#6B7280] md:text-xl">
            Our compassionate team is here to provide the resources and guidance
            you need on your journey to recovery. Whether you're struggling with
            addiction or supporting a loved one, we're here to help.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/Contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#F3F4F6] px-4 py-2 text-sm font-medium text-[#6B7280] transition-colors hover:bg-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#6B7280] focus:ring-offset-2 sm:w-auto"
              prefetch={false}
            >
              <Button className="w-full sm:w-auto">Learn More</Button>
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
