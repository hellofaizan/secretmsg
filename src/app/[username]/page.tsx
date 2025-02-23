import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Loader } from "lucide-react";
import { getUserByUsername } from "@/server/user";
import type { Metadata } from "next";

const UsernamePage = React.lazy(() => import("./components/UserPage"));

type Props = {
  params: { username: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.username;

  const user = await getUserByUsername(id);

  if (!user) {
    return {
      title: "Claim this username | Pouzz",
      description:
        "Claim this username for self | Pouzz - An anonymous messaging platform with just a link",
      applicationName: "Pouzz",
      creator: "HelloFaizan",
      twitter: {
        site: "@pouzz",
        creator: "@hubulwattan",
        card: "summary_large_image",
        title: "User Not Found | Pouzz",
        description:
          "Claim this username for self | Pouzz - An anonymous messaging platform with just a link",
      },
      openGraph: {
        title: "User Not Found | Pouzz",
        description:
          "Claim this username for self | Pouzz - An anonymous messaging platform with just a link",
      },
    };
  }

  return {
    title: user?.name + "'s Profile | on Pouzz",
    description:
      user?.about +
      " | " +
      user?.name +
      " is on Pouzz - An anonymous messaging platform with just a link",
    applicationName: "Pouzz",
    creator: "HelloFaizan",
    twitter: {
      site: "@hubulwattan",
      creator: "@hubulwattan",
      card: "summary_large_image",
      title: user?.name + "'s Profile | on Pouzz",
      description:
        user?.about +
        " | Pouzz - An anonymous messaging platform with just a link",
    },
    openGraph: {
      title: user?.name + "'s Profile | Pouzz",
      description:
        user?.about +
        " | Pouzz - An anonymous messaging platform with just a link",
    },
  };
}

export default async function App({ params }: Props) {
  const user = await getUserByUsername(params.username);

  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center md:min-h-screen">
          <Loader className="animate-spin" />{" "}
        </div>
      }
    >
      <div className="flex w-full flex-col gap-2 px-1">
        <header className="top-0 z-30 mt-1 flex w-full shrink-0 flex-col items-center justify-center">
          <Navbar username={user?.username} />
        </header>
        <UsernamePage user={user} username={params.username} />
      </div>
    </Suspense>
  );
}
