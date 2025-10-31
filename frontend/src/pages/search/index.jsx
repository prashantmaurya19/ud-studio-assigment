import { twJoin } from "tailwind-merge";
import { BgIcon } from "./bg-logo";
import Navbar from "@ud/components/Navbar";
import DarkModeButton from "@ud/pages/home/dark-mode-button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserProfile from "@ud/components/UserProfile";
import NavbarSearchBar from "@ud/components/NavSearchBar";
import LogoutButton from "@ud/components/LogoutButton";

export function SearchPage() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  // Set initial dark mode based on system preference
  useEffect(() => {
    fetch("/api/user/isloging").then((d) => {
      if (d.status != 200) navigate("/");
    });
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
          "flex items-center justify-center flex-col",
        )}
      >
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
              "px-4"
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
            "w-full",
            "grow-1",
            "flex justify-center items-center",
          )}
        ></main>
      </div>
      <BgIcon />
    </div>
  );
}
