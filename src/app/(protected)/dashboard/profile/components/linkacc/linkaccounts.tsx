import React from "react";
import { linkedAccounts } from "@/server/user";
import { auth } from "@/server/auth";
import AvailableLinkingOptions from "./avlinkoptions";
import AlreadyLinkedOptions from "./allinkedoptions";

const providers = ["google", "twitter", "apple"] as const;

export default async function LinkAccountComp() {
  const session = await auth();
  const accounts = await linkedAccounts(session?.user?.id as string);

  // remove already linked accounts
  const linkedProviders = accounts?.map((account) => account.provider);
  const filteredProviders = providers.filter(
    (provider) => !linkedProviders?.includes(provider),
  );

  return (
    <div className="flex flex-col gap-4 rounded-lg border">
      <div className="flex flex-col gap-1 bg-muted/50 px-4 py-4">
        <p className="text-xl font-semibold">Link Accounts</p>
        <p className="text-sm text-muted-foreground">
          Manage your linked accounts here.
        </p>
      </div>
      <div className="flex flex-col p-2 px-4">
        <AlreadyLinkedOptions account={accounts} />

        <AvailableLinkingOptions providers={filteredProviders} />
      </div>
    </div>
  );
}
