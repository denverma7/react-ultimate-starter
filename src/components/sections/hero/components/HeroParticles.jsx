const particles = Array.from({ length: 20 });

export default function HeroParticles() {
  return (
    <>
      {particles.map((_, index) => (
        <span
          key={index}
          className="absolute h-2 w-2 rounded-full bg-blue-400/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
}