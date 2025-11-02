//@ts-nocheck
import { twJoin } from "tailwind-merge";
import { lazy, Suspense, memo } from "react";
import { BintoCardSkeleton } from "./BintoCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { pushAndPopSelect } from "@ud/store/selected-image";

// Create lazy image component factory
const createLazyImage = (imageUrl) =>
  lazy(() => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        resolve({
          default: ({ className }) => (
            <img src={imageUrl} alt="" className={className} />
          ),
        });
      };
    });
  });

export const BintoCardImage = ({ imageUrl, width, height, onSelect }) => {
  // Calculate aspect ratio from width and height
  const aspectRatio = width / height;
  const isSelected = useSelector((state) =>
    state.selectedImage.selected.includes(imageUrl),
  );
  const dispatch = useDispatch();

  return (
    <div
      className={twJoin(
        "relative",
        "group",
        "w-full",
        "overflow-hidden",
        "rounded-lg",
        "transition-shadow duration-200",
        "hover:shadow-lg",
      )}
      style={{ aspectRatio }}
    >
      {/* Checkbox - Always visible */}
      <div className={twJoin("absolute", "top-2 left-2", "z-10")}>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => {
              dispatch(pushAndPopSelect(imageUrl));
            }}
            className={twJoin(
              "w-4 h-4",
              "rounded",
              "border-2",
              "appearance-none",
              "cursor-pointer",
              "checked:bg-blue-500",
              "checked:border-blue-500",
              "border-gray-300 dark:border-gray-600",
              "bg-white dark:bg-gray-700",
              "transition-colors duration-200",
            )}
          />
          <span
            className={twJoin(
              "absolute",
              "inset-0",
              "flex items-center justify-center",
              "text-white",
              "pointer-events-none",
              "transition-opacity duration-200",
              isSelected ? "opacity-100" : "opacity-0",
            )}
          >
            <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
          </span>
        </label>
      </div>
      <BintoImage imageUrl={imageUrl + "&w=800&h=800"} />
    </div>
  );
};

const BintoImage = memo(({ imageUrl }) => {
  return (
    <Suspense fallback={<BintoCardSkeleton />}>
      {(() => {
        const LazyImage = createLazyImage(imageUrl);
        return (
          <LazyImage className={twJoin("w-full h-full", "object-cover")} />
        );
      })()}
    </Suspense>
  );
});

