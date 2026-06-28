import { useEffect } from "react";

export default function useScrollLock(lock = true) {
  useEffect(() => {
    if (!lock) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [lock]);
}