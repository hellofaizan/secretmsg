"use client";

import { IconBrandX } from "@tabler/icons-react";
import { ChevronDown, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function FAQs() {
  return (
    <div className="w-ful z-10 mt-10" id="faq">
      <h2 className="mb-6 text-3xl font-bold tracking-tighter md:text-4xl">
        Frequently asked questions??
      </h2>

      <div className="flex flex-wrap">
        <div className="w-full pr-2 lg:w-1/2">
          <AccordionItem
            header="What is Pozz App ?"
            text="This platform is a unique space for the people to receive anonymous confessions. Users can create profiles, and anyone can send them a long, anonymous message—perfect for sharing thoughts or confessions without revealing who they are."
          />
          <AccordionItem
            header="How does anonymity work ?"
            text="All messages sent on our platform are completely anonymous. We do not store or share any information about the sender, ensuring privacy for everyone involved."
          />
        </div>
        <div className="w-full pl-2 lg:w-1/2">
          <AccordionItem
            header="Is it safe to use this platform ?"
            text="Yes, your privacy is our priority. We follow strict data protection practices and do not collect any identifying details about message senders, making it a secure place to receive anonymous messages."
          />
          <AccordionItem
            header="Can I respond to anonymous messages ?"
            text="Currently, this platform allows only one-way anonymous messaging. If you wish to respond, you can share your confession publicly on your profile, but the original sender's identity will remain unknown."
          />
        </div>
      </div>

      <div className="mx-auto mt-4 overflow-hidden rounded-xl bg-gray-100 text-center sm:mt-4">
        <div className="px-3 py-4 sm:p-6">
          <div className="mx-auto max-w-sm">
            <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl">
              Still have questions?
            </h3>
            <p className="mt-2 text-base font-normal text-gray-600">
              {
                "Can't find the answer you're looking for? Reach out to us via Twitter/X, link mentioned below."
              }
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Link
                href="https://x.com/hubulwattan"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[#E73336] px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                role="button"
              >
                <IconBrandX />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AccordionItem = ({ header, text }: { header: string; text: string }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="mb-4 w-full rounded-lg border p-3 py-4 lg:px-4 xl:px-7">
      <button
        className={`flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-4 flex h-7 w-full max-w-[28px] items-center justify-center rounded-lg bg-muted">
          <ChevronDown
            className={`h-5 w-5 duration-75 ease-in-out ${
              active ? "rotate-180 transform" : ""
            }`}
          />
        </div>

        <div className="w-full">
          <h4 className="text-dark text-lg font-semibold">{header}</h4>
        </div>
      </button>

      <div className={`duration-75 ease-in-out ${active ? "block" : "hidden"}`}>
        <p className="py-3 text-base leading-relaxed dark:text-gray-300">
          {text}
        </p>
      </div>
    </div>
  );
};
