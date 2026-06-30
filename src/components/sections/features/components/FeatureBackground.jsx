export default function FeatureBackground() {
  return (
    <>
      {/* Gradient Glow */}
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#0f172a 1px,transparent 1px),linear-gradient(to bottom,#0f172a 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </>
  );
}