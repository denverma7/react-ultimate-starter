import { useEffect } from "react";

export default function useEscapeKey(callback, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, enabled]);
}