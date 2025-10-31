import { twJoin } from "tailwind-merge";
import { Logo } from "@ud/pages/home/logo";

export function BgIcon() {
  return (
    <div
      className={twJoin(
        "absolute",
        "w-full h-full",
        "bg-white",
        "dark:bg-gray-800",
        "flex",
        "justify-center",
        "transition-colors duration-200",
        "items-center",
        "pointer-events-none",
      )}
    >
      <div className="mb-8 w-[40vw] h-[14vh]">
        <Logo className="opacity-25" />
      </div>
    </div>
  );
}
