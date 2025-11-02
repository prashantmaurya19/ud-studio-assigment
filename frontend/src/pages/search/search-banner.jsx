//@ts-nocheck
import { useSelector } from "react-redux";
import { twJoin } from "tailwind-merge";

export function SearchBanner() {
  const query = useSelector((state) => state?.searchInfo.query);
  const resultCount = useSelector(
    (state) => state.searchInfo.search_result?.total,
  );
  const selectedCount = useSelector(
    (state) => state.selectedImage.selected.length,
  );
  return (
    <div
      className={twJoin(
        "w-full h-[5%]",
        "flex items-center justify-between",
        "px-1 py-1",
        "mb-1",
        "text-gray-700 dark:text-gray-200",
      )}
    >
      <h1 className={twJoin("text-lg")}>
        Search for &quot;{query}&quot; - {resultCount} result found
      </h1>
      <div
        className={twJoin("w-max h-full", "flex items-center justify-center")}
      >
        <h1 className={twJoin("text-lg")}>{selectedCount} selected</h1>
      </div>
    </div>
  );
}

