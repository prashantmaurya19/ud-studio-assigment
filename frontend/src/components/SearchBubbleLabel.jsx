import { twJoin } from "tailwind-merge";

export function SearchBubbleLabel({ query, searchCount }) {
  return (
    <div
      className={twJoin(
        "min-w-[15%] h-full",
        "flex items-center gap-2",
        "px-4 py-2",
        "border border-solid",
        "border-amber-400 dark:border-gray-600",
        "bg-wheat-100 dark:bg-gray-800",
        "hover:bg-gray-200 dark:hover:bg-gray-700",
        "text-gray-800 dark:text-gray-200",
        "rounded-full",
        "transition-colors duration-200",
        "cursor-pointer",
        "group",
      )}
    >
      <span className="text-sm font-medium">
        {query}
      </span>
      <span className={twJoin(
        "px-2 py-0.5",
        "text-xs font-bold",
        "bg-gray-200 dark:bg-gray-700",
        "group-hover:bg-gray-300 dark:group-hover:bg-gray-600",
        "text-gray-600 dark:text-gray-400",
        "rounded-full",
        "transition-colors duration-200",
      )}>
        {searchCount}
      </span>
    </div>
  );
}