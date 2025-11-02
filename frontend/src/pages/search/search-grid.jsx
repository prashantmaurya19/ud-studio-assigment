//@ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import { twJoin } from "tailwind-merge";
import { BintoCardImage } from "@ud/components/BintoCardImage";
import { useState, useRef, useEffect } from "react";
import { throttle } from "lodash";
import { concatSearchResult } from "@ud/store/search-info";

export function SearchGrid() {
  const dispatch = useDispatch();
  const page_no = useSelector((state) => {
    return state.searchInfo.curr_page;
  });
  const total_pages = useSelector(
    (state) => state.searchInfo.search_result?.total_pages,
  );
  const items = useSelector((state) =>
    state.searchInfo.results.map((item) => ({
      imageUrl: item.urls.raw,
      width: item.width,
      height: item.height,
    })),
  );

  return (
    <div
      className={twJoin(
        "w-full h-full",
        "min-h-[300px]",
        "max-h-[calc(100vh-12rem)]", // Maximum height with room for header
        "bg-yellow-50 dark:bg-gray-800",
        "border border-amber-600 dark:border-gray-700",
        "shadow-lg",
        "rounded-2xl",
        "overflow-hidden",
      )}
    >
      <div
        className={twJoin(
          "w-full h-full",
          "overflow-y-auto",
          "p-2",
          "[&::-webkit-scrollbar]:w-2",
          "[&::-webkit-scrollbar-track]:bg-yellow-50",
          "[&::-webkit-scrollbar-thumb]:bg-amber-400",
          "[&::-webkit-scrollbar-track]:dark:bg-gray-600",
          "[&::-webkit-scrollbar-thumb]:dark:bg-gray-800",
          "[&::-webkit-scrollbar-thumb]:rounded-full",
        )}
      >
        <div
          className={twJoin(
            "grid grid-cols-4",
            "gap-2", // 2px gap between columns
          )}
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            {items
              ?.filter((_, index) => index % 4 === 0)
              .map((item, idx) => (
                <BintoCardImage
                  key={idx * 4}
                  imageUrl={item.imageUrl}
                  width={item.width}
                  height={item.height}
                />
              ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            {items
              ?.filter((_, index) => index % 4 === 1)
              .map((item, idx) => (
                <BintoCardImage
                  key={idx * 4 + 1}
                  imageUrl={item.imageUrl}
                  width={item.width}
                  height={item.height}
                />
              ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            {items
              ?.filter((_, index) => index % 4 === 2)
              .map((item, idx) => (
                <BintoCardImage
                  key={idx * 4 + 2}
                  imageUrl={item.imageUrl}
                  width={item.width}
                  height={item.height}
                />
              ))}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-2">
            {items
              ?.filter((_, index) => index % 4 === 3)
              .map((item, idx) => (
                <BintoCardImage
                  key={idx * 4 + 3}
                  imageUrl={item.imageUrl}
                  width={item.width}
                  height={item.height}
                />
              ))}
          </div>
        </div>

        {page_no == -1 ? null : (
          <div className={twJoin("flex justify-center", "mt-6 mb-2")}>
            <button
              onClick={(e) => {
                if (page_no >= total_pages) return;
                fetch(
                  `/api/search/?page=${page_no + 1}&query=${localStorage.getItem("last_query")}`,
                )
                  .then((response) => response.json())
                  .then((data) => {
                    dispatch(concatSearchResult(data));
                  })
                  .catch((error) => {
                    console.error("Error during search:", error);
                  });
              }}
              className={twJoin(
                "px-6 py-2.5",
                "bg-amber-500 hover:bg-amber-600",
                "dark:bg-amber-600 dark:hover:bg-amber-700",
                "text-white",
                "font-medium",
                "rounded-full",
                "shadow-md hover:shadow-lg",
                "transition-all duration-200",
                "focus:outline-none focus:ring-2",
                "focus:ring-amber-400 focus:ring-offset-2",
                "dark:focus:ring-amber-500 dark:focus:ring-offset-gray-800",
              )}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
