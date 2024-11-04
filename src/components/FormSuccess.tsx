import { CheckCircle } from "lucide-react";
import React from "react";

export const FormSuccess = ({ message }: { message: any }) => {
  return (
    <div className="w-full">
      <div
        className="relative rounded-md border border-green-500 bg-emerald-200 px-4 py-3 text-xs w-full text-gray-900 dark:border-green-600/40 dark:bg-emerald-500/20 dark:text-gray-300"
        role="alert"
      >
        <span className="flex gap-1 items-center">
          <CheckCircle className="text-gray-900 dark:text-gray-300" size={15} /> {message}
        </span>
      </div>
    </div>
  );
};
