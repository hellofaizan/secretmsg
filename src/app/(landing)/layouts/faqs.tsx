"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function FAQs() {
  return (
    <div className="z-10 mt-10 w-ful" id="faq">
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
