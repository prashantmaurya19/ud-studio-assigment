import { useNavigate } from "react-router";
import { twJoin } from "tailwind-merge";

const LogoutButton = ({}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        fetch("/api/user/logout");
        navigate("/");
      }}
      className={twJoin(
        "px-4 py-1.5",
        "rounded-full",
        "text-sm font-medium",
        "transition-all duration-200",
        "border border-red-500 dark:border-red-600",
        "text-red-500 dark:text-red-500",
        "hover:bg-red-50 dark:hover:bg-red-500/10",
        "flex items-center gap-2",
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      Logout
    </button>
  );
};

export default LogoutButton;

