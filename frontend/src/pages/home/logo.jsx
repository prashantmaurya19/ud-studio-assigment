import { FaSearch } from "react-icons/fa";
import { twJoin, twMerge } from "tailwind-merge";

/**
 * @param {JSXProps} p
 */
export function Logo({ className }) {
  return (
    <span
      className={twMerge(
        twJoin(
          "font-hollow text-9xl font-bold",
          "dark:text-white text-gray-800",
          "w-full h-full",
          "flex items-center justify-center",
          "uppercase",
          "relative",
        ),
        className,
      )}
    >
      image <FaSearch className="h-full w-[10%]" />
    </span>
  );
}
