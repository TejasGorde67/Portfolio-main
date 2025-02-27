import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(darkModePreference);
  }, []);

  return { isDarkMode, toggleDarkMode: () => setIsDarkMode(!isDarkMode) };
};
