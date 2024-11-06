"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function UsersTable({ users }: any) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredUsers, setFilteredUsers] = React.useState(users);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    // Filter the users based on the search term
    const filtered = users.filter(
      (user: any) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg">
      <div className="flex justify-between gap-3">
        <div className="relative flex w-full items-center justify-start">
          <input
            type="text"
            placeholder="search by name or email"
            className="w-full rounded-lg border px-3 py-2 focus:border-muted-foreground focus:outline-none lg:w-[35%]"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        <div className="overflow-x-auto">
          <Table className="bg-white">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Username</TableHead>
                <TableHead className="min-w-32 text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers && filteredUsers.length > 0 ? (
                filteredUsers.map((user: any) => (
                  <TableRow key={user.email}>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Avatar className="h-7 w-7">
                          <AvatarImage src={user?.image} />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        {user.name}
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Link
                        href={`https://pouzz.xyz/${user.username}`}
                        target="_blank"
                        className="underline"
                      >
                        {user.username}
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Date(user.joinedAt).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={2} className="text-center">
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
