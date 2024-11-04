import Navbar from "./dashboard/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/server/auth";

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
    <header className="flex top-0 w-full z-30 shrink-0 items-center justify-center mt-3 px-3 md:px-0">
      <Navbar session={session} />
    </header>
  );
}
