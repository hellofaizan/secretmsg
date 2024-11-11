import { currentUser } from "@/server/user";
import React, { Suspense } from "react";
import DashboardComponent from "./components/dashoard";
import Graphs from "./components/Graphs";
import {
  ViewsByCountry,
  ViewsByOS,
  ViewsByReferrer,
} from "@/actions/getAnalytics";
import ViewsByOSComp from "./components/viewsbyos";
import ViewsByCountryComp from "./components/viewsbycountry";
import ViewsByReferrersComp from "./components/viewsbyreferrers";
import { Loader } from "lucide-react";

export default async function page() {
  const session = await currentUser();

  const os = await ViewsByOS({ userId: session?.id || "" });
  const country = await ViewsByCountry({ userId: session?.id || "" });
  const referral = await ViewsByReferrer({ userId: session?.id || "" });

  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center md:min-h-screen">
          <Loader className="animate-spin" />{" "}
        </div>
      }
    >
      <div className="mb-4 flex w-full justify-center px-3 pt-3 md:px-0">
        <div className="flex w-full flex-col gap-3 md:w-[60%] lg:w-[45%]">
          <DashboardComponent userId={session?.id || ""} />
          <Graphs />

          {/* <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
            <ViewsByOSComp data={os} />
            <ViewsByCountryComp data={country} />
          </div> */}

          <div className="w-full">
            <ViewsByReferrersComp data={referral} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
