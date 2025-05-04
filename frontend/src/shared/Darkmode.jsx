import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";

import { MdLightMode } from "react-icons/md";

export const Darkmode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "light" ?  <MdDarkMode/> : <MdLightMode/>}
        </button>
      </div>
    </>
  );
};
