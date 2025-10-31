import { joinTWClass } from "@ud/util/tailwind";
import { twMerge } from "tailwind-merge";

/**
 * @param {JSXProps} p
 */
const Navbar = ({ children, className = "" }) => {
  return (
    <nav
      className={twMerge(
        joinTWClass(
          "w-[95%] h-[7%]",
          "relative",
	  "border-solid border-2",
          "dark:border-white",
          "bg-gray-800",
	  "backdrop:blur-3xl",
          "dark:bg-white/5",
          "bg-gray-800/10",
          "z-50 px-4 py-2",
          "rounded-[100px]",
          "flex justify-start items-start gap-2",
          "mt-2",
        ),
        className,
      )}
    >
      {children}
    </nav>
  );
};

export default Navbar;

