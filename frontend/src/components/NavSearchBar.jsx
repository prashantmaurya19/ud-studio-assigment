import { twJoin } from "tailwind-merge";

const NavbarSearchBar = () => {
  return (
    <div className={twJoin(
      "w-full max-w-2xl",
      "px-4",
    )}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className={twJoin(
            "w-full",
            "px-5 py-2",
            "pr-12",
            "rounded-full",
            "transition-all duration-200",
            "dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:placeholder-gray-400",
            "bg-white text-gray-700 border-gray-300 placeholder-gray-500",
            "border",
            "focus:dark:shadow-blue-500/20",
            "focus:border-blue-500 focus:shadow-md focus:shadow-blue-500/30",
            "focus:outline-none focus:ring-1",
            "dark:focus:ring-blue-500/40",
            "focus:ring-blue-500/50",
            "dark:hover:bg-gray-700/50",
            "hover:shadow-sm",
          )}
        />
        <div className={twJoin(
          "absolute right-4 top-1/2 transform -translate-y-1/2",
          "text-gray-400 dark:text-gray-500",
        )}>
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

export default NavbarSearchBar;