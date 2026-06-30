import useHeroParallax from "../hooks/useHeroParallax";

export default function HeroParallax({ children }) {
  const { x, y } = useHeroParallax();

  return (
    <div
      style={{
        transform: `translate(${x}px, ${y}px)`,
        transition: "transform .15s linear",
      }}
    >
      {children}
    </div>
  );
}