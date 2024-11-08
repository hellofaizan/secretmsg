import { ChevronsLeft, ReceiptText } from "lucide-react";
import React from "react";
// import Navbar from "~/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          
          <span className="mb-4 flex items-center gap-2 text-4xl font-bold md:text-5xl">
            Terms and Conditions <ReceiptText />
          </span>
          <span>
            Welcome to Pouzz app. These Terms of Service contain the terms and
            conditions that govern all use of the Pouzz app.{" "}
          </span>
          <span>
            Please read these Terms of Service carefully. The App is offered to
            you subject to your acceptance, without modification, of these Terms
            of Service and all other operating rules and policies made available
            to you on or through the App. If you do not agree to these Terms,
            please do not use the App. When accepted by you, these Terms form a
            legally binding contract between you and Pouzz app, a legal entity.
          </span>
          <span>
            To accept these Terms on behalf of yourself or on behalf of a legal
            entity, you must have the legal capacity to do so. This means that
            if you accept these Terms on behalf of yourself, you must be at
            least 13 years of age or have valid authorization from your legal
            representative. If you accept these Terms on behalf of a legal
            entity, the legal entity must be duly incorporated and you must have
            the legal authority to bind that legal entity. By accepting these
            Terms you confirm the foregoing.
          </span>
          <span className="mb-4 text-2xl font-bold md:text-3xl">App usage</span>
          <span>
            The App serves as a platform for collecting and providing anonymous
            feedback for questions asked and polls created by the Users (as
            defined below). The App does contain some sample questions provided
            by the Supplier but these need not be used. The Users (as defined
            below) are free to decide whether and which questions to ask and
            collect feedback on. The App also allows the registered Users (as
            defined below) to interact with one another. Regardless of how the
            App is used, the User (as defined below) giving feedback may always
            choose to remain anonymous.
          </span>
          <span>
            You can use the App as a registered or unregistered user. As an
            unregistered User, you can browse the public parts of the App and
            give feedback. As a registered User, you can additionally collect
            feedback and use other functions of the App only available to
            registered Users.
          </span>
          <span>
            You can register by creating an account on the App or by using your
            social media account (e.g. Facebook, Twitter). Your login
            credentials can be used only by you. You must keep your login
            credentials confidential and safe. If you believe your login
            credentials have been compromised, you must promptly notify us
            thereof.
          </span>
          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Risks and Considerations
          </span>
          <span>
            Receiving feedback is increasingly important in business,
            self-development, and other areas of life. The App is a feedback
            tool designed to gather honest and constructive feedback from
            friends, colleagues, acquaintances, or others. Constructive feedback
            is meaningfully specific, contains advice, and is encouraging. While
            giving feedback, ensure that you stay positive - this does not mean
            that you cannot give negative feedback, but provide at least as much
            positive feedback as well.
          </span>
          <span>
            Please note that by asking questions and creating polls on the App,
            a URL is created which can be distributed by anyone anywhere,
            meaning that anyone with the URL can provide feedback on the
            question or poll and do so anonymously. This means that you make
            yourself vulnerable to all kinds of feedback. Not all feedback
            received is positive. Some feedback may be considered impolite or
            offensive. You may receive feedback that you do not anticipate. Some
            feedback may evoke strong emotions.
          </span>
          <span>
            All feedback received is private by default (visible only to you).
            You have the option to delete any feedback received and report any
            Users whose feedback or actions you consider abusive. You have sole
            control over and sole responsibility for the questions you ask and
            the feedback you decide to make public. You do not have to ask any
            questions and you do not have to make any feedback public.
          </span>
          <span>
            If you do not accept the foregoing risks and considerations, do not
            use the App. Using the App is strictly voluntary.
          </span>
          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Content usage
          </span>
          <span>
            Any information submitted to the App in any form, whether publicly
            posted or privately transmitted, is the sole responsibility of the
            person who originated such content. This means that the Users, and
            not the Supplier, are entirely responsible for all User Content that
            is made available through the App, as well as for any actions taken
            by the Supplier, other Users, or third parties as a result of such
            User Content.
          </span>
          <span>
            Any User Content must be in compliance with the Terms and applicable
            law. By submitting User Content to the App, you confirm that you
            have the right to do so and that it does not violate any rights
            (including, but not limited to, intellectual property rights) of any
            third parties.
          </span>
          <span>
            The Supplier does not have an obligation to monitor or control the
            User Content in order to discover any unlawful nature therein and
            will not take responsibility for it. However, if such unlawful User
            Content or the action of its unlawful processing is discovered or
            brought to the attention of the Supplier or if there is reason to
            believe that certain User Content is unlawful, the Supplier may use
            the remedies described herein and the applicable law.
          </span>
          <span>
            Note that as a registered User, you are also responsible for the
            User Content you decide to make public through your URL.
          </span>
          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Data Collection
          </span>
          <span>
            By using this service you are agreeing for us to collect the
            following data -
          </span>
          <ul className="list-inside list-disc">
            <li>Name</li>
            <li>Email</li>
            <li>Payment Information</li>
            <li>Usage Activity</li>
          </ul>
          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Prohibited Activities
          </span>
          <span>
            The App may only be used for its intended purposes. The App may not
            be used for any purposes or in any manner that can be construed as
            unlawful, malicious, in bad faith, abusive, or discriminatory. Such
            uses shall include, but are not limited to, the following:
          </span>
          <ul className="list-outside list-disc">
            <li>
              publish any User Content that is incorrect, misleading, unlawful,
              harassing, abusive, threatening, vulgar, obscene, harmful,
              libelous, invasive of another's privacy, or constitutes an
              infringement of third-party intellectual property rights or any
              other rights (such as rights of privacy and publicity);
            </li>
            <li>
              publish any User Content that is harmful (for example, viruses,
              worms, malware, and other destructive codes);
            </li>
            <li>impersonate other people;</li>
            <li>
              restrict or inhibit any other User from using and enjoying the App
              in any manner;
            </li>
            <li>make threats of violence against others;</li>
            <li>harass other people;</li>
            <li>intentionally distribute untrue or misleading information;</li>
            <li>
              use the App in any manner that could damage, disable, overburden,
              or impair any of our servers, or the network(s) connected to any
              of our servers;
            </li>
            <li>
              copy or download the content of the App for commercial use without
              copyright holder's prior consent;
            </li>
            <li>
              attempt to gain unauthorized access to any part of the App, other
              accounts, computer systems, or networks connected to any of our
              servers or to any of the services, through hacking, password
              mining, or any other means;
            </li>
            <li>
              obtain or attempt to obtain any materials or information through
              any means not intentionally made available through the App;
            </li>
            <li>
              use the App in any other manner to commit a crime, breach any
              applicable law, or invite others to do so.
            </li>
          </ul>
          <span>
            The Supplier shall have the sole discretion in determining whether
            your particular use of the App is in violation of these
            requirements. Should your use of the App be in violation of these
            requirements, the Supplier shall have the right to use any remedies
            described herein or the applicable law. Note that you are solely
            responsible for your actions on the App.
          </span>
          <span className="mb-4 text-2xl font-bold md:text-3xl">Privacy</span>

          <span>
            The Supplier is responsible for the processing of your personal
            data. Collecting your personal data: The Supplier may collect the
            following personal data in the following ways:
          </span>

          <ul className="list-outside list-disc">
            <li>
              You may provide us your personal data, e.g., name, username,
              password, email address, etc., upon registration (including via
              Facebook or other available social media means), using the App
              (e.g., photo), contacting us, etc.
            </li>
            <li>
              We collect certain data by automated means, such as cookies and
              web beacons, when you visit the App, e.g., IP address, browser
              type, operating system, referring URLs, information on actions
              taken on the App, and dates and times of App visits.
            </li>
          </ul>

          <span>
            Using your personal data: We may use your personal data for the
            following purposes:
          </span>

          <ul className="list-outside list-disc">
            <li>to provide the App and parts thereof;</li>
            <li>to contact you, to provide assistance, to collect feedback;</li>
            <li>
              to exercise any rights and obligations arising from the law;
            </li>
            <li>
              to personalize the App, monitor and analyze the effectiveness of
              the App, monitor aggregate site usage metrics such as total number
              of visitors and pages viewed, etc.
            </li>
          </ul>

          <span>
            Please note that your name as entered during registration, as well
            as your URL and photo (if uploaded) is publicly visible to all
            visitors of the App.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Intellectual Property Rights
          </span>

          <span>
            Any and all intellectual property rights in and to the App (except
            User Content) are exclusively owned by the Supplier and/or its
            third-party partners. Your use of the App does not grant you any
            ownership or intellectual property rights therein. You may only use
            the App for its intended purposes.
          </span>

          <span>
            You retain all your ownership and intellectual property rights in
            and to your User Content. By submitting your User Content to the
            Supplier through the App, you hereby grant the Supplier and its
            affiliates, sublicensees, partners, designees, and assignees a
            worldwide, non-exclusive, fully paid-up, royalty-free, perpetual,
            irrevocable, sublicensable, and transferable license to use,
            reproduce (including by making mechanical reproductions),
            distribute, modify, adapt, prepare derivative works of, publicly
            display, publicly perform, and otherwise exploit your User Content
            and derivatives thereof for any purpose whatsoever in connection
            with the App and the Supplier’s (and its successors’) business,
            including for providing the App for its intended purpose, as well as
            for the Supplier’s commercial, marketing or any similar purpose.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Disclaimers and Restriction of Liability
          </span>

          <span>
            The Supplier provides the App "as is" and "as available" with no
            warranties of any kind. The Supplier expressly disclaims any
            warranty, express or implied, regarding the App, including any
            implied warranty of merchantability, fitness for a particular
            purpose, non-infringement of proprietary or other rights,
            correctness, accuracy and reliability, or that the App will be
            secure, uninterrupted or free of errors, viruses or other harmful
            components, or that defects will be corrected.
          </span>

          <span>
            The App may include links to other websites or services (hereinafter
            Linked Sites). The Supplier does not endorse any such Linked Sites
            or the information, material, products, or services contained on or
            accessible through Linked Sites.
          </span>

          <span>
            To the greatest extent possible under applicable law, the Supplier
            shall not be liable to you (whether under the law of contract, the
            law of torts or otherwise) in relation to the contents of, or use
            of, or otherwise in connection with the App.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">Language</span>

          <span>
            The Terms, the App, and the support of the Supplier are available in
            the English language. The Supplier may make available other language
            versions thereof. You confirm that you fully understand the chosen
            language of the Terms, the App, and the support of the Supplier and
            consent to the use of it.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Severability
          </span>

          <span>
            If any provision of the Terms becomes or is determined to be invalid
            or unenforceable, then the invalidity or unenforceability of that
            provision does not affect the validity or enforceability of the
            remaining provisions of the Terms. In such a case, the parties shall
            replace the invalid or unenforceable provision with a valid or
            enforceable provision that allows for the maximum attainment under
            the law of the very same effect and result as was intended by the
            replaced provision without undue delay.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Applicable Law
          </span>

          <span>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern these Terms and your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Dispute Resolution
          </span>

          <span>
            If you have any concern or dispute about the Service, you agree to
            first try to resolve the dispute informally by contacting the
            Company.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Contact Us
          </span>

          <span>
            If you have any questions or concerns about the Terms and Conditions
            please contact us at{" "}
            <Link
              href={"mailto:contact@pouzz.xyz"}
              target="_blank"
              className="italic underline hover:text-[#a754fe]"
            >
              contact@pouzz.xyz
            </Link>
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">Supplier</span>

          <span>
            Pouzz Admin EMail:{" "}
            <Link
              href={"mailto:contact@pouzz.xyz"}
              target="_blank"
              className="italic underline hover:text-[#a754fe]"
            >
              contact@pouzz.xyz
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
