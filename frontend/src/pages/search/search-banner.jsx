//@ts-nocheck
import { useSelector } from "react-redux";
import { twJoin } from "tailwind-merge";

export function SearchBanner({ }) {
  const query = useSelector((state) => state?.searchInfo.query);
  const resultCount = useSelector((state) => state.searchInfo.search_result?.results.length); // Replace with actual result count
  return (
    <div className={twJoin(
      "w-full",
      "px-1 py-1",
      "mb-4",
      "text-gray-700 dark:text-gray-200",
    )}>
      <h1 className={twJoin(
        "text-lg",
      )}>
        Search for &quot;{query}&quot; - {resultCount} result found
      </h1>
    </div>
  );
}