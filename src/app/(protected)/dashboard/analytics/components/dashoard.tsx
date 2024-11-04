import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, User, Users, MousePointer2 } from "lucide-react";
import {
  ViewsToday,
  TotalViews,
  PercentageChange,
  AverageViews,
} from "@/actions/getAnalytics";

export default async function DashboardComponent({
  userId,
}: {
  userId: string;
}) {
  const viewsToday = ViewsToday({ userId: userId });
  const totalViews = TotalViews({ userId: userId });
  const percentageChange = PercentageChange({ userId: userId });
  const averageViews = AverageViews({ userId: userId });

  return (
    <div className="flex w-full gap-2">
      <div className="grid flex-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total visitors
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalViews || ""}</div>
            {/* <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p> */}
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Visitors Today
            </CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{viewsToday}</div>
            <p className="text-xs text-muted-foreground">
              {percentageChange} from yesterday
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg Visitors
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {averageViews}{" "}
              <span className="text-base font-normal text-muted-foreground">
                {" "}
                / day
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
