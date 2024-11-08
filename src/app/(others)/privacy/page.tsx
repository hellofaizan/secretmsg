import { Button } from "@/components/ui/button";
import { ChevronsLeft, FileLock } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex w-full items-center justify-center overflow-hidden pb-6">
        <div className="mt-16 flex w-full flex-col space-y-6 md:w-[85%] lg:w-1/2">
          <Link href={"/"}>
            <Button variant={"ghost"} className="bg-muted/45">
              <ChevronsLeft size={28} />
            </Button>
          </Link>
          <div className="mb-3 flex flex-col items-start">
            <span className="flex items-center gap-2 text-4xl font-bold md:text-5xl">
              Privacy Policy <FileLock />
            </span>
            <span className="mt-2 text-sm text-muted-foreground">
              Updated on 09/11/024{" "}
            </span>
          </div>
          <span>
            At [App Name], we are committed to protecting the privacy of our
            users and customers. This Privacy Policy explains how we collect,
            use, and disclose personal information when you use our website and
            our chrome extension.{" "}
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Information Collection
          </span>
          <span>
            We collect information from you when you use our website or service,
            including:
          </span>
          <ul className="list-inside list-disc">
            <li>
              <span className="font-bold">Device Information</span>: When you
              visit our website, we collect information about your device, such
              as your IP address, browser type, and operating system. We also
              collect information about your browsing activity on our website,
              such as the pages you visit, the links you click, and the search
              terms you use.
            </li>
            <li>
              <span className="font-bold">Log Data</span>: We also collect log
              data when you access our website or service, which includes
              information about your device, browser, and internet service
              provider, as well as the date and time of your request.
            </li>
            <li>
              <span className="font-bold">Cookies</span>: We use cookies to
              improve your experience on our website and to remember your
              preferences. Cookies are small text files that are stored on your
              device when you visit a website.
            </li>
          </ul>
          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Use of Personal Information
          </span>
          <span>
            We use the personal information we collect for the following
            purposes:
          </span>
          <ul className="list-inside list-disc">
            <li>To improve our website and service</li>
            <li>To process your orders and payments</li>
            <li>
              To communicate with you about your account, orders, and other
              transactions
            </li>
            <li>
              To provide you with information or advertising relating to our
              products or services
            </li>
            <li>
              To comply with applicable laws and regulations, to respond to a
              subpoena, search warrant or other lawful request for information
              we receive, or to otherwise protect our rights.
            </li>
          </ul>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Disclosure of Personal Information
          </span>
          <span>
            We do not sell or share your personal information with third parties
            for their own marketing or commercial use. However, we may share
            your personal information with third parties for the following
            purposes:
          </span>
          <ul className="list-inside list-disc">
            <li>
              <span className="font-bold">Service Providers</span>: We may share
              your personal information with third-party service providers who
              assist us with various aspects of our business operations, such as
              website hosting, data analysis, payment processing, and customer
              service.
            </li>
            <li>
              <span className="font-bold">
                Compliance with Laws and Law Enforcement
              </span>
              : We may disclose your personal information to government
              authorities or law enforcement officials in order to comply with
              applicable laws, regulations, or legal process.
            </li>
            <li>
              <span className="font-bold">Protection of Rights and Safety</span>
              : We may disclose your personal information to protect the rights,
              property, or safety of magicreply.io, our users, or the public.
            </li>
          </ul>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Your Rights
          </span>
          <span>
            If you are a resident of certain countries, including those in the
            European Economic Area, you have certain rights in relation to your
            personal information, including the right to request access to,
            correct, update, or delete your personal information. If you would
            like to exercise any of these rights, please contact us at{" "}
            <Link
              href={"mailto:contact@pouzz.xyz"}
              target="_blank"
              className="italic underline hover:text-[#a754fe]"
            >
              contact@pouzz.xyz
            </Link>
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Changes to This Privacy Policy
          </span>

          <span>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or to comply with legal or regulatory
            requirements.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Contact Us
          </span>

          <span>
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at{" "}
            <Link
              href={"mailto:contact@pouzz.xyz"}
              target="_blank"
              className="italic underline hover:text-[#a754fe]"
            >
              contact@pouzz.xyz
            </Link>
          </span>
          <span>
            We will make every effort to respond to your inquiry and address any
            concerns you may have.
          </span>
        </div>
      </div>
    </>
  );
}
