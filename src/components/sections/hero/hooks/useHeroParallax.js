import { useEffect, useState } from "react";

export default function useHeroParallax() {
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX - window.innerWidth / 2) / 35;
      const y = (event.clientY - window.innerHeight / 2) / 35;

      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return offset;
}