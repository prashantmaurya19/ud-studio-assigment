import Navbar from "@ud/components/Navbar";
import { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";
import { SearchBubbleLabel } from "@ud/components/SearchBubbleLabel";

export function TopSearches() {
  const [topSearches, setTopSearches] = useState([]);

  useEffect(() => {
    fetch("/api/top-search")
      .then((d) => d.json())
      .then((data) => {
        console.log(data);
        setTopSearches(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Navbar className={twJoin("justify-center items-center")}>
      <h1
        className={twJoin(
          "dark:text-white text-amber-800 text-xl uppercase font-mono_trust_display",
        )}
      >
        Top Searches
      </h1>
      {topSearches.map((search, index) => (
        <SearchBubbleLabel
          key={index}
          query={search.query}
          searchCount={search.search_count}
        />
      ))}
    </Navbar>
  );
}

