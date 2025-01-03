import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import Topheader from "./layouts/topheader";
import Features from "./layouts/feature";
import WhyPouzz from "./layouts/whypouzz";
import FAQs from "./layouts/faqs";
import Footer from "./components/footer";

export default async function HomePage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="relative flex min-h-dvh justify-center overflow-hidden md:min-h-dvh">
        <div className="flex w-full flex-col pt-[100px] md:w-[95%] md:pt-[150px] lg:w-[70%]">
          <Topheader />
          <Features />
          <WhyPouzz />
          <FAQs />

          <Footer />
        </div>
      </div>
    </>
  );
}
