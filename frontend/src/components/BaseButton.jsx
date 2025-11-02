//@ts-nocheck
import { twJoin } from "tailwind-merge";
/**
 * @param {string} variant
 */
const getVariantClasses = (variant) => {
  switch (variant) {
    case "github":
      return "bg-black text-white hover:bg-gray-800";
    case "google":
      return "bg-white text-gray-800 hover:bg-gray-100 border border-gray-300";
    case "facebook":
      return "bg-[#1877F2] text-white hover:bg-[#1666d1]";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

/**
 * @param {{icon:HTMLElement,text:string,variant:string}&JSXProps} p
 */
const BaseButton = ({
  icon,
  text,
  variant = "default",
  className = "",
  ...a
}) => {
  return (
    <a
      {...a}
      // onClick={onClick}
      className={twJoin(
        "flex items-center justify-center",
        "w-full px-6 py-3",
        "rounded-lg",
        "transition-all duration-200",
        "font-medium",
        "no-underline decoration-[none]",
        "space-x-3",
        getVariantClasses(variant),
        className,
      )}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{text}</span>
    </a>
  );
};

export default BaseButton;

