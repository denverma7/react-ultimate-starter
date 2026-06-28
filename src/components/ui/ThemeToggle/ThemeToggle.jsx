import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border px-4 py-2 transition hover:scale-105"
      style={{
        background: "var(--color-surface)",
        color: "var(--color-text)",
        borderColor: "var(--color-border)",
      }}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}