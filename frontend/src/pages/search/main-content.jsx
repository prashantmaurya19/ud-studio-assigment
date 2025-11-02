import { twJoin } from "tailwind-merge";
import { SearchBanner } from "./search-banner";
import { SearchGrid } from "./search-grid";

export function MainContent() {
  return (
    <div className={twJoin(
      "flex-1 h-full",
      "flex flex-col",
      "bg-amber-100 dark:bg-gray-900",
      "rounded-b-2xl",
      "pt-1", // Add some top padding
    )}>
      <SearchBanner />
      <div className={twJoin(
        "w-full grow-1",
      )}>
        <SearchGrid />
      </div>
    </div>
  );
}