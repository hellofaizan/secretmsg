import React from "react";
import { getUserByUsername } from "@/server/user";
import { Pencil, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import type { Metadata, ResolvingMetadata } from "next";
import Header from "@/components/Header";
import Meteors from "@/components/magicui/meteors";

type Props = {
  params: { username: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.username;

  // fetch data
  const user = await getUserByUsername(id);

  if (!user) {
    return {
      title: "Claim this username | Tielinks",
      description:
        "Claim this username for self | Tielinks | A fancy and cool link in bio | Share all links in one place",
      icons: [
        {
          url: "https://tielinks.vercel.app/favicon.ico",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "https://tielinks.vercel.app/favicon.ico",
          sizes: "512x512",
          type: "image/png",
        },
        {
          url: "https://tielinks.vercel.app/favicon.ico",
          sizes: "1024x1024",
          type: "image/png",
        },
      ],
      applicationName: "Tielinks",
      creator: "HelloFaizan",
      twitter: {
        site: "@tielinksgg",
        creator: "@hellofaizaan",
        card: "summary_large_image",
        title: "User Not Found | Tielinks",
        description:
          "User Not Found | Tielinks | A fancy and cool link in bio | Share all links in one place",
      },
      openGraph: {
        title: "User Not Found | Tielinks",
        description:
          "User Not Found | Tielinks | A fancy and cool link in bio | Share all links in one place",
      },
    };
  }

  return {
    title: user?.name + "'s Profile | Tielinks",
    description:
      user?.about +
      " | " +
      user?.name +
      " is on Tielinks | A fancy and cool link in bio | Share all links in one place",
    icons: [
      {
        url: user?.image || "",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: user?.image || "",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: user?.image || "",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
    applicationName: "Tielinks",
    creator: "HelloFaizan",
    twitter: {
      site: "@tielinksgg",
      creator: "@hellofaizaan",
      card: "summary_large_image",
      title: user?.name + "'s Profile | Tielinks",
      description:
        user?.about +
        " | Tielinks | A fancy and cool link in bio | Share all links in one place",
    },
    openGraph: {
      title: user?.name + "'s Profile | Tielinks",
      description:
        user?.about +
        " | Tielinks | A fancy and cool link in bio | Share all links in one place",
    },
  };
}

export default async function page({ params }: Props) {
  const username = params.username;
  const user = await getUserByUsername(username);
  const session = await auth();
  const currentUser = session?.user;

  if (!user) {
    return (
      <div className="relative overflow-hidden">
        <Header />
        <Meteors number={15} />
        <div className="flex min-h-dvh flex-col items-center justify-center gap-2">
          <h1 className="font-sans text-2xl font-semibold">User Not Found</h1>
          <Button variant={"outline"} className="flex items-center">
            <Link href="/" passHref>
              Claim this username ✨
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh lg:min-h-screen flex justify-center">
      {user?.username === currentUser?.username ? (
        <div className="fixed bottom-0 right-0 z-10 mb-4 mr-4">
          <Link href="/dashboard" target="_blank">
            <Button variant={"outline"}>
              <Pencil size={15} className="mr-1" /> Edit Profile
            </Button>
          </Link>
        </div>
      ) : null}

      {/* Share Button and theme toggle */}

      <div className="flex w-full flex-col md:w-1/2 lg:w-1/3">{username}</div>
    </div>
  );
}
