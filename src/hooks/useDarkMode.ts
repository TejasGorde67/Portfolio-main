// import { useEffect, useState } from "react";

// export const useDarkMode = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const darkModePreference = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     setIsDarkMode(darkModePreference);
//   }, []);

//   return { isDarkMode, toggleDarkMode: () => setIsDarkMode(!isDarkMode) };
// };

import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return { isDarkMode };
};
