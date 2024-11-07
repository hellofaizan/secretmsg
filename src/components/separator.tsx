import { cn } from "@/lib/utils";

type SeparatorProps = {
  /**
   * @default ""
   */
  label?: React.ReactNode;
  /**
   * @default false
   */
  gradient?: boolean;
  className?: string;
};
//======================================
export const SeparatorCustom = ({
  label,
  gradient = false,
  className = "",
}: SeparatorProps) => {
  if (label) {
    return (
      <div className="flex w-full items-center">
        <div
          className={cn(
            "h-[1px] w-full rounded-full",
            gradient
              ? "bg-gradient-to-r from-transparent to-[#727272]"
              : "bg-[#727272]",
            className,
          )}
        ></div>
        <div className="w-fit text-nowrap uppercase text-[#727272]">
          {label}
        </div>
        <div
          className={cn(
            "h-[1px] w-full rounded-full",
            gradient
              ? "bg-gradient-to-r from-zinc-500 to-transparent dark:to-[#727272]"
              : "bg-[#727272]",
            className,
          )}
        ></div>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "h-[1px] w-full rounded-full",
        gradient
          ? "bg-gradient-to-r from-transparent via-zinc-500 to-transparent dark:from-zinc-800 dark:via-zinc-200 dark:to-zinc-700"
          : "bg-zinc-300 dark:bg-zinc-800",
        className,
      )}
    />
  );
};
