export default function FeatureSectionBackground() {
  return (
    <>
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#0f172a 1px,transparent 1px),linear-gradient(to bottom,#0f172a 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}