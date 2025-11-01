//@ts-nocheck
import { useSelector } from "react-redux";
import { twJoin } from "tailwind-merge";
import { BintoCardImage } from "@ud/components/BintoCardImage";
import { useState } from "react";

export function SearchGrid() {
  const items = useSelector((state) => state.searchInfo.search_result?.results.map((item) => ({
    imageUrl: item.links.download,
    width: item.width,
    height: item.height,
  })));
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleSelect = (index, isSelected) => {
    const newSelected = new Set(selectedItems);
    if (isSelected) {
      newSelected.add(index);
    } else {
      newSelected.delete(index);
    }
    setSelectedItems(newSelected);
  };

  return (
    <div className={twJoin(
      "w-full h-full",
      "min-h-[300px]",
      "max-h-[calc(100vh-12rem)]", // Maximum height with room for header
      "bg-white dark:bg-gray-800",
      "border border-gray-300 dark:border-gray-700",
      "shadow-lg",
      "rounded-2xl",
      "overflow-hidden",
    )}>
      <div className={twJoin(
        "w-full h-full",
        "overflow-y-auto",
        "p-2",
        "[&::-webkit-scrollbar]:w-2",
        "[&::-webkit-scrollbar-track]:bg-gray-100",
        "[&::-webkit-scrollbar-track]:dark:bg-gray-800",
        "[&::-webkit-scrollbar-thumb]:bg-gray-300",
        "[&::-webkit-scrollbar-thumb]:dark:bg-gray-600",
        "[&::-webkit-scrollbar-thumb]:rounded-full",
      )}>
        <div className={twJoin(
          "grid grid-cols-4",
          "gap-2", // 2px gap between columns
        )}>
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            {items?.filter((_, index) => index % 4 === 0).map((item, idx) => (
              <BintoCardImage
                key={idx * 4}
                imageUrl={item.imageUrl}
                width={item.width}
                height={item.height}
                isSelected={selectedItems.has(idx * 4)}
                onSelect={(checked) => handleSelect(idx * 4, checked)}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            {items?.filter((_, index) => index % 4 === 1).map((item, idx) => (
              <BintoCardImage
                key={idx * 4 + 1}
                imageUrl={item.imageUrl}
                width={item.width}
                height={item.height}
                isSelected={selectedItems.has(idx * 4 + 1)}
                onSelect={(checked) => handleSelect(idx * 4 + 1, checked)}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            {items?.filter((_, index) => index % 4 === 2).map((item, idx) => (
              <BintoCardImage
                key={idx * 4 + 2}
                imageUrl={item.imageUrl}
                width={item.width}
                height={item.height}
                isSelected={selectedItems.has(idx * 4 + 2)}
                onSelect={(checked) => handleSelect(idx * 4 + 2, checked)}
              />
            ))}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-2">
            {items?.filter((_, index) => index % 4 === 3).map((item, idx) => (
              <BintoCardImage
                key={idx * 4 + 3}
                imageUrl={item.imageUrl}
                width={item.width}
                height={item.height}
                isSelected={selectedItems.has(idx * 4 + 3)}
                onSelect={(checked) => handleSelect(idx * 4 + 3, checked)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}