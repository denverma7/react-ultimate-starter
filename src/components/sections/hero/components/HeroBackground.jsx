export default function HeroBackground() {
  return (
    <div className="absolute inset-0">

      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right,#e2e8f0 1px,transparent 1px),linear-gradient(to bottom,#e2e8f0 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

    </div>
  );
}