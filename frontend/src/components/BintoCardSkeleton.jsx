import { twJoin } from "tailwind-merge";

export function BintoCardSkeleton() {
  return (
    <div className={twJoin(
      "relative",
      "w-full",
      "bg-gray-100 dark:bg-gray-800",
      "rounded-lg",
      "overflow-hidden",
    )}>
      <div className={twJoin(
        "w-full h-full",
        "bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800",
        "animate-pulse",
      )} />
    </div>
  );
}