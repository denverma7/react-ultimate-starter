import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { applyTheme } from "@/themes";

export const ThemeContext = createContext();

const STORAGE_KEY = "rusf-theme";

export default function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () =>
        setTheme((prev) =>
          prev === "light" ? "dark" : "light"
        ),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}