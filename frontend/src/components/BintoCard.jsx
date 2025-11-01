import { twJoin } from "tailwind-merge";
import { useState, useRef, useEffect } from "react";

export function BintoCard({ imageUrl, isSelected, onSelect }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={twJoin(
        "relative",
        "group",
        "w-full",
        "aspect-[3/4]", // Fixed aspect ratio for consistent width
        "max-h-[50vh]", // Maximum height 50% of viewport height
        "bg-gray-100 dark:bg-gray-800",
        "rounded-lg",
        "overflow-hidden",
        "transition-shadow duration-200",
        "hover:shadow-lg",
      )}
      ref={imageRef}
    >
      {/* Checkbox - Always visible */}
      <div className={twJoin(
        "absolute",
        "top-2 left-2",
        "z-10",
      )}>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => onSelect(e.target.checked)}
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
          <span className={twJoin(
            "absolute",
            "inset-0",
            "flex items-center justify-center",
            "text-white",
            "pointer-events-none",
            "transition-opacity duration-200",
            isSelected ? "opacity-100" : "opacity-0",
          )}>
            <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
          </span>
        </label>
      </div>

      {/* Skeleton Loader */}
      <div className={twJoin(
        "absolute inset-0",
        "bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800",
        "animate-pulse",
        !isLoading && "hidden",
      )} />

      {/* Image */}
      {isImageVisible && (
        <img
          src={imageUrl}
          alt=""
          className={twJoin(
            "w-full h-full",
            "object-cover",
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
          )}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}