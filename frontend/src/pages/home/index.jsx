//@ts-nocheck
import { useState, useEffect } from "react";
import SearchBar from "@ud/pages/home/search-bar";
import DarkModeButton from "./dark-mode-button";
import { Logo } from "./logo";
import { joinTWClass } from "@ud/util/tailwind";
import { BgIconGrid } from "./bg-icon-grid";
import LoginOverlay from "../../components/LoginOverlay";
import Navbar from "../../components/Navbar";
import SignInButton from "../../components/SignInButton";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);
  const navigate = useNavigate();

  // Set initial dark mode based on system preference
  useEffect(() => {
    fetch("/api/user/isloging").then((d) => {
      if (d.status == 200) navigate("/search");
    });
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div
      className={joinTWClass(
        "min-h-screen",
        "dark:bg-gray-800",
        "bg-white",
        "relative",
        "transition-colors duration-200",
      )}
    >
      <div
        className={joinTWClass(
          "absolute",
          "w-full h-full",
          "z-20",
          "backdrop-blur-[3px]",
          "flex items-center justify-center flex-col",
        )}
      >
        <Navbar className="justify-end">
          <SignInButton onClick={() => setShowLoginOverlay(true)} />
          <DarkModeButton
            className="h-full"
            darkMode={darkMode}
            toggleDarkMode={() => {
              setDarkMode(!darkMode);
              document.documentElement.classList.toggle("dark");
            }}
          />
        </Navbar>

        <div className="w-full grow-1 flex flex-col items-center justify-center px-4">
          <div className="mb-8 w-[40vw] h-[14vh]">
            <Logo />
          </div>
          <SearchBar
            darkMode={darkMode}
            onKeyUp={async (e) => {
              if (e.key == "Enter") {
                // const res = await fetch("/api/user/isloging");
                // console.log(await res.status, await res.text());
                // if ((await res.status) == 200) {
                // } else {
                localStorage.setItem("query", e.currentTarget.value);
                setShowLoginOverlay(true);
                // }
              }
            }}
          />
          <LoginOverlay
            isVisible={showLoginOverlay}
            onClose={() => setShowLoginOverlay(false)}
          />
        </div>
      </div>
      <BgIconGrid rows={11} cols={11} />
    </div>
  );
};

export default HomePage;
