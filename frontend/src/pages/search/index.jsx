import { twJoin } from "tailwind-merge";
import { BgIcon } from "./bg-logo";
import Navbar from "@ud/components/Navbar";
import DarkModeButton from "@ud/pages/home/dark-mode-button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserProfile from "@ud/components/UserProfile";
import NavbarSearchBar from "@ud/components/NavbarSearchBar";
import LogoutButton from "@ud/components/LogoutButton";
import HistorySidebar from "@ud/components/HistorySidebar";
import { useDispatch } from "react-redux";
import { setHistory } from "@ud/store/history-bar";
import { MainContent } from "./main-content";

export function SearchPage() {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Set initial dark mode based on system preference
  useEffect(() => {
    fetch("/api/user/isloging").then((d) => {
      if (d.status != 200) navigate("/");
    });
    fetch("/api/history")
      .then((d) => {
        if (d.status == 200) {
          return d.json();
        }
      })
      .then((data) => {
        dispatch(setHistory(data));
      })
      .catch((err) => console.log);
    if (
      localStorage.getItem("dark") !== "false" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className={twJoin("w-full h-full", "relative")}>
      <div
        className={twJoin(
          "absolute",
          "w-full h-full",
          "z-10",
          "bg-transparent",
          "flex flex-row",
        )}
      >
        <div className="w-full h-full flex justify-center items-center flex-col">
          <Navbar>
            {/*left side navbar*/}
            <div
              className={twJoin(
                "relative",
                "w-[25%] h-full",
                "flex items-center",
              )}
            >
              <UserProfile />
            </div>

            {/* Center search bar */}
            <div
              className={twJoin(
                "relative",
                "w-[50%] h-full",
                "flex justify-center items-center",
              )}
            >
              <NavbarSearchBar />
            </div>

            {/*right side navbar*/}
            <div
              className={twJoin(
                "relative",
                "w-1/4 h-full",
                "flex justify-end items-center",
                "gap-4",
                "px-4",
              )}
            >
              <LogoutButton />
              <DarkModeButton
                className="h-full"
                darkMode={darkMode}
                toggleDarkMode={() => {
                  setDarkMode(!darkMode);
                  document.documentElement.classList.toggle("dark");
                }}
              />
            </div>
          </Navbar>
          <main
            className={twJoin(
              "h-[95%] gap-1 w-full",
              "flex justify-start items-start",
              "p-4",
            )}
          >
            {/* Main content area */}
            <HistorySidebar />
            <MainContent />
          </main>
        </div>
      </div>
      <BgIcon />
    </div>
  );
}
