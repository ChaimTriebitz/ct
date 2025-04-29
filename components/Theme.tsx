"use client";
import { svgs } from "@/assets";
import { ThemeProp } from "@/types";
import { useEffect, useState } from "react";

export function Theme() {

   const [theme, setTheme] = useState<ThemeProp>("light");

   useEffect(() => {
      const savedTheme = localStorage.getItem("theme") as ThemeProp;
      if (savedTheme) {
         setTheme(savedTheme);
         document.documentElement.setAttribute("data-theme", savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         setTheme("dark");
         document.documentElement.setAttribute("data-theme", "dark");
      }
   }, []);

   const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
   };

   return (
      <button
         onClick={toggleTheme}
         className={theme === "dark" ? "theme light" : "theme dark"}
         aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
         title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
         {theme === "light" ? svgs.sun : svgs.moon}
      </button>
   );
}
