"use server";

import { db } from "@/server/db";
import axios from "axios";
import { UAParser } from "ua-parser-js";

interface Props {
  userId: string;
  visitorId?: string;
  request_headers: any;
}

export default async function VisitCouter({ userId, request_headers }: Props) {
  const userAgent = request_headers.get("user-agent") || "";
  const ip = request_headers.get("x-forwarded-for") || "";
  const referrer = request_headers.get("referer") || "";
  const language = request_headers.get("accept-language") || "";

  if (!userId) {
    return { error: "Not able to count this users analytics" };
  }

  if (referrer === "http://localhost:3000/") {
    return;
  }

  const parser = new UAParser(userAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();

  let latitude: number | null = null;
  let longitude: number | null = null;
  let city: string | null = null;
  let country: string | null = null;

  if (referrer === "http://localhost:3000/") {
    return;
  }

  try {
    const response = await axios(`http://ip-api.com/json/${ip}`);
    const data = response.data;
    latitude = data.lat;
    longitude = data.lon;
    city = data.city;
    country = data.country;
  } catch (error) {
    console.error("Error fetching IP data:", error);
  }

  let referrerType = "Unknown";
  let referringURL = "";

  if (referrer === "") {
    referrerType = "Direct";
  } else {
    referrerType = "External";
    referringURL = referrer;
  }

  const data = {
    ip,
    browser: browser.name,
    browserVersion: browser.version,
    os: os.name,
    osVersion: os.version,
    device: device.type,
    referrer,
    referrerType,
    referringURL,
    language,
    latitude,
    longitude,
    city,
    country,
  };

  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== undefined),
  );

  // if ip = ::1, then its localhost
  if (ip === "::1") {
    return;
  } else {
    await db.pageVisits.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        ...filteredData,
      },
    });
  }

  return { success: "" };
}
