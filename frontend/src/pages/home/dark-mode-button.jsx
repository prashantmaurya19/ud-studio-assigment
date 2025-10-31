import { joinTWClass } from "@ud/util/tailwind";
import { twMerge } from "tailwind-merge";

/**
 * @param {{darkMode:boolean,toggleDarkMode:function():void}&JSXProps} p
 */
const DarkModeButton = ({ darkMode, toggleDarkMode, className }) => {
  return (
    <div className={twMerge("relative aspect-square", className)}>
      <button
        onClick={toggleDarkMode}
        className={joinTWClass(
          "absolute w-full h-full p-2",
          "rounded-full hover:bg-gray-200 dark:hover:bg-gray-700",
          "border-1 border-solid dark:border-gray-200 border-gray-700",
          "flex items-center justify-center",
          "transition-colors",
        )}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default DarkModeButton;

