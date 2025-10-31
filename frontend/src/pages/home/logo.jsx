import { joinTWClass } from "@ud/util/tailwind";
import { FaBeer, FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

/**
 * @param {JSXProps} p
 */
export function Logo({ className }) {
  return (
    <span
      className={twMerge(
        joinTWClass(
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
