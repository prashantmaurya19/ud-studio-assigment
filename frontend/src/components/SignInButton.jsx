import { joinTWClass } from "@ud/util/tailwind";

const SignInButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={joinTWClass(
        "w-max h-[90%]",
        "px-8 py-2.5",
        "rounded-full",
        "text-xl font-medium",
        "transition-colors duration-200",
        "bg-white dark:bg-gray-700",
        "text-red-500 dark:text-red-400",
        "hover:bg-red-200",
        "border border-red-200 dark:border-red-800",
        "flex items-center gap-2",
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
      Sign in
    </button>
  );
};

export default SignInButton;

