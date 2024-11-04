"use server";

import { db } from "@/server/db";

export async function ViewsToday({ userId }: { userId: string }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const end = new Date(today);
  end.setHours(23, 59, 59, 999);

  const viewsToday = await db.pageVisits.count({
    where: {
      userId,
      timestamp: {
        gte: today,
        lt: end,
      },
    },
  });

  return viewsToday;
}

export async function ViewsYesterday({ userId }: { userId: string }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const viewsYesterday = await db.pageVisits.count({
    where: {
      userId,
      timestamp: {
        gte: yesterday,
        lt: today,
      },
    },
  });

  return viewsYesterday;
}

export async function PercentageChange({ userId }: { userId: string }) {
  const viewsToday = await ViewsToday({ userId });
  const viewsYesterday = await ViewsYesterday({ userId });

  const percentageChange =
    ((viewsToday - viewsYesterday) / viewsYesterday) * 100;

  if (isNaN(percentageChange)) {
    return "0%";
  }

  if (percentageChange === Infinity) {
    return "100%";
  }

  return percentageChange.toFixed(0) + "%";
}

export async function ViewsThisMonth({ userId }: { userId: string }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startOfMonth = new Date(today);
  startOfMonth.setDate(1);

  const viewsThisMonth = await db.pageVisits.count({
    where: {
      userId,
      timestamp: {
        gte: startOfMonth,
      },
    },
  });

  return viewsThisMonth;
}

export async function ViewsPreviousMonth({ userId }: { userId: string }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startOfMonth = new Date(today);
  startOfMonth.setDate(1);

  const previousMonth = new Date(startOfMonth);
  previousMonth.setMonth(startOfMonth.getMonth() - 1);

  const viewsPreviousMonth = await db.pageVisits.count({
    where: {
      userId,
      timestamp: {
        gte: previousMonth,
        lt: startOfMonth,
      },
    },
  });

  return viewsPreviousMonth;
}

export async function TotalViews({ userId }: { userId: string }) {
  const totalViews = await db.pageVisits.count({
    where: {
      userId,
    },
  });

  return totalViews;
}

export async function AverageViews({ userId }: { userId: string }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startOfMonth = new Date(today);
  startOfMonth.setDate(1);

  const viewsThisMonth = await db.pageVisits.count({
    where: {
      userId,
      timestamp: {
        gte: startOfMonth,
      },
    },
  });

  const averageViews = viewsThisMonth / today.getDate();

  return averageViews.toFixed(2);
}

export async function ViewsByDayThisWeak({ userId }: { userId: string }) {
  const today = new Date();
  const tenDaysAgo = new Date(today);
  tenDaysAgo.setDate(today.getDate() - 9);

  const viewsByDayThisWeak = await db.pageVisits.findMany({
    where: {
      userId,
      timestamp: {
        lte: today,
        gte: tenDaysAgo,
      },
    },
    select: {
      timestamp: true,
    },
  });

  type AggregatedData = {
    [key: string]: number;
  };

  // Process and aggregate the data
  const aggregatedData: AggregatedData = viewsByDayThisWeak.reduce(
    (acc, curr) => {
      const date = new Date(curr.timestamp);
      const key = `${date.getDate()}/${date.getMonth() + 1}`;

      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key] += 1;

      return acc;
    },
    {} as AggregatedData,
  );

  const fullRange = [];
  for (let d = new Date(tenDaysAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const key = `${d.getDate()}/${d.getMonth() + 1}`;
    fullRange.push(key);
  }

  // Ensure every date in the range is present in the aggregated data
  const completeData = fullRange.map((date) => {
    return {
      date: date,
      views: aggregatedData[date] || 0,
    };
  });

  return completeData;
}

export async function ViewsByDevice({ userId }: { userId: string }) {
  const viewsByDevice = await db.pageVisits.groupBy({
    where: {
      userId,
    },
    by: ["device"],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
    take: 8,
  });

  return viewsByDevice;
}

export async function ViewsByCountry({ userId }: { userId: string }) {
  const viewsByCountry = await db.pageVisits.groupBy({
    where: {
      userId,
    },
    by: ["country"],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
    take: 10,
  });

  return viewsByCountry;
}

export async function ViewsByBrowser({ userId }: { userId: string }) {
  const viewsByBrowser = await db.pageVisits.groupBy({
    where: {
      userId,
    },
    by: ["browser"],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
    take: 8,
  });

  return viewsByBrowser;
}

export async function ViewsByOS({ userId }: { userId: string }) {
  const viewsByOS = await db.pageVisits.groupBy({
    where: {
      userId,
    },
    by: ["os"],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
    take: 8,
  });

  return viewsByOS;
}

export async function ViewsByReferrer({ userId }: { userId: string }) {
  const viewsByReferrer = await db.pageVisits.groupBy({
    where: {
      userId,
    },
    by: ["referrer"],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
    take: 10,
  });

  return viewsByReferrer;
}
