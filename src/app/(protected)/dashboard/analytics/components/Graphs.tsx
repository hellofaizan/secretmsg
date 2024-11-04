import React from "react";
import PageVisitGraph from "./pageVisitGraph";
import { ViewsByDayThisWeak } from "@/actions/getAnalytics";
import { currentUser } from "@/server/user";
import { userData } from "@/server/userdata";

export default async function () {
  const session = await currentUser();
  const user = await userData(session?.id || "");
  const data = await ViewsByDayThisWeak({ userId: user?.id || "" });
  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <PageVisitGraph className="h-max w-full" data={data || []} />
    </div>
  );
}
