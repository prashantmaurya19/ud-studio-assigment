import { joinTWClass } from "@ud/util/tailwind";
import { useState } from "react";

/**
 * @param {{darkMode:boolean}&JSXProps} p
 */
const SearchBar = ({ darkMode, ...a }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className={joinTWClass(
            "w-full px-5 py-3 pr-12",
            "rounded-full",
            "transition-all duration-200",
            "dark:bg-gray-800 dark:text-gray-200 dark:border-white dark:placeholder-gray-400",
            "bg-white text-gray-700 border-gray-700 placeholder-gray-500",
            "border-1 border-solid",
            "focus:dark:shadow-blue-500/20",
            "focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/30",
            "focus:outline-none focus:ring-2",
            "dark:focus:ring-blue-500/40",
            "focus:ring-blue-500/50",
            "dark:hover:bg-gray-700 hover:shadow-md",
          )}
          onFocus={handleFocus}
          onBlur={() => setIsFocused(false)}
          {...a}
        />
        <div
          className={joinTWClass(`
          absolute right-4 top-1/2 transform -translate-y-1/2
          transition-colors duration-200
          ${darkMode ? "text-gray-400" : "text-gray-500"}
          ${isFocused ? (darkMode ? "text-blue-400" : "text-blue-500") : ""}
        `)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
