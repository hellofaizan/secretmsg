import React, { Suspense } from "react";
import { adminData } from "@/server/userdata";
import { UsersTable } from "./components/userstbl";
import { Loader } from "lucide-react";

export default async function AdminPage() {
  const users = await adminData();

  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center md:min-h-screen">
          <Loader className="animate-spin" />{" "}
        </div>
      }
    >
      <div className="flex w-full justify-center px-3 pt-3 md:px-0">
        <div className="w-full md:w-[60%] lg:w-[45%]">
          <UsersTable users={users} />
        </div>
      </div>
    </Suspense>
  );
}
