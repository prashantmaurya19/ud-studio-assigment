import { joinTWClass } from "@ud/util/tailwind";
import { FaSearch } from "react-icons/fa";

/**
 * @param {{rows:number,cols:number}&JSXProps} p
 */
export function BgIconGrid({ rows = 10, cols = 10, ...a }) {
  return (
    <div
      {...a}
      style={{
        gridTemplateColumns: `repeat(${cols},1fr)`,
        gridTemplateRows: `repeat(${rows},1fr)`,
      }}
      className={joinTWClass(
        "absolute",
        "grid",
        "w-full h-full",
        "overflow-hidden",
      )}
    >
      {(function () {
        const res = [],
          t = rows * cols;
        for (let i = 0; i < t; i++) {
          res.push(
            <span
            key={i}
              className={joinTWClass(
                "w-full h-full",
                "relative",
                "flex items-center justify-center",
              )}
            >
              <FaSearch
                className={joinTWClass(
                  "w-1/2 h-1/2",
                  "absolute",
                  "fill-gray-800",
                  "dark:fill-white",
                  "transition-colors duration-200",
                  "opacity-25",
                  (i & 1) == 1
                    ? "transform-[rotate(90deg)]"
                    : "transform-[rotate(0deg)]",
                )}
              />
            </span>,
          );
        }
        return res;
      })()}
    </div>
  );
}
