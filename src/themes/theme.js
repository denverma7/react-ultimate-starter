import { themes } from "./tokens";

export function applyTheme(themeName) {
  const theme = themes[themeName];

  if (!theme) return;

  const root = document.documentElement;

  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  root.dataset.theme = themeName;
}