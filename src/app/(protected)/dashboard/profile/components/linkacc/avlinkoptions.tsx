"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link2, Loader } from "lucide-react";
import { signIn } from "next-auth/react";

export default function AvailableLinkingOptions(providers: any) {
  const filteredProviders = providers.providers;
  const [loading, setLoading] = React.useState(false);

  const socialName = (provider: string) => {
    return provider.charAt(0).toUpperCase() + provider.slice(1);
  };

  const socialIcon = (provider: string) => {
    switch (provider) {
      case "google":
        return "/logos/google.svg";
      case "twitter":
        return "/logos/twitter.svg";
      case "apple":
        return "/logos/apple.svg";
      default:
        return "/logos/google.svg";
    }
  };

  const linkAccount = (provider: string) => () => {
    setLoading(true);
    signIn(provider);
  };

  return (
    <div className="flex flex-col">
      {filteredProviders.map((provider: any) => (
        <div
          key={provider}
          className="my-2 flex items-center justify-between gap-2 px-2"
        >
          <div className="flex items-center gap-2">
            <img
              src={socialIcon(provider)}
              alt={provider}
              className="h-6 w-6"
            />
            <div className="flex items-baseline gap-2">
              <p className="text-lg font-semibold">{socialName(provider)}</p>
            </div>
          </div>

          <Button
            variant={"outline"}
            className="flex gap-1 text-muted-foreground"
            onClick={linkAccount(provider)}
          >
            {loading ? (
              <Loader className="h-5 w-5 animate-spin" />
            ) : (
              <Link2 className="h-5 w-5" />
            )}
            LINK
          </Button>
        </div>
      ))}
    </div>
  );
}
