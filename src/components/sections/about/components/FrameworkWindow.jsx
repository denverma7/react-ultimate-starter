export default function FrameworkWindow({ children }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-2xl backdrop-blur-sm">
      {children}
    </div>
  );
}