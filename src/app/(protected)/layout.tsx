import Navbar from "./dashboard/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/server/auth";
import PageLink from "./dashboard/components/pagelink";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className="flex min-h-screen w-full">
        <div className="flex flex-1 flex-col overflow-x-hidden">
          <LayoutHeader session={session} />
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}

function LayoutHeader({ session }: { session: any }) {
  return (
    <header className="top-0 z-30 mt-3 flex w-full shrink-0 flex-col items-center justify-center px-3 md:px-0">
      <Navbar session={session} />
      <PageLink session={session} />
    </header>
  );
}
