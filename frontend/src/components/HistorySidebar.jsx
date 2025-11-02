import { twJoin } from "tailwind-merge";
import { useSelector } from "react-redux";

const HistorySidebar = () => {
  const history = useSelector((state) => {
    //@ts-ignore
    return state.historyBar?.history;
  });

  return (
    <div
      style={{ height: "84vh" }}
      className={twJoin(
        "w-[15%]",
        "bg-yellow-50 dark:bg-gray-800",
        "border border-yellow-600 dark:border-gray-700",
        "shadow-lg",
        "rounded-2xl",
        "transition-all duration-200",
        "flex flex-col",
        "overflow-hidden",
      )}
    >
      {/* History Header */}
      <div
        className={twJoin(
          "px-6 py-4 bg",
          "border-b border-gray-300 dark:border-gray-700",
        )}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          History
        </h2>
      </div>

      {/* History List */}
      <div
        className={twJoin(
          "flex-1",
          "overflow-y-auto",
          "scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700",
          "scrollbar-track-transparent",
        )}
      >
        {history.length === 0 ? (
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            No search history
          </div>
        ) : (
          <ul className="py-2">
            {history.map((query, index) => (
              <li
                key={index}
                className={twJoin(
                  "px-6 py-3",
                  "text-gray-700 dark:text-gray-300",
                  "hover:bg-yellow-100 dark:hover:bg-gray-600",
                  "cursor-pointer",
                  "transition-colors duration-150",
                  "group",
                )}
              >
                <div className="text-sm">{query.query}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(query.createdOn).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HistorySidebar;
